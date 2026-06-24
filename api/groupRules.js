// ============== 分组规则配置 ==============
// 按优先级顺序排列，匹配到第一个就停止
// 每个规则包含：
//   - keywords: 匹配关键词数组（支持正则表达式或普通字符串）
//   - groupName: 分组显示名称（同时作为头像，最多9个字符）

const groupRules = [
    // 运动品牌
    { keywords: ['回力'], groupName: '回力' },
    { keywords: ['依视路', '膜致', 'X4'], groupName: '眼镜' },
    
    // 银行/金融类
    { keywords: ['平安', '好车主'], groupName: '平安' },
    { keywords: ['工\\.行', '工行', '工商'], groupName: '工商银行' },
    { keywords: ['招\\.行', '招行', '招商'], groupName: '招商银行' },
    { keywords: ['中\\.行', '中行', '中国银行'], groupName: '中国银行' },
    { keywords: ['农\\.行', '农行', '农业'], groupName: '农业银行' },
    { keywords: ['建\\.行', '建行', '建设'], groupName: '建设银行' },
    { keywords: ['交\\.行', '交行', '交通'], groupName: '交通银行' },
    { keywords: ['邮\\.储', '邮储', '邮政'], groupName: '邮政储蓄' },
    { keywords: ['浦\\.发', '浦发'], groupName: '浦发银行' },
    { keywords: ['中\\.信', '中信'], groupName: '中信银行' },
    { keywords: ['云闪付', '云闪\\.付', '云少妇', 'ysf'], groupName: '云闪付' },
    { keywords: ['数币', '数字人民币'], groupName: '数字人民币' },
    { keywords: ['立减金', 'ljj','立减J'], groupName: '立减金' },
    { keywords: ['还款'], groupName: '还款' },
    
    // 运营商类
    { keywords: ['移动'], groupName: '移动' },
    { keywords: ['联通'], groupName: '联通' },
    { keywords: ['话费'], groupName: '话费' },
    
    // 视频/娱乐类
    { keywords: ['云包场'], groupName: '云包场' },
    { keywords: ['优酷'], groupName: '优酷' },
    
    // 出行类
    { keywords: ['火车', '12306', '高铁'], groupName: '火车票' },
    { keywords: ['机票'], groupName: '机票' },
    
    // 支付/优惠类
    { keywords: ['Q币', 'QB'], groupName: 'Q币' },
    { keywords: ['小红书'], groupName: '小红书' },
    
    
    // 食品/饮料
    { keywords: ['肯德基', 'KFC'], groupName: '肯德基' },
    { keywords: ['麦当劳', '麦当当'], groupName: '麦当劳' },
    { keywords: ['塔斯汀'], groupName: '塔斯汀' },
    { keywords: ['华莱士'], groupName: '华莱士' },
    { keywords: ['蜜雪'], groupName: '蜜雪冰城' },
    { keywords: ['林里',"LINLEE"], groupName: '林里' },
    { keywords: ['窑鸡'], groupName: '窑鸡王' },
    { keywords: ['瑞幸'], groupName: '瑞幸' },
    { keywords: ['星巴克'], groupName: '星巴克' },
    { keywords: ['茉莉奶白'], groupName: '茉莉奶白' },
    { keywords: ['一点点', '1点点'], groupName: '一点点' },
    { keywords: ['茶百道'], groupName: '茶百道' },
    { keywords: ['喜茶'], groupName: '喜茶' },
    { keywords: ['霸王茶姬'], groupName: '霸王茶姬' },
    { keywords: ['coco'], groupName: 'CoCo' },
    { keywords: ['白象'], groupName: '白象' },
    { keywords: ['臭宝'], groupName: '臭宝' },
    { keywords: ['李子柒'], groupName: '李子柒' },
    { keywords: ['好欢螺'], groupName: '好欢螺' },
    { keywords: ['火鸡面'], groupName: '火鸡面' },
    { keywords: ['三养'], groupName: '三养' },
    { keywords: ['劲仔'], groupName: '劲仔' },
    { keywords: ['脱骨侠'], groupName: '脱骨侠' },
    { keywords: ['小蓝袋'], groupName: '小蓝袋' },
    { keywords: ['盒马'], groupName: '盒马' },
    { keywords: ['好想来'], groupName: '好想来' },
    { keywords: ['南星'], groupName: '南星面包' },
    
    // 数码/手机
    { keywords: ['小米', '红米', 'REDMI'], groupName: '小米' },
    { keywords: ['K90'], groupName: '红米K90' },
    { keywords: ['酷玩'], groupName: '酷玩' },
    { keywords: ['Crucial'], groupName: 'Crucial' },
    { keywords: ['希捷'], groupName: '希捷' },
    { keywords: ['铠侠'], groupName: '铠侠' },
    { keywords: ['酷睿'], groupName: '酷睿' },
    
    // 王一博代言
    { keywords: ['王一博'], groupName: '王一博' },
    { keywords: ['安踏', 'ANTA'], groupName: '安踏' },
    { keywords: ['纯甄','轻酪乳'], groupName: '纯甄' },
    { keywords: ['勇闯天涯'], groupName: '勇闯天涯' },
    { keywords: ['黑狮'], groupName: '黑狮' },
    { keywords: ['冰红茶'], groupName: '冰红茶' },
    { keywords: ['妙可蓝多'], groupName: '妙可蓝多' },
    { keywords: ['林氏'], groupName: '林氏' },
    { keywords: ['吨吨'], groupName: '吨吨' },
    { keywords: ['台铃'], groupName: '台铃' },
    { keywords: ['阿道夫'], groupName: '阿道夫' },
    { keywords: ['lifespace', '益倍适'], groupName: '益倍适' },
    { keywords: ['嘉实多'], groupName: '嘉实多' },
    { keywords: ['红牛'], groupName: '红牛' },
    { keywords: ['水卫士'], groupName: '水卫士' },
    { keywords: ['乐淇'], groupName: '乐淇' },
    { keywords: ['盐津铺子'], groupName: '盐津铺子' },
    { keywords: ['百雀羚'], groupName: '百雀羚' },
    { keywords: ['C咖'], groupName: 'C咖' },
    { keywords: ['得宝', 'TEMPO'], groupName: '得宝' },
    { keywords: ['YAYA', '鸭鸭'], groupName: '鸭鸭' },
    { keywords: ['法丽兹'], groupName: '法丽兹' },
    { keywords: ['EVISU'], groupName: 'EVISU' },
    { keywords: ['蕉内', 'BANANAIN'], groupName: '蕉内' },
    { keywords: ['海伦凯勒'], groupName: '海伦凯勒' },
    { keywords: ['LACOSTE'], groupName: 'LACOSTE' },
    { keywords: ['LOEWE', '罗意威'], groupName: '罗意威' },
    { keywords: ['JIMMYCHOO'], groupName: 'JimmyChoo' },
    { keywords: ['香奈儿', 'CHANEL'], groupName: '香奈儿' },
    { keywords: ['植村秀'], groupName: '植村秀' },
    { keywords: ['FLYCO', '飞科'], groupName: '飞科' },
    { keywords: ['漫步者'], groupName: '漫步者' },
    { keywords: ['SKG'], groupName: 'SKG' },
    
    //美妆个护
    { keywords: ['Whoo', '后拱辰'], groupName: '后拱辰' },
    { keywords: ['优时颜'], groupName: '优时颜' },
    { keywords: ['舒莱'], groupName: '舒莱' },
    { keywords: ['博乐纯','清朗一日'], groupName: '博士伦' },
    { keywords: ['欧舒适'], groupName: '强生' },
    { keywords: ['清氧清','欧柯适'], groupName: '库博光学' },
    { keywords: ['牙线'], groupName: '牙线' },
    { keywords: ['高露洁'], groupName: '高露洁' },
    { keywords: ['hfp'], groupName: 'HFP' },
    
    // 其他
    { keywords: ['杜蕾斯', '冈本', '避孕套', '小雨伞', '小玩具', '情趣'], groupName: '情趣用品' },
    { keywords: ['薪水'], groupName: '薪水心愿' },
    { keywords: ['河南'], groupName: '河南' },
    { keywords: ['上海'], groupName: '上海' },
    { keywords: ['掌上'], groupName: '掌上生活' },
    { keywords: ['碰一'], groupName: '碰一碰' },
    { keywords: ['bug'], groupName: 'BUG价' },
    { keywords: ['必中'], groupName: '必中' },
    { keywords: ['开通'], groupName: '开通' },
    { keywords: ['年卡'], groupName: '年卡' },
    { keywords: ['面包', '肉松小贝', '馍片', '沙琪玛', '趣多多', '威化饼'], groupName: '零食' },
    { keywords: ['电影'], groupName: '电影票' },
    { keywords: ['湿巾'], groupName: '湿巾' },
    { keywords: ['湿厕纸'], groupName: '湿厕纸' },
    { keywords: ['擦镜', '镜片清洁', '镜头清洁', '蔡司'], groupName: '擦镜纸' },
    { keywords: ['雪糕', '冰淇淋'], groupName: '冰淇淋' },
    { keywords: ['洗烘', '洗衣机'], groupName: '洗衣机' },
    { keywords: ['火腿肠', '王中王'], groupName: '火腿肠' },
    { keywords: ['五常'], groupName: '五常大米' },
    { keywords: ['生抽'], groupName: '生抽' },
    { keywords: ['鸡蛋'], groupName: '鸡蛋' },
    { keywords: ['食用油', '大豆油', '花生油', '胚芽油'], groupName: '食用油' },
    { keywords: ['微波炉'], groupName: '微波炉' },
    { keywords: ['短袖', 'T恤'], groupName: '短袖' },
    { keywords: ['海飞丝'], groupName: '海飞丝' },
    { keywords: ['高钙低脂', '低脂高钙'], groupName: '牛奶' },
    { keywords: ['抱枕'], groupName: '抱枕' },
    { keywords: ['手抓饼'], groupName: '手抓饼' },
    { keywords: ['鸡蛋灌饼'], groupName: '鸡蛋灌饼' },
    { keywords: ['皇家小虎'], groupName: '皇家小虎' },
    { keywords: ['番茄酱', '番茄沙司'], groupName: '番茄酱' },
    { keywords: ['有棵树'], groupName: '有棵树' },
    { keywords: ['查漏补缺'], groupName: '查漏补缺' },
    { keywords: ['税'], groupName: '退税' }
];

/**
 * 从标题中提取分组名
 * @param {string} title - 线报标题
 * @param {string} zkt_gjc - 只看它关键词字符串（按 | 分隔）
 * @returns {string|null} 分组名，未匹配到返回 null
 */
function getGroupFromTitle(title, zkt_gjc) {
    if (!title || !zkt_gjc) return null;
    
    // 将 zkt_gjc 按 | 分割成关键词数组
    const keywords = zkt_gjc.split('|');
    
    // 按原顺序遍历关键词
    for (const keyword of keywords) {
        if (keyword && title.includes(keyword)) {
            // 检查是否有自定义分组规则
            for (const rule of groupRules) {
                for (const kw of rule.keywords) {
                    // 处理正则表达式关键词（如工\.行）
                    if (kw.includes('\\')) {
                        const regex = new RegExp(kw, 'i');
                        if (regex.test(title)) {
                            return rule.groupName;
                        }
                    } else if (title.includes(kw)) {
                        return rule.groupName;
                    }
                }
            }
            // 如果没有自定义规则，直接使用关键词作为分组名
            // 限制长度最多9个字符
            return keyword.length > 9 ? keyword.substring(0, 9) : keyword;
        }
    }
    
    return null;
}

module.exports = { groupRules, getGroupFromTitle };
