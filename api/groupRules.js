// ============== 分组规则配置 ==============
// 按优先级顺序排列，匹配到第一个就停止
// 每个规则包含：
//   - keywords: 匹配关键词数组（支持正则表达式或普通字符串）
//   - groupName: 分组显示名称
//   - avatarUrl: (可选) 头像图片地址，以 http 或 https 开头，不配置则使用文字头像

const groupRules = [
    // ========== 运动品牌 ==========
    { keywords: ['回力'], groupName: '回力', avatarUrl: 'https://y.zdmimg.com/202111/12/618ddc32a62d3856.jpg' },
    
    // ========== 银行/金融类 ==========
    { keywords: ['平安', '好车主'], groupName: '平安', avatarUrl: 'https://qny.smzdm.com/201712/19/5a38dae5447e65207.jpg' },
    { keywords: ['工\\.行', '工行', '工商'], groupName: '工商银行', avatarUrl: 'https://y.zdmimg.com/202103/16/60501ebc051394123.jpg' },
    { keywords: ['招\\.行', '招行', '招商'], groupName: '招商银行', avatarUrl: 'https://y.zdmimg.com/202103/06/60431db563a1d9112.jpg' },
    { keywords: ['中\\.行', '中行', '中国银行'], groupName: '中国银行', avatarUrl: 'https://y.zdmimg.com/201911/04/5dbfa04fca5b59973.jpg' },
    { keywords: ['农\\.行', '农行', '农业'], groupName: '农业银行', avatarUrl: 'https://y.zdmimg.com/202111/17/6194917f77bbd7789.jpg' },
    { keywords: ['建\\.行', '建行', '建设'], groupName: '建设银行', avatarUrl: 'https://y.zdmimg.com/201911/04/5dbf93afd69938903.jpg' },
    { keywords: ['交\\.行', '交行', '交通'], groupName: '交通银行', avatarUrl: 'https://y.zdmimg.com/201911/04/5dbf9504cb1185200.jpg' },
    { keywords: ['邮\\.储', '邮储', '邮政'], groupName: '邮政储蓄', avatarUrl: 'https://y.zdmimg.com/202101/22/600a8c39a54813408.jpg' },
    { keywords: ['浦\\.发', '浦发'], groupName: '浦发银行', avatarUrl: 'https://y.zdmimg.com/202103/16/60501b929c1921914.jpg' },
    { keywords: ['中\\.信', '中信'], groupName: '中信银行', avatarUrl: 'https://y.zdmimg.com/201911/04/5dbf9d16741761987.jpg' },
    { keywords: ['云闪付', '云闪\\.付', '云少妇', 'ysf'], groupName: '云闪付', avatarUrl: 'https://qny.smzdm.com/202411/12/67330617bab827729.jpg' },
    { keywords: ['数币', '数字人民币'], groupName: '数字人民币', avatarUrl: 'https://qna.smzdm.com/202303/07/6406f3e05ee0f4952.jpg_a640.jpg' },
    { keywords: ['立减金', 'ljj','立减J'], groupName: '立减金', avatarUrl: 'https://a.zdmimg.com/202605/26/6a14f9b80d60a7622.jpg_a640.jpg' },
    { keywords: ['还款'], groupName: '还款', avatarUrl: 'https://qna.smzdm.com/202107/29/61023e36085492714.jpg_a640.jpg' },
    
    // ========== 运营商类 ==========
    { keywords: ['移动'], groupName: '移动', avatarUrl: 'https://y.zdmimg.com/201601/07/35bac23b.png' },
    { keywords: ['联通'], groupName: '联通', avatarUrl: 'https://y.zdmimg.com/202103/08/6045cd73a28ba4921.jpg' },
    { keywords: ['话费'], groupName: '话费', avatarUrl: 'https://qna.smzdm.com/202204/10/6252d6c1c7cd58835.jpg_a640.jpg' },
    { keywords: ['水费', '电费', '燃气费','水电燃','缴费','国网'], groupName: '生活缴费', avatarUrl: 'https://a.zdmimg.com/202509/26/68d652546ecb78287.jpg_a640.jpg' },
    
    // ========== 视频/娱乐类 ==========
    { keywords: ['云包场'], groupName: '云包场', avatarUrl: 'https://qna.smzdm.com/202412/09/6756e17f83b34677.jpg_a640.jpg' },
    { keywords: ['优酷'], groupName: '优酷', avatarUrl: 'https://y.zdmimg.com/202103/15/604efcab9a2872615.jpg' },
    
    // ========== 出行类 ==========
    { keywords: ['火车', '12306', '高铁'], groupName: '火车票', avatarUrl: 'https://a.zdmimg.com/202604/30/69f2f64a4e8844564.jpg_a640.jpg' },
    { keywords: ['机票'], groupName: '机票', avatarUrl: 'https://a.zdmimg.com/202605/15/6a069f1022cf03960.jpg_a640.jpg' },
    
    // ========== 支付/优惠类 ==========
    { keywords: ['Q币', 'QB'], groupName: 'Q币', avatarUrl: 'https://a.zdmimg.com/202305/05/6454d362269259779.png_a640.jpg' },
    { keywords: ['小红书'], groupName: '小红书', avatarUrl: 'https://a.zdmimg.com/202604/29/69f15a7a180d23247.png_a640.jpg' },
    
    // ========== 食品/饮料 ==========
    { keywords: ['肯德基', 'KFC'], groupName: '肯德基', avatarUrl: 'https://y.zdmimg.com/202206/21/62b193713cd3f1713.jpg' },
    { keywords: ['麦当劳', '麦当当'], groupName: '麦当劳', avatarUrl: 'https://y.zdmimg.com/202107/26/60fe7e8f0b8b14201.jpg' },
    { keywords: ['必胜客'], groupName: '必胜客', avatarUrl: 'https://y.zdmimg.com/202104/12/607416b18fca18241.jpg_a320.jpg' },
    { keywords: ['塔斯汀'], groupName: '塔斯汀', avatarUrl: 'https://qny.smzdm.com/202407/04/6686048f9cb486268.jpg' },
    { keywords: ['华莱士'], groupName: '华莱士', avatarUrl: 'https://a.zdmimg.com/202603/12/69b2023173aea2994.jpg_a640.jpg' },
    { keywords: ['蜜雪'], groupName: '蜜雪冰城', avatarUrl: 'https://qny.smzdm.com/202302/16/63edee6afcf2b8644.jpg' },
    { keywords: ['林里',"LINLEE"], groupName: '林里', avatarUrl: 'https://y.zdmimg.com/202108/06/610c9205c15595166.jpg' },
    { keywords: ['窑鸡'], groupName: '窑鸡王', avatarUrl: 'https://qny.smzdm.com/202407/04/66860a4982fce5415.jpg' },
    { keywords: ['瑞幸'], groupName: '瑞幸', avatarUrl: 'https://y.zdmimg.com/202604/28/69f01b0cc1eda2337.jpg' },
    { keywords: ['罗森'], groupName: '罗森', avatarUrl: 'https://qna.smzdm.com/202502/20/67b6dbb29505c7389.jpg_a320.jpg' },
    { keywords: ['星巴克'], groupName: '星巴克', avatarUrl: 'https://y.zdmimg.com/202105/07/6094f59650ad1652.jpg' },
    { keywords: ['茉莉奶白'], groupName: '茉莉奶白', avatarUrl: 'https://qny.smzdm.com/202407/04/6685fdb4129718043.jpg' },
    { keywords: ['一点点', '1点点'], groupName: '一点点', avatarUrl: 'https://qny.smzdm.com/202407/03/6684f1a882e4e5569.jpg' },
    { keywords: ['茶百道'], groupName: '茶百道', avatarUrl: 'https://y.zdmimg.com/202407/03/6684fe3cbb70e4928.jpg' },
    { keywords: ['喜茶'], groupName: '喜茶', avatarUrl: 'https://y.zdmimg.com/201908/23/5d5f5bad8a2e0836.jpg' },
    { keywords: ['霸王茶姬'], groupName: '霸王茶姬', avatarUrl: 'https://y.zdmimg.com/202407/03/6684f7d3d358c4043.jpg' },
    { keywords: ['coco'], groupName: 'CoCo', avatarUrl: 'https://y.zdmimg.com/202407/03/6684f8234f6505580.jpg' },
    { keywords: ['白象'], groupName: '白象', avatarUrl: 'https://y.zdmimg.com/202104/14/6076c49de6feb3094.jpg' },
    { keywords: ['臭宝'], groupName: '臭宝', avatarUrl: 'https://qny.smzdm.com/202411/12/6732f97daf94d1791.jpg' },
    { keywords: ['李子柒'], groupName: '李子柒', avatarUrl: 'https://y.zdmimg.com/202001/10/5e181d5450ec77187.jpg' },
    { keywords: ['好欢螺'], groupName: '好欢螺', avatarUrl: 'https://y.zdmimg.com/202008/20/5f3e48db6aa9d7086.jpg' },
    { keywords: ['火鸡面'], groupName: '火鸡面', avatarUrl: 'https://y.zdmimg.com/202511/27/692762ddba1d49500.jpg' },
    { keywords: ['三养'], groupName: '三养', avatarUrl: 'https://y.zdmimg.com/202507/19/687ba5d1c6dee978.jpg' },
    { keywords: ['劲仔'], groupName: '劲仔', avatarUrl: 'https://y.zdmimg.com/201602/25/2612b7e6.png' },
    { keywords: ['脱骨侠'], groupName: '脱骨侠', avatarUrl: 'https://y.zdmimg.com/202511/07/690d9ea45f1668437.jpg' },
    { keywords: ['小蓝袋'], groupName: '小蓝袋', avatarUrl: 'https://qny.smzdm.com/202312/18/657ff0348c9c56570.jpg' },
    { keywords: ['盒马'], groupName: '盒马', avatarUrl: 'https://qny.smzdm.com/202411/21/673ed8b1f156b1641.jpg' },
    { keywords: ['好想来'], groupName: '好想来', avatarUrl: 'https://a.zdmimg.com/202406/25/667a8bad3016f987.png_a640.jpg' },
    { keywords: ['南星'], groupName: '南星面包', avatarUrl: 'https://y.zdmimg.com/202109/16/6142e8e7ab9f37111.jpg' },
    
    // ========== 数码/手机 ==========
    { keywords: ['小米', '红米', 'REDMI'], groupName: '小米', avatarUrl: 'https://qny.smzdm.com/202311/06/65485294d679b4046.jpg' },
    { keywords: ['K90'], groupName: '红米K90', avatarUrl: 'https://y.zdmimg.com/202604/07/69d4617e62f786991.png' },
    { keywords: ['希捷', '酷玩'], groupName: '希捷', avatarUrl: 'https://qny.smzdm.com/202310/25/6538fd77282d02443.jpg' },
    { keywords: ['铠侠'], groupName: '铠侠', avatarUrl: 'https://qny.smzdm.com/202312/07/65716dedd22e88788.jpg' },
    { keywords: ['英睿达', '镁光', '美光', 'crucial'], groupName: '英睿达', avatarUrl: 'https://qny.smzdm.com/202411/15/67368836241127612.jpg' },
    
    // ========== 王一博代言 ==========
    { keywords: ['王一博'], groupName: '王一博', avatarUrl: 'https://a.zdmimg.com/202606/26/6a3d5659b77bd3570.png_a320.jpg' },
    { keywords: ['安踏', 'ANTA'], groupName: '安踏', avatarUrl: 'https://y.zdmimg.com/202103/12/604b3930cea5b9676.jpg' },
    { keywords: ['纯甄','轻酪乳'], groupName: '纯甄', avatarUrl: 'https://qny.smzdm.com/202302/14/63eaf922a28cb6501.jpg' },
    { keywords: ['勇闯天涯'], groupName: '勇闯天涯', avatarUrl: 'https://y.zdmimg.com/202510/29/6901e8ef7cba62304.png' },
    { keywords: ['黑狮'], groupName: '黑狮', avatarUrl: 'https://y.zdmimg.com/202510/30/69032b4605dcb8163.jpg' },
    { keywords: ['冰红茶'], groupName: '冰红茶', avatarUrl: 'https://y.zdmimg.com/202605/15/6a067e545d8472277.jpg' },
    { keywords: ['妙可蓝多'], groupName: '妙可蓝多', avatarUrl: 'https://y.zdmimg.com/202104/15/6077ed162f8b55320.jpg' },
    { keywords: ['林氏'], groupName: '林氏', avatarUrl: 'https://qny.smzdm.com/202208/22/6302e81b4b5201450.jpg' },
    { keywords: ['吨吨'], groupName: '吨吨', avatarUrl: 'https://y.zdmimg.com/202504/06/67f271af69f5e6028.jpg' },
    { keywords: ['台铃'], groupName: '台铃', avatarUrl: 'https://qny.smzdm.com/201712/19/5a38855c903e86239.jpg' },
    { keywords: ['阿道夫'], groupName: '阿道夫', avatarUrl: 'https://qny.smzdm.com/202104/01/60652a0a27be16441.jpg' },
    { keywords: ['lifespace', '益倍适'], groupName: '益倍适', avatarUrl: 'https://qny.smzdm.com/202202/22/621449ce4be0e9837.jpg' },
    { keywords: ['嘉实多'], groupName: '嘉实多', avatarUrl: 'https://y.zdmimg.com/201812/20/5c1b6effdab481090.jpg' },
    { keywords: ['红牛'], groupName: '红牛', avatarUrl: 'https://y.zdmimg.com/202102/26/6038c6c917f4c938.jpg' },
    { keywords: ['水卫士', '水卫仕'], groupName: '水卫士', avatarUrl: 'https://qny.smzdm.com/202209/27/6332cb15287771885.jpg' },
    { keywords: ['乐淇'], groupName: '乐淇', avatarUrl: 'https://qny.smzdm.com/202110/09/61611710a59476949.jpg' },
    { keywords: ['盐津铺子'], groupName: '盐津铺子', avatarUrl: 'https://y.zdmimg.com/202105/06/6093b8e0034bc6932.jpg' },
    { keywords: ['百雀羚'], groupName: '百雀羚', avatarUrl: 'https://qny.smzdm.com/202207/15/62d12f7309eb88261.jpg' },
    { keywords: ['C咖'], groupName: 'C咖', avatarUrl: 'https://y.zdmimg.com/202106/09/60c02dd2d29292879.jpg' },
    { keywords: ['得宝', 'TEMPO'], groupName: '得宝', avatarUrl: 'https://y.zdmimg.com/202106/05/60bb0fd47d2786235.jpg' },
    { keywords: ['YAYA', '鸭鸭'], groupName: '鸭鸭', avatarUrl: 'https://y.zdmimg.com/202112/01/61a717ff71cf45815.jpg' },
    { keywords: ['法丽兹'], groupName: '法丽兹', avatarUrl: 'https://y.zdmimg.com/202104/12/60740f462c2481547.jpg' },
    { keywords: ['EVISU'], groupName: 'EVISU', avatarUrl: 'https://y.zdmimg.com/202103/17/605192869eb734876.jpg' },
    { keywords: ['蕉内', 'BANANAIN'], groupName: '蕉内', avatarUrl: 'https://y.zdmimg.com/201707/20/59704fa2a527bwUbPN.png' },
    { keywords: ['海伦凯勒'], groupName: '海伦凯勒', avatarUrl: 'https://y.zdmimg.com/202103/16/6050669c40c639535.jpg' },
    { keywords: ['LACOSTE'], groupName: 'LACOSTE', avatarUrl: 'https://y.zdmimg.com/202103/11/6049870add77c2319.jpg' },
    { keywords: ['LOEWE', '罗意威'], groupName: '罗意威', avatarUrl: 'https://y.zdmimg.com/202106/24/60d43d0440ace4277.jpg' },
    { keywords: ['JIMMYCHOO'], groupName: 'JimmyChoo', avatarUrl: 'https://y.zdmimg.com/201606/01/574e8c6e0661c6953.png' },
    { keywords: ['香奈儿', 'CHANEL'], groupName: '香奈儿', avatarUrl: 'https://y.zdmimg.com/202102/10/60234b07e971a6257.jpg' },
    { keywords: ['植村秀'], groupName: '植村秀', avatarUrl: 'https://y.zdmimg.com/202103/16/605020493f6874977.jpg' },
    { keywords: ['FLYCO', '飞科'], groupName: '飞科', avatarUrl: 'https://qny.smzdm.com/202404/16/661e2d3795107562.jpg' },
    { keywords: ['漫步者'], groupName: '漫步者', avatarUrl: 'https://y.zdmimg.com/202103/12/604b17ccb6fff3424.jpg' },
    { keywords: ['SKG'], groupName: 'SKG', avatarUrl: 'https://y.zdmimg.com/202010/26/5f9649b58a5c35659.jpg' },
    
    // ========== 美妆个护 ==========
    { keywords: ['Whoo', '后拱辰'], groupName: '后拱辰', avatarUrl: 'https://y.zdmimg.com/202512/02/692e0cb3031981979.png' },
    { keywords: ['优时颜'], groupName: '优时颜', avatarUrl: 'https://y.zdmimg.com/202601/02/695782566b0f47656.jpg' },
    { keywords: ['舒莱'], groupName: '舒莱', avatarUrl: 'https://qny.smzdm.com/202411/25/67441a06bc9962526.jpg' },
    { keywords: ['博乐纯','清朗一日'], groupName: '博士伦', avatarUrl: 'https://y.zdmimg.com/202512/14/693e7d30b190e5615.jpg' },
    { keywords: ['欧舒适'], groupName: '强生', avatarUrl: 'https://y.zdmimg.com/202102/05/601cd2e0176a31186.jpg' },
    { keywords: ['清氧清','欧柯视'], groupName: '库博光学', avatarUrl: 'https://y.zdmimg.com/201605/09/57300b6839dad1293.png' },
    { keywords: ['牙线'], groupName: '牙线', avatarUrl: 'https://y.zdmimg.com/202507/19/687b6869b898b8600.jpg' },
    { keywords: ['高露洁'], groupName: '高露洁', avatarUrl: 'https://y.zdmimg.com/202102/18/602e0497e295a7361.jpg' },
    { keywords: ['hfp'], groupName: 'HFP', avatarUrl: 'https://y.zdmimg.com/202504/18/680251c0b29df283.jpg' },
    
    // ========== 其他 ==========
    { keywords: ['杜蕾斯', '冈本', '避孕套', '小雨伞', '小玩具', '情趣'], groupName: '情趣用品', avatarUrl: 'https://qny.smzdm.com/202204/01/62469ba99a9cd9130.jpg' },
    { keywords: ['超给利','超给力'], groupName: '支付超给利', avatarUrl: 'https://a.zdmimg.com/202604/20/69e5c7ee9ce717982.jpg_a640.jpg' },
    { keywords: ['河南'], groupName: '河南', avatarUrl: 'https://y.zdmimg.com/202604/17/69e16219bdf1a4018.png' },
    { keywords: ['上海'], groupName: '上海', avatarUrl: 'https://y.zdmimg.com/202105/29/60b1dd48962802524.jpg' },
    { keywords: ['掌上'], groupName: '掌上生活', avatarUrl: 'https://qny.smzdm.com/202301/12/63bfb4b12225e9628.jpg' },
    { keywords: ['碰一'], groupName: '碰一碰', avatarUrl: 'https://a.zdmimg.com/202512/04/69310192e994f3544.png_a640.jpg' },
    { keywords: ['bug'], groupName: 'BUG价', avatarUrl: 'https://s41.ax1x.com/2026/07/09/pmrUPsI.png' },
    { keywords: ['必中'], groupName: '必中', avatarUrl: 'https://s41.ax1x.com/2026/07/09/pmrUPsI.png' },
    { keywords: ['WPS'], groupName: 'WPS会员', avatarUrl: 'https://a.zdmimg.com/202606/26/6a3de638bcdca1053.jpg_e1080.jpg' },
    { keywords: ['开通'], groupName: '开通', avatarUrl: 'https://s41.ax1x.com/2026/07/09/pmrUCQA.png' },
    { keywords: ['年卡'], groupName: '年卡', avatarUrl: 'https://s41.ax1x.com/2026/07/09/pmrUpzd.png' },
    { keywords: ['面包', '肉松小贝', '馍片', '沙琪玛', '趣多多', '威化饼'], groupName: '零食', avatarUrl: 'https://y.zdmimg.com/202512/04/6931a759da03e4811.png' },
    { keywords: ['电影'], groupName: '电影票', avatarUrl: 'https://a.zdmimg.com/202512/25/694ce2d788ab41401.jpg_a200.jpg' },
    { keywords: ['湿巾'], groupName: '湿巾', avatarUrl: 'https://y.zdmimg.com/202601/23/6973622ebec4a1665.jpg' },
    { keywords: ['湿厕纸'], groupName: '湿厕纸', avatarUrl: 'https://y.zdmimg.com/202510/09/68e76e5c636525610.jpg' },
    { keywords: ['擦镜', '镜片清洁', '镜头清洁', '蔡司'], groupName: '擦镜纸', avatarUrl: 'https://y.zdmimg.com/202504/22/680727ba53ef25541.jpg' },
    { keywords: ['雪糕', '冰淇淋'], groupName: '冰淇淋', avatarUrl: 'https://y.zdmimg.com/202505/13/6822eeedf93a7440.jpg' },
    { keywords: ['洗烘', '洗衣机'], groupName: '洗衣机', avatarUrl: 'https://qny.smzdm.com/202204/02/6247b14607b7a892.png' },
    { keywords: ['火腿肠', '王中王'], groupName: '火腿肠', avatarUrl: 'https://y.zdmimg.com/202511/28/69294cd1b12235034.png' },
    { keywords: ['五常'], groupName: '五常大米', avatarUrl: 'https://y.zdmimg.com/202511/14/69173b4db5a9c9557.jpg' },
    { keywords: ['生抽'], groupName: '生抽', avatarUrl: 'https://y.zdmimg.com/202402/19/65d31639179434757.jpg' },
    { keywords: ['鸡蛋'], groupName: '鸡蛋', avatarUrl: 'https://qny.smzdm.com/202210/08/63410708543e6443.jpg' },
    { keywords: ['食用油', '大豆油', '花生油', '胚芽油'], groupName: '食用油', avatarUrl: 'https://qny.smzdm.com/201910/24/5db16da8a50942932.jpg' },
    { keywords: ['微波炉'], groupName: '微波炉', avatarUrl: 'https://y.zdmimg.com/202507/08/686cff6a138a17402.jpg' },
    { keywords: ['短袖', 'T恤'], groupName: '短袖', avatarUrl: 'https://y.zdmimg.com/202511/10/69112b074fb0d1964.jpg' },
    { keywords: ['海飞丝'], groupName: '海飞丝', avatarUrl: 'https://y.zdmimg.com/202010/30/5f9bc3f6b1dc98922.jpg' },
    { keywords: ['高钙低脂', '低脂高钙'], groupName: '牛奶', avatarUrl: 'https://y.zdmimg.com/202507/11/6870e15e9d5de5961.jpg' },
    { keywords: ['手抓饼'], groupName: '手抓饼', avatarUrl: 'https://y.zdmimg.com/202510/31/69049bf7fa9068044.jpg' },
    { keywords: ['鸡蛋灌饼'], groupName: '鸡蛋灌饼', avatarUrl: 'https://qny.smzdm.com/202412/03/674e9c838599d9794.jpg' },
    { keywords: ['皇家小虎'], groupName: '皇家小虎', avatarUrl: 'https://a.zdmimg.com/202507/04/6867e6d61b5b17654.jpg_a320.jpg' },
    { keywords: ['番茄酱', '番茄沙司'], groupName: '番茄酱', avatarUrl: 'https://y.zdmimg.com/202108/25/6125d81287c582190.jpg' },
    { keywords: ['查漏补缺'], groupName: '查漏补缺', avatarUrl: 'https://s41.ax1x.com/2026/07/09/pmrUiLt.png' },
    { keywords: ['税'], groupName: '退税', avatarUrl: 'https://a.zdmimg.com/202603/01/69a430f61a1d89085.jpg_a640.jpg' }
];

/**
 * 根据分组名查找对应的头像配置
 * @param {string} groupName - 分组名
 * @returns {object|null} 返回 { groupName, avatarUrl } 或 null
 */
function getGroupAvatar(groupName) {
    if (!groupName) return null;
    const rule = groupRules.find(r => r.groupName === groupName);
    if (rule) {
        return {
            groupName: rule.groupName,
            avatarUrl: rule.avatarUrl || null
        };
    }
    return null;
}

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

module.exports = { groupRules, getGroupAvatar, getGroupFromTitle };
