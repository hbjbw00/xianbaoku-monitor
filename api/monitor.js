// api/monitor.js
const got = require('got');
const { Redis } = require('@upstash/redis');
const { getGroupFromTitle, getGroupAvatar } = require('./groupRules');

// ============== 配置区域 ==============
// 从环境变量读取配置
const PUSHME_KEY = process.env.PUSHME_KEY || '';
const PUSHME_URL = 'https://push.i-i.me';

// 息知配置
const WX_XIZHI_KEY = process.env.WX_XIZHI_KEY || '';

// 初始化 Redis
const redis = Redis.fromEnv();

// 线报酷配置
//可使用域名为：
//自己复制新链接打开，http://new.xianbao.fun 或 http://news.xianbao.fun
//无法打开时可以使用这个：http://new.ixbk.net 或 http://news.ixbk.net
//无法使用也可以可以使用这个：http://new.ixbk.fun 或 http://news.ixbk.fun
const DOMIN = 'http://news.xianbao.fun';
const NEW_URL = DOMIN + '/plus/json/push.json';

// ============== Redis 配置（优化版）==============
// 使用独立的 Key 存储每个 ID，设置 7 天过期
// 格式：xianbaoku_sent_{id} -> 存储时间戳
const REDIS_KEY_PREFIX = 'xianbaoku_sent_';
const EXPIRE_SECONDS = 7 * 24 * 60 * 60; // 7 天过期

// 内存缓存：本次执行中已处理的 ID（避免重复检查 Redis）
const sentIdsCache = new Set();

// ============== 筛选配置 ==============
// 分类屏蔽
const pingbifenlei = '母婴儿童|宠物天地|医疗保健|微博超话|狗组|爱猫生活|爱猫澡盆';

// 标题屏蔽
const pingbibiaoti = '';
const zhanxianbiaoti = '';
const pingbibiaotiplus = '';

// 内容屏蔽
const pingbineirong = '肖战|珂拉琪|薇诺娜|榴莲|星鲨|斯维诗|毛戈平|思笔乐|面粉|小麦粉|斐思妮|螺霸王|桂格|颐莲|犬粮|狗粮|猫粮|珂润|滋源|花漾|敷益清|心相印|每日鲜语|舒客|佳洁士|云南山泉|GNUV|斐跃|拉面说|优可舒|猫人|拉拜诗|男童|女童|儿童|大童|中童|小童|雪中飞';
const zhanxianneirong = '';
const pingbineirongplus = '';

// 楼主屏蔽
const pingbilouzhu = '辛德瑞拉小卖部';
const zhanxianlouzhu = '';
const pingbilouzhuplus = '';

// 注册时间屏蔽
const pingbitime = "5";

// 只看它关键词
const zkt_gjc = '查漏补缺|税|王一博|安踏|百雀羚|C咖|得宝|TEMPO|YAYA|鸭鸭|法丽兹|EVISU|蕉内|BANANAIN|海伦凯勒|LACOSTE|LOEWE|罗意威|JIMMYCHOO|香奈儿|CHANEL|植村秀|纯甄|轻酪乳|勇闯天涯|黑狮|冰红茶|妙可蓝多|林氏|吨吨|台铃|阿道夫|FLYCO|飞科|lifespace|益倍适|漫步者|嘉实多|红牛|SKG|水卫士|水卫仕|乐淇|盐津铺子|舒莱|杜蕾斯|冈本|Whoo|后拱辰|优时颜|白象|臭宝|李子柒|好欢螺|三养|劲仔|脱骨侠|小米|红米|REDMI|K90|肯德基|KFC|麦当劳|麦当当|塔斯汀|华莱士|必胜客|蜜雪|林里|LINLEE|窑鸡|瑞幸|星巴克|茉莉奶白|一点点|1点点|茶百道|喜茶|霸王茶姬|coco|罗森|薪水|平安|好车主|河南|上海|移动|联通|话费|水费|电费|燃气费|水电燃|缴费|国网|云包场|优酷|火车|12306|高铁|机票|掌上|招行|招.行|招商|工行|工.行|工商|中行|中.行|中国银行|农行|农.行|农业|邮储|邮.储|邮政|建行|建.行|建设|交行|交.行|交通|浦发|浦.发|中信|中.信|还款|云闪付|云闪.付|云少妇|ysf|数币|数字人民币|碰一|立减金|立减J|ljj|Q币|QB|bug|必中|小红书|博乐纯|清朗一日|欧舒适|清氧清|欧柯视|牙线|酷玩|Crucial|希捷|铠侠|英睿达|镁光|美光|盒马|好想来|开通|hfp|WPS|年卡|高露洁|面包|南星|肉松小贝|馍片|沙琪玛|趣多多|威化饼|回力|电影|湿巾|擦镜|镜片清洁|镜头清洁|蔡司|湿厕纸|雪糕|冰淇淋|洗烘|洗衣机|火腿肠|王中王|五常|食用油|大豆油|花生油|胚芽油|生抽|鸡蛋|微波炉|短袖|T恤|海飞丝|高钙低脂|低脂高钙|手抓饼|鸡蛋灌饼|皇家小虎|番茄酱|番茄沙司';

// ============== 工具函数 ==============
function daysComputed(time) {
  var oldTimeFormat = new Date(time.replace(/-/g, '/'));
  var nowDate = new Date();
  if (nowDate.getTime() - oldTimeFormat.getTime() > 0) {
    var times = nowDate.getTime() - oldTimeFormat.getTime();
    var days = parseInt(times / (60 * 60 * 24 * 1000));
    return days;
  }
  return 0;
}

function add0(m) {
  return m < 10 ? '0' + m : m;
}

function htmlToMarkdown(shuju) {
  let html = shuju.content_html ? shuju.content_html : '';
  html = html.replace(/<h([1-6])>(.*?)<\/h\1>/gi, function(match, level, content) {
    return '#'.repeat(level) + ' ' + content + '\n\n';
  });
  html = html.replace(/<a\s+href="(.*?)".*?>(.*?)<\/a>/gi, '[$2]($1)');
  html = html.replace(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi, '\n\n![$2]($1)\n\n');
  html = html.replace(/<img[^>]+src="([^"]+)"[^>]*>/gi, '\n\n![]($1)\n\n');
  html = html.replace(/<br\s*\/?>/gi, '\n\n');
  html = html.replace(/<p[^>]*>/gi, '\n\n');
  html = html.replace(/<\/p>/gi, '\n\n');
  html = html.replace(/<[^>]+>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  html = `${html}\n\n原文链接：[${shuju.url}](${shuju.url})\n\n\n\n`;
  return html.trim();
}

function tuisong_replace(text, shuju) {
  if (shuju.category_name) { shuju.catename = shuju.category_name; }
  if (shuju.posttime) {
    let posttime = new Date(shuju.posttime * 1000);
    shuju.datetime = `${posttime.getFullYear()}-${add0(posttime.getMonth() + 1)}-${add0(posttime.getDate())}`;
    shuju.shorttime = `${posttime.getHours()}:${add0(posttime.getMinutes())}`;
  }
  let content_html = `${shuju.content_html}<br>&nbsp;<br>&nbsp;<br>原文链接：<a href="${shuju.url}"target="_blank">${shuju.url}</a><br>&nbsp;<br>&nbsp;<br>`;
  const replacements = {
    '{标题}': shuju.title,
    '{内容}': shuju.content,
    '{Html内容}': content_html,
    '{Markdown内容}': htmlToMarkdown(shuju),
    '{分类名}': shuju.catename,
    '{分类ID}': shuju.cateid,
    '{链接}': shuju.url,
    '{日期}': shuju.datetime,
    '{时间}': shuju.shorttime,
    '{楼主}': shuju.louzhu,
    '{类目}': shuju.category_name,
    '{价格}': shuju.price,
    '{商城}': shuju.mall_name,
    '{品牌}': shuju.brand,
    '{图片}': shuju.pic
  };
  for (const [key, value] of Object.entries(replacements)) {
    if (value !== undefined) {
      text = text.replace(new RegExp(key, 'g'), value);
    } else {
      text = text.replace(new RegExp(key, 'g'), '');
    }
  }
  return text;
}

// 筛选函数
function listfilter(group, pingbifenlei, pingbilouzhu, zhanxianlouzhu, pingbilouzhuplus, pingbibiaoti, zhanxianbiaoti, pingbibiaotiplus, pingbineirong, zhanxianneirong, pingbineirongplus, pingbitime) {
  var louzhubaoliu, biaotibaoliu, neirongbaoliu, louzhupingbi, louzhupingbiplus, biaotipingbi, biaotipingbiplus, neirongpingbi, neirongpingbiplus;
  
  if (pingbitime && group.louzhuregtime) {
    if (pingbitime.match(new RegExp(/###/), "g")) {
      let pingbitimearr = pingbitime.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbitimearr.length; j++) {
        let xiaopingbitimearr = pingbitimearr[j].split("###");
        if (group.catename && group.catename.match(new RegExp(xiaopingbitimearr[0], "i")) && xiaopingbitimearr[1] > daysComputed(group.louzhuregtime)) {
          return false;
        }
      }
    } else {
      if (pingbitime > daysComputed(group.louzhuregtime)) {
        return false;
      }
    }
  }
  
  if (pingbifenlei && group.catename) {
    if (group.catename.match(new RegExp(pingbifenlei, "i"))) {
      return false;
    }
  }
  
  if (zhanxianlouzhu && group.louzhu) {
    if (zhanxianlouzhu.match(new RegExp(/###/), "g")) {
      let zhanxianlouzhuarr = zhanxianlouzhu.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < zhanxianlouzhuarr.length; j++) {
        let xiaozhanxianlouzhuarr = zhanxianlouzhuarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaozhanxianlouzhuarr[0], "i"))) && group.louzhu.match(new RegExp(xiaozhanxianlouzhuarr[1], "i"))) {
          louzhubaoliu = 1;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(zhanxianlouzhu, "i"))) {
        louzhubaoliu = 1;
      }
    }
  }
  
  if (pingbilouzhu && group.louzhu && louzhubaoliu != 1) {
    if (pingbilouzhu.match(new RegExp(/###/), "g")) {
      let pingbilouzhuarr = pingbilouzhu.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbilouzhuarr.length; j++) {
        let xiaopingbilouzhuarr = pingbilouzhuarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbilouzhuarr[0], "i"))) && group.louzhu.match(new RegExp(xiaopingbilouzhuarr[1], "i"))) {
          louzhupingbi = 1;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(pingbilouzhu, "i"))) {
        louzhupingbi = 1;
      }
    }
  }
  
  if (pingbilouzhuplus && group.louzhu && louzhupingbi != 1) {
    if (pingbilouzhuplus.match(new RegExp(/###/), "g")) {
      let pingbilouzhuplusarr = pingbilouzhuplus.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbilouzhuplusarr.length; j++) {
        let xiaopingbilouzhuplusarr = pingbilouzhuplusarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbilouzhuplusarr[0], "i"))) && group.louzhu.match(new RegExp(xiaopingbilouzhuplusarr[1], "i"))) {
          louzhupingbiplus = 1;
          louzhubaoliu = 0;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(pingbilouzhuplus, "i"))) {
        louzhupingbiplus = 1;
        louzhubaoliu = 0;
      }
    }
  }
  
  if (louzhupingbi == 1 || louzhupingbiplus == 1) {
    return false;
  }
  
  if (zhanxianbiaoti && group.title) {
    if (zhanxianbiaoti.match(new RegExp(/###/), "g")) {
      let zhanxianbiaotiarr = zhanxianbiaoti.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < zhanxianbiaotiarr.length; j++) {
        let xiaozhanxianbiaotiarr = zhanxianbiaotiarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaozhanxianbiaotiarr[0], "i"))) && group.title.match(new RegExp(xiaozhanxianbiaotiarr[1], "i"))) {
          biaotibaoliu = 1;
        }
      }
    } else {
      if (group.title.match(new RegExp(zhanxianbiaoti, "i"))) {
        biaotibaoliu = 1;
      }
    }
  }
  
  if (pingbibiaoti && group.title && louzhubaoliu != 1 && biaotibaoliu != 1) {
    if (pingbibiaoti.match(new RegExp(/###/), "g")) {
      let pingbibiaotiarr = pingbibiaoti.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbibiaotiarr.length; j++) {
        let xiaopingbibiaotiarr = pingbibiaotiarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbibiaotiarr[0], "i"))) && group.title.match(new RegExp(xiaopingbibiaotiarr[1], "i"))) {
          biaotipingbi = 1;
        }
      }
    } else {
      if (group.title.match(new RegExp(pingbibiaoti, "i"))) {
        biaotipingbi = 1;
      }
    }
  }
  
  if (pingbibiaotiplus && group.title && louzhubaoliu != 1 && biaotipingbi != 1) {
    if (pingbibiaotiplus.match(new RegExp(/###/), "g")) {
      let pingbibiaotiplusarr = pingbibiaotiplus.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbibiaotiplusarr.length; j++) {
        let xiaopingbibiaotiplusarr = pingbibiaotiplusarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbibiaotiplusarr[0], "i"))) && group.title.match(new RegExp(xiaopingbibiaotiplusarr[1], "i"))) {
          biaotipingbiplus = 1;
          biaotibaoliu = 0;
        }
      }
    } else {
      if (group.title.match(new RegExp(pingbibiaotiplus, "i"))) {
        biaotipingbiplus = 1;
        biaotibaoliu = 0;
      }
    }
  }
  
  if (biaotipingbi == 1 || biaotipingbiplus == 1) {
    return false;
  }
  
  if (zhanxianneirong && group.content) {
    if (zhanxianneirong.match(new RegExp(/###/), "g")) {
      let zhanxianneirongarr = zhanxianneirong.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < zhanxianneirongarr.length; j++) {
        let xiaozhanxianneirongarr = zhanxianneirongarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaozhanxianneirongarr[0], "i"))) && group.content.match(new RegExp(xiaozhanxianneirongarr[1], "i"))) {
          neirongbaoliu = 1;
        }
      }
    } else {
      if (group.content.match(new RegExp(zhanxianneirong, "i"))) {
        neirongbaoliu = 1;
      }
    }
  }
  
  if (pingbineirong && group.content && louzhubaoliu != 1 && biaotibaoliu != 1 && neirongbaoliu != 1) {
    if (pingbineirong.match(new RegExp(/###/), "g")) {
      let pingbineirongarr = pingbineirong.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbineirongarr.length; j++) {
        let xiaopingbineirongarr = pingbineirongarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbineirongarr[0], "i"))) && group.content.match(new RegExp(xiaopingbineirongarr[1], "i"))) {
          neirongpingbi = 1;
        }
      }
    } else {
      if (group.content.match(new RegExp(pingbineirong, "i"))) {
        neirongpingbi = 1;
      }
    }
  }
  
  if (pingbineirongplus && group.content && louzhubaoliu != 1 && biaotibaoliu != 1 && neirongpingbi != 1) {
    if (pingbineirongplus.match(new RegExp(/###/), "g")) {
      let pingbineirongplusarr = pingbineirongplus.split(/<br>|\n\n|\r\n/);
      for (let j = 0; j < pingbineirongplusarr.length; j++) {
        let xiaopingbineirongplusarr = pingbineirongplusarr[j].split("###");
        if ((!group.catename || group.catename.match(new RegExp(xiaopingbineirongplusarr[0], "i"))) && group.content.match(new RegExp(xiaopingbineirongplusarr[1], "i"))) {
          neirongpingbiplus = 1;
          neirongbaoliu = 0;
        }
      }
    } else {
      if (group.content.match(new RegExp(pingbineirongplus, "i"))) {
        neirongpingbiplus = 1;
        neirongbaoliu = 0;
      }
    }
  }
  
  if (neirongpingbi == 1 || neirongpingbiplus == 1) {
    return false;
  }
  
  return true;
}

// ============== 核心存储函数（优化版）==============
async function checkAndMarkMessage(id) {
    // 1. 先查内存缓存（本次执行中已经处理过的不再处理）
    if (sentIdsCache.has(id)) {
        return false; // 已经处理过，不是新消息
    }

    // 2. 尝试 Redis
    try {
        const key = `${REDIS_KEY_PREFIX}${id}`;
        const added = await redis.setnx(key, Date.now());
        if (added === 1) {
            await redis.expire(key, EXPIRE_SECONDS);
        }
        // 无论是否成功，都加入内存缓存，避免重复尝试
        sentIdsCache.add(id);
        return added === 1;
    } catch (error) {
        // 3. 配额用尽时的降级策略：视为新消息，推送！
        console.warn(`⚠️ Redis 配额用尽 (ID: ${id})，本次执行视为新消息推送。`);
        // 加入内存缓存，防止本次执行中重复推送同一条
        sentIdsCache.add(id);
        // 返回 true，让这条消息能够被推送
        return true;
    }
}

// ============== 推送函数 ==============
async function pushMeNotify(title, content, groupName) {
  if (!PUSHME_KEY) {
    console.log('⚠️ 未配置 PUSHME_KEY，请设置环境变量');
    return false;
  }

  // 限制分组名长度（最多9个字符，PushMe 对分组名的限制）
  let finalGroupName = groupName;
  if (finalGroupName.length > 9) {
    finalGroupName = finalGroupName.substring(0, 9);
  }
  
  // 查找分组头像配置
  const avatarConfig = getGroupAvatar(groupName);
  let avatarPart = finalGroupName; // 默认使用分组名作为文字头像
  
  if (avatarConfig && avatarConfig.avatarUrl) {
    // 如果配置了图片地址，使用图片作为头像
    avatarPart = avatarConfig.avatarUrl;
    console.log(`🖼️ 分组 "${groupName}" 使用图片头像: ${avatarConfig.avatarUrl.substring(0, 50)}...`);
  } else {
    console.log(`📝 分组 "${groupName}" 使用文字头像: "${finalGroupName}"`);
  }
  
  // 构建标题：[#分组名!头像]标题
  // 格式说明：
  //   - 分组名：用于在 APP 中分组显示
  //   - 头像：可以是文字（最多9字符）、emoji 或图片 URL
  let finalTitle = `[#${finalGroupName}!${avatarPart}]${title}`;
  
  // 标题长度限制（PushMe 限制 100 字符）
  if (finalTitle.length > 100) {
    finalTitle = finalTitle.substring(0, 100);
  }

  try {
    const response = await got.post(PUSHME_URL, {
      json: {
        push_key: PUSHME_KEY,
        title: finalTitle,
        content: content.substring(0, 5000),
        type: "markdown"
      },
      timeout: 10000
    });
    
    if (response.body === 'success') {
      console.log(`✅ PushMe 推送成功 [分组:${finalGroupName}]: ${title.substring(0, 50)}...`);
      return true;
    } else {
      console.log(`❌ PushMe 推送失败: ${response.body}`);
      return false;
    }
  } catch (error) {
    console.error('❌ PushMe 推送错误:', error.message);
    return false;
  }
}

async function wxXiZhiNotify(title, content) {
  if (!WX_XIZHI_KEY) {
    console.log('⚠️ 未配置 WX_XIZHI_KEY，跳过息知推送');
    return false;
  }

  try {
    const response = await got.post(WX_XIZHI_KEY, {
      json: {
        title: title.substring(0, 200),
        content: content
      },
      timeout: 10000
    });
    
    let result;
    try {
      result = JSON.parse(response.body);
    } catch (e) {
      result = response.body;
    }
    
    if (result.code === 200 || result.code === 0) {
      console.log(`✅ 息知推送成功: ${title.substring(0, 50)}...`);
      return true;
    } else {
      console.log(`❌ 息知推送失败: ${JSON.stringify(result)}`);
      return false;
    }
  } catch (error) {
    console.error('❌ 息知推送错误:', error.message);
    return false;
  }
}

// ============== 主函数 ==============
module.exports = async (req, res) => {
  const startTime = Date.now();
  console.log('🚀 开始获取线报酷数据...');
  
  // 清空本次执行的内存缓存（每次执行都是新的空 Set）
  sentIdsCache.clear();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  try {
    if (!PUSHME_KEY) {
      throw new Error('未配置 PUSHME_KEY，请在 Vercel 环境变量中设置');
    }
    
    console.log('📡 请求线报酷 API...');
    const response = await got.get(NEW_URL, {
      timeout: 30000,
      retry: { limit: 2 }
    });
    
    const xbkdata = JSON.parse(response.body);
    console.log(`📊 获取到 ${xbkdata.length} 条数据`);
    
    let newItems = [];
    let filteredCount = 0;
    let alreadySentCount = 0;
    
    for (const item of xbkdata) {
      const isNew = await checkAndMarkMessage(item.id);
      
      if (isNew) {
        // checkAndMarkMessage 已经完成了标记和保存，无需额外操作
        
        if (listfilter(item, pingbifenlei, pingbilouzhu, zhanxianlouzhu, pingbilouzhuplus, pingbibiaoti, zhanxianbiaoti, pingbibiaotiplus, pingbineirong, zhanxianneirong, pingbineirongplus, pingbitime)) {
          newItems.push(item);
        } else {
          filteredCount++;
        }
      } else {
        alreadySentCount++;
      }
    }
    
    console.log(`📋 新消息 ${newItems.length} 条，已发送 ${alreadySentCount} 条，被筛选过滤 ${filteredCount} 条`);
    
    let finalItems = [];
    newItems.forEach(item => {
      if (listfilter(item, "", "", "", "", "(.*)", zkt_gjc ? zkt_gjc : "(.*)", "", "", "", "", "")) {
        finalItems.push(item);
      } else {
        console.log(`🔍 只看它过滤: ${item.title}`);
      }
    });
    
    console.log(`✨ 最终推送 ${finalItems.length} 条`);
    
    let pushSuccess = 0;
    let pushFailed = 0;
    let xizhiSuccess = 0;
    let xizhiFailed = 0;
    
    for (const item of finalItems) {
      item.url = DOMIN + item.url;
      
      const title = tuisong_replace("{标题}【{分类名}】", item);
      const content = tuisong_replace(`## {标题}

{内容}

---

### 🔗 线报信息
**分类**：{分类名}  
**发布时间**：{日期} {时间}  

### 📎 原文地址
\`\`\`
{链接}
\`\`\`

📍 [点击打开链接]({链接})

---

🌟 来自cron-job.org定时任务  
🌟 由Vercel部署 Upstash提供可持续化储存`, item);
      
      let groupName = getGroupFromTitle(title, zkt_gjc);
      
      if (!groupName) {
        groupName = '其他线报';
      }
      
      console.log(`📂 匹配分组: ${groupName} | 标题: ${title.substring(0, 60)}...`);
      
      const pushResult = await pushMeNotify(title, content, groupName);
      if (pushResult) {
        pushSuccess++;
      } else {
        pushFailed++;
      }
      
      if (title.includes('云包场') || (item.content && item.content.includes('云包场'))) {
        const xizhiResult = await wxXiZhiNotify(
          `【云包场】${title}`,
          content
        );
        if (xizhiResult) {
          xizhiSuccess++;
        } else {
          xizhiFailed++;
        }
        console.log(`📤 云包场内容额外推送到息知: ${title.substring(0, 50)}...`);
      }
      
      console.log(`📢 推送: ${item.title.substring(0, 50)}...`);
      await new Promise(r => setTimeout(r, 500));
    }
    
    const duration = Date.now() - startTime;
    console.log(`✅ 执行完成，耗时 ${duration}ms`);
    console.log(`   PushMe: 成功 ${pushSuccess} 条，失败 ${pushFailed} 条`);
    if (xizhiSuccess > 0 || xizhiFailed > 0) {
      console.log(`   息知: 成功 ${xizhiSuccess} 条，失败 ${xizhiFailed} 条`);
    }
    
    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      total: xbkdata.length,
      newItems: newItems.length,
      alreadySentCount: alreadySentCount,
      filteredCount: filteredCount,
      finalItems: finalItems.length,
      pushSuccess: pushSuccess,
      pushFailed: pushFailed,
      xizhiSuccess: xizhiSuccess,
      xizhiFailed: xizhiFailed,
      duration: duration,
      message: `发现 ${finalItems.length} 条新线报，PushMe推送成功 ${pushSuccess} 条`
    });
    
  } catch (error) {
    console.error('❌ 执行出错:', error.message);
    if (error.response) {
      console.error('状态码:', error.response.statusCode);
    }
    
    res.status(500).json({
      success: false,
      timestamp: new Date().toISOString(),
      error: error.message,
      type: error.name
    });
  }
};
