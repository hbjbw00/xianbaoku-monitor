// ============== 分组规则配置 ==============
// 按优先级顺序排列，匹配到第一个就停止
// 每个规则包含：
//   - keywords: 匹配关键词数组（支持正则表达式或普通字符串）
//   - groupName: 分组显示名称
//   - avatarUrl: (可选) 头像图片地址，以 http 或 https 开头，不配置则使用文字头像

const groupRules = [
    // ========== 运动品牌 ==========
    { keywords: ['回力'], groupName: '回力', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8ad2f94739112528a0bcd053fa8dcf4f10cb9dac807a67ee590cfdd8f3932d58/%E5%9B%9E%E5%8A%9B.png?fname=%E5%9B%9E%E5%8A%9B.png' },
    
    // ========== 银行/金融类 ==========
    { keywords: ['平安', '好车主'], groupName: '平安', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8b68854b604d70792f58877b45eed8df677f92dbb0c3b1096b471a99a8f4e4dc/%E5%B9%B3%E5%AE%89%E5%A5%BD%E8%BD%A6%E4%B8%BB.png?fname=%E5%B9%B3%E5%AE%89%E5%A5%BD%E8%BD%A6%E4%B8%BB.png' },
    { keywords: ['工\\.行', '工行', '工商'], groupName: '工商银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f4549c981b2e7bf1bb41b9c1447dcbada62ec3bfd1f06ce76377ad7c204cc1d4/%E5%B7%A5%E8%A1%8C.png?fname=%E5%B7%A5%E8%A1%8C.png' },
    { keywords: ['招\\.行', '招行', '招商'], groupName: '招商银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/09bd74e3c2035824e9e023304d257e656b79e04b2fb385279ce745738abe1007/%E6%8B%9B%E8%A1%8C.png?fname=%E6%8B%9B%E8%A1%8C.png' },
    { keywords: ['中\\.行', '中行', '中国银行'], groupName: '中国银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/21666ceba2dee2fe294027f269a57436d56f6d1c3c0cff5e20e53322521bfe3a/%E4%B8%AD%E8%A1%8C.png?fname=%E4%B8%AD%E8%A1%8C.png' },
    { keywords: ['农\\.行', '农行', '农业'], groupName: '农业银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f74dcb9f33e61750406829d86575f4546e72cfabb8dcc023baae7b18fd539b55/%E5%86%9C%E8%A1%8C.png?fname=%E5%86%9C%E8%A1%8C.png' },
    { keywords: ['建\\.行', '建行', '建设'], groupName: '建设银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/3ab28a5d657bceb43593ad36d32239c991ba4770f978d8b58d050b6f4efc76d5/%E5%BB%BA%E8%A1%8C.png?fname=%E5%BB%BA%E8%A1%8C.png' },
    { keywords: ['交\\.行', '交行', '交通'], groupName: '交通银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/851fb1c13b5ef7c8599bc8251a4c004f46e99e3e23de2c6377ecb49003568605/%E4%BA%A4%E8%A1%8C.png?fname=%E4%BA%A4%E8%A1%8C.png' },
    { keywords: ['邮\\.储', '邮储', '邮政'], groupName: '邮政储蓄', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/240e982ea41c1cccdcc99444178a6cc9fd1f2ea158c56694d766d3f2cc8dbe9f/%E9%82%AE%E6%94%BF.png?fname=%E9%82%AE%E6%94%BF.png' },
    { keywords: ['浦\\.发', '浦发'], groupName: '浦发银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/0c1163096be17e3d54a0eb95c0e16b2afd5e71f9fe056068914ddf9640da5b2f/%E6%B5%A6%E5%8F%91.png?fname=%E6%B5%A6%E5%8F%91.png' },
    { keywords: ['中\\.信', '中信'], groupName: '中信银行', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/9438590f05098515ebebf0b357865a541d8b8f1af9c5726eeca3911ac899b9ab/%E4%B8%AD%E4%BF%A1.png?fname=%E4%B8%AD%E4%BF%A1.png' },
    { keywords: ['云闪付', '云闪\\.付', '云少妇', 'ysf'], groupName: '云闪付', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/5d59cedc7f9be50ad1c25cf30275da2ec0aa444228d1143963a6583e7bb1918e/%E4%BA%91%E9%97%AA%E4%BB%98.png?fname=%E4%BA%91%E9%97%AA%E4%BB%98.png' },
    { keywords: ['数币', '数字人民币'], groupName: '数字人民币', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/94b165eabed27c737d5b1db66dfab3fc7a9b79b2ec8488606f91037b6ffe49cc/%E6%95%B0%E5%B8%81.png?fname=%E6%95%B0%E5%B8%81.png' },
    { keywords: ['立减金', 'ljj','立减J'], groupName: '立减金', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f0ca206fae093d92d262627454317e2f8aedc24261f3d60e6670f1675b777b54/%E7%AB%8B%E5%87%8F%E9%87%91.png?fname=%E7%AB%8B%E5%87%8F%E9%87%91.png' },
    { keywords: ['还款'], groupName: '还款', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/926cad405c684904018db74811fc6a656509e339665840c3099ae5e4464cf372/%E8%BF%98%E6%AC%BE.png?fname=%E8%BF%98%E6%AC%BE.png' },
    
    // ========== 运营商类 ==========
    { keywords: ['移动'], groupName: '移动', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7fe4df308eddfcf32ede4368d863b4d94adbefdee34e6c28813240141c692654/%E7%A7%BB%E5%8A%A8.png?fname=%E7%A7%BB%E5%8A%A8.png' },
    { keywords: ['联通'], groupName: '联通', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/34ffa31938a7e3b0e1a7ad20f2d9e963eadb8f96b9e7d1be9d4f4942ec16e0f4/%E8%81%94%E9%80%9A.png?fname=%E8%81%94%E9%80%9A.png' },
    { keywords: ['话费'], groupName: '话费', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7a53c8838370e3352d40b7ba8d2d8a3d75cc3f8dc1991b5c8f227a716fe5d33a/%E8%AF%9D%E8%B4%B9.png?fname=%E8%AF%9D%E8%B4%B9.png' },
    
    // ========== 视频/娱乐类 ==========
    { keywords: ['云包场'], groupName: '云包场', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/6938b5da47b29cc9541ee08eef8836542f117247d1df81d4499d23a337e5185e/%E4%BA%91%E5%8C%85%E5%9C%BA.png?fname=%E4%BA%91%E5%8C%85%E5%9C%BA.png' },
    { keywords: ['优酷'], groupName: '优酷', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/601d3eb0a5dc257d4d99a9c3c6562b7025e4484316b0685284b7972c5a2826bf/%E4%BC%98%E9%85%B7.png?fname=%E4%BC%98%E9%85%B7.png' },
    
    // ========== 出行类 ==========
    { keywords: ['火车', '12306', '高铁'], groupName: '火车票', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ce2009fef29af12dc0c94971c34a70a2250203fadd9320710d9456e98adc190e/%E7%81%AB%E8%BD%A6%E7%A5%A8.png?fname=%E7%81%AB%E8%BD%A6%E7%A5%A8.png' },
    { keywords: ['机票'], groupName: '机票', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/36d9e33f2b8b7398c004b0fad9148f08810c94226b9b0d86eb21976fb5876044/%E6%9C%BA%E7%A5%A8.png?fname=%E6%9C%BA%E7%A5%A8.png' },
    
    // ========== 支付/优惠类 ==========
    { keywords: ['Q币', 'QB'], groupName: 'Q币', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/3b00394708301db6c8e2ec391d1c4c37f8d240a446675de560b9f2673d0ab32a/Q%E5%B8%81.png?fname=Q%E5%B8%81.png' },
    { keywords: ['小红书'], groupName: '小红书', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/9135207bd85e837ffa9e2b9d5d5a180bd1a041e4802fd00fa0dfb277a669ad37/%E5%B0%8F%E7%BA%A2%E4%B9%A6.png?fname=%E5%B0%8F%E7%BA%A2%E4%B9%A6.png' },
    
    // ========== 食品/饮料 ==========
    { keywords: ['肯德基', 'KFC'], groupName: '肯德基', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7117347ac9a4b53a354f1896d915dccda8cf015a40cd8cb317714851ccc60249/%E8%82%AF%E5%BE%B7%E5%9F%BA.png?fname=%E8%82%AF%E5%BE%B7%E5%9F%BA.png' },
    { keywords: ['麦当劳', '麦当当'], groupName: '麦当劳', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/83b7709de80a39b83e88e846e46cdf1eacaa02a1e6b4b89b6974dae4668d30f5/%E9%BA%A6%E5%BD%93%E5%8A%B3.png?fname=%E9%BA%A6%E5%BD%93%E5%8A%B3.png' },
    { keywords: ['塔斯汀'], groupName: '塔斯汀', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7120a72e158cbbd29ff166c9b1f9908f8237409d9d8935eed5c720e83fab7e2a/%E5%A1%94%E6%96%AF%E6%B1%80.png?fname=%E5%A1%94%E6%96%AF%E6%B1%80.png' },
    { keywords: ['华莱士'], groupName: '华莱士', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/47142d9a43d5260b851a21b9d5efbe35eda459ad718d05c6345e96be7d3f982a/%E5%8D%8E%E8%8E%B1%E5%A3%AB.png?fname=%E5%8D%8E%E8%8E%B1%E5%A3%AB.png' },
    { keywords: ['蜜雪'], groupName: '蜜雪冰城', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/96de76e28add43eb1176302fc8555be4a64e95b32524668569d49db6a741d92b/%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E.png?fname=%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E.png' },
    { keywords: ['林里',"LINLEE"], groupName: '林里', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/215e77e9271c3734d6fb7a4338acee7545d795bba3f9e82e83bc2a7be14d3ca4/%E6%9E%97%E9%87%8C.png?fname=%E6%9E%97%E9%87%8C.png' },
    { keywords: ['窑鸡'], groupName: '窑鸡王', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f4ac8dca87bc20c5930541d25059790c9843c2650a3d5d8a0f9458dff189d449/%E7%AA%91%E9%B8%A1%E7%8E%8B.png?fname=%E7%AA%91%E9%B8%A1%E7%8E%8B.png' },
    { keywords: ['瑞幸'], groupName: '瑞幸', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ff412f6d9d67228081b60894503478e5f981dca12c1e71c088e9eb74424f6571/%E7%91%9E%E5%B9%B8.png?fname=%E7%91%9E%E5%B9%B8.png' },
    { keywords: ['星巴克'], groupName: '星巴克', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f4aab757d6b8896b44020d734f6357c15d9cd97a11b01fbda847d68f8c53cb02/%E6%98%9F%E5%B7%B4%E5%85%8B.png?fname=%E6%98%9F%E5%B7%B4%E5%85%8B.png' },
    { keywords: ['茉莉奶白'], groupName: '茉莉奶白', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/d07d2bd55ea66af9e07423cd6f985fcb4c6443e7221a7e2d87a6365f41fc3a33/%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD.png?fname=%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD.png' },
    { keywords: ['一点点', '1点点'], groupName: '一点点', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/cac6970366f0005f5ce71f7377cacdc4e7cf85be78f29b1333714c322ca5690c/%E4%B8%80%E7%82%B9%E7%82%B9.png?fname=%E4%B8%80%E7%82%B9%E7%82%B9.png' },
    { keywords: ['茶百道'], groupName: '茶百道', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7d5945e5dbb69455ff08280365df10a639ad2db1a8ef8cbb127d1393c696c61f/%E8%8C%B6%E7%99%BE%E9%81%93.png?fname=%E8%8C%B6%E7%99%BE%E9%81%93.png' },
    { keywords: ['喜茶'], groupName: '喜茶', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/e3d9a67ab0319d57532991cb626e898b377659d2b53e6641be9433cb456c7b5c/%E5%96%9C%E8%8C%B6.png?fname=%E5%96%9C%E8%8C%B6.png' },
    { keywords: ['霸王茶姬'], groupName: '霸王茶姬', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7884a5edc2cada862eeb879e0cfd10460ec73af445b550a75c7280d246e04c48/%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC.png?fname=%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC.png' },
    { keywords: ['coco'], groupName: 'CoCo', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/23a1ebdf08fbfbd85e8a67c1a12ff2ad0f617060a68afea925ca300ca6b2d84d/coco.png?fname=coco.png' },
    { keywords: ['白象'], groupName: '白象', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/b264c551facff7c3590f63760db86140ca6df6d5db5bd538e7ad436976cd10e5/%E7%99%BD%E8%B1%A1.png?fname=%E7%99%BD%E8%B1%A1.png' },
    { keywords: ['臭宝'], groupName: '臭宝', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/49d1afb74dfe703b3721e9b9c9f482e6c90f3cb30cd2e86677e02da31390e3d7/%E8%87%AD%E5%AE%9D.png?fname=%E8%87%AD%E5%AE%9D.png' },
    { keywords: ['李子柒'], groupName: '李子柒', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/112a2e25fb0dbeaf8e26c72d35c02a073b3d313a0e8113b21bf9ad2d05bccb57/%E6%9D%8E%E5%AD%90%E6%9F%92.png?fname=%E6%9D%8E%E5%AD%90%E6%9F%92.png' },
    { keywords: ['好欢螺'], groupName: '好欢螺', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/613f34294792e463385a98aa965c8ac60bfbf2e3876d1b17b25c01b2ecf99436/%E5%A5%BD%E6%AC%A2%E8%9E%BA.png?fname=%E5%A5%BD%E6%AC%A2%E8%9E%BA.png' },
    { keywords: ['火鸡面'], groupName: '火鸡面', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7450b8e7a2fccc08adac29dd0df84eed02a8fd65af8f680e6ead65c25b1772e1/%E7%81%AB%E9%B8%A1%E9%9D%A2.png?fname=%E7%81%AB%E9%B8%A1%E9%9D%A2.png' },
    { keywords: ['三养'], groupName: '三养', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/154234a089cabd0928c6779365415bd03bc33a5c80f0136b32116a796550329b/%E4%B8%89%E5%85%BB.png?fname=%E4%B8%89%E5%85%BB.png' },
    { keywords: ['劲仔'], groupName: '劲仔', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/2db95f288b216ff6c5fa35a56b5a4e3f833a23134341ee4c56925bd8166874d6/%E5%8A%B2%E4%BB%94.png?fname=%E5%8A%B2%E4%BB%94.png' },
    { keywords: ['脱骨侠'], groupName: '脱骨侠', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/893ea90fa916c0f134c70d5137b4123146447f31b57ec152c3b78d0fa90aabe0/%E8%84%B1%E9%AA%A8%E4%BE%A0.png?fname=%E8%84%B1%E9%AA%A8%E4%BE%A0.png' },
    { keywords: ['小蓝袋'], groupName: '小蓝袋', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8228ab32b2a6106c3ae44b7674dbc8dce8aeaaa332f7bd890213b6fc77c15b5b/%E5%B0%8F%E8%93%9D%E8%A2%8B.png?fname=%E5%B0%8F%E8%93%9D%E8%A2%8B.png' },
    { keywords: ['盒马'], groupName: '盒马', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8912bcddbd873dcae9bbd1a049f65c7bd973ea5b0af5735d97a38f0ed4077c7f/%E7%9B%92%E9%A9%AC.png?fname=%E7%9B%92%E9%A9%AC.png' },
    { keywords: ['好想来'], groupName: '好想来', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/b4ad2affe2a409e48ed94bb0f69a4d88a6274280ab5d7c1ca2b5a2ddbaf4e7b0/%E5%A5%BD%E6%83%B3%E6%9D%A5.png?fname=%E5%A5%BD%E6%83%B3%E6%9D%A5.png' },
    { keywords: ['南星'], groupName: '南星面包', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/eec602317e03b6a5c9c62ae153a7749d72079c254a472367d93a3558241bfd1a/%E5%8D%97%E6%98%9F.png?fname=%E5%8D%97%E6%98%9F.png' },
    
    // ========== 数码/手机 ==========
    { keywords: ['小米', '红米', 'REDMI'], groupName: '小米', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ff73580a4d58618f6ec0066ef5ede08c1831b34c7b530daa8599e8388dfa97c7/%E5%B0%8F%E7%B1%B3.png?fname=%E5%B0%8F%E7%B1%B3.png' },
    { keywords: ['K90'], groupName: '红米K90', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ff73580a4d58618f6ec0066ef5ede08c1831b34c7b530daa8599e8388dfa97c7/%E5%B0%8F%E7%B1%B3.png?fname=%E5%B0%8F%E7%B1%B3.png' },
    { keywords: ['希捷', '酷玩'], groupName: '希捷', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/cb02e5751727a95cd94f0252e08a953885e1bd30a10ac1f648231db14f34db34/%E9%85%B7%E7%8E%A9.png?fname=%E9%85%B7%E7%8E%A9.png' },
    { keywords: ['铠侠'], groupName: '铠侠', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/136350394c2737c0fb14516da17b0d406d25bd6d288053d336cbb01aa740c0ac/%E9%93%A0%E4%BE%A0.png?fname=%E9%93%A0%E4%BE%A0.png' },
    { keywords: ['英睿达', '镁光', '美光', 'crucial'], groupName: '英睿达', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/5410691f0e4cb94d4d775d8f8c9e1804c38cfff15d0287496ae6941214c5ef3a/%E8%8B%B1%E7%9D%BF%E8%BE%BE.png?fname=%E8%8B%B1%E7%9D%BF%E8%BE%BE.png' },
    
    // ========== 王一博代言 ==========
    { keywords: ['王一博'], groupName: '王一博', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/b6e67f63f034606c31f8a01395bc4b1575005c648875901dcb756145ccd8c1c5/%E7%8E%8B%E4%B8%80%E5%8D%9A.png?fname=%E7%8E%8B%E4%B8%80%E5%8D%9A.png' },
    { keywords: ['安踏', 'ANTA'], groupName: '安踏', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/43d8571a133935fae215285c8f0e13789f119a8e58d006e3917ec7fea7ca93ce/%E5%AE%89%E8%B8%8F.png?fname=%E5%AE%89%E8%B8%8F.png' },
    { keywords: ['纯甄','轻酪乳'], groupName: '纯甄', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/60c588fb80e6d602897f7c5274781832bcbb7d228b1b6e2b3948a9a398da9dcb/%E7%BA%AF%E7%94%84.png?fname=%E7%BA%AF%E7%94%84.png' },
    { keywords: ['勇闯天涯'], groupName: '勇闯天涯', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f79fd994187f1e05218fe371601dbfb5be248550bce00b0e3e1844211177ff1d/%E5%8B%87%E9%97%AF%E5%A4%A9%E6%B6%AF.png?fname=%E5%8B%87%E9%97%AF%E5%A4%A9%E6%B6%AF.png' },
    { keywords: ['黑狮'], groupName: '黑狮', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/a8d0b48e497c7fcaf21a6d5e1941b3c834417635c2d04668c200e4639f93157c/%E9%BB%91%E7%8B%AE.png?fname=%E9%BB%91%E7%8B%AE.png' },
    { keywords: ['冰红茶'], groupName: '冰红茶', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/da79bdfef311de15ba6b4d8a5590dd7389ac930684d89646aeb94418f938778e/%E5%86%B0%E7%BA%A2%E8%8C%B6.png?fname=%E5%86%B0%E7%BA%A2%E8%8C%B6.png' },
    { keywords: ['妙可蓝多'], groupName: '妙可蓝多', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f809fff8741c08fc37ddc66232b3fe37c81b63d30678ed091f47bb30ee3c04bc/%E5%A6%99%E5%8F%AF%E8%93%9D%E5%A4%9A.png?fname=%E5%A6%99%E5%8F%AF%E8%93%9D%E5%A4%9A.png' },
    { keywords: ['林氏'], groupName: '林氏', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/9cba6395564baa950b7c7fdca89b71dc8b4259fafdfe3dfe8464c37e6f84dd07/%E6%9E%97%E6%B0%8F.png?fname=%E6%9E%97%E6%B0%8F.png' },
    { keywords: ['吨吨'], groupName: '吨吨', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f2b70301c09ec3ac329b6fff0da1931f0199a481a66f3c3c36d09107012eadb4/%E5%90%A8%E5%90%A8.png?fname=%E5%90%A8%E5%90%A8.png' },
    { keywords: ['台铃'], groupName: '台铃', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/9b4afe36430efb11e282e75bf02e5d80be7cf01ae81c614674cd737b76f13968/%E5%8F%B0%E9%93%83.png?fname=%E5%8F%B0%E9%93%83.png' },
    { keywords: ['阿道夫'], groupName: '阿道夫', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/d431bc9ec4f6a28b776faff18b8ea140f121832644c72c9a9c8ffbc78bf3116c/%E9%98%BF%E9%81%93%E5%A4%AB.png?fname=%E9%98%BF%E9%81%93%E5%A4%AB.png' },
    { keywords: ['lifespace', '益倍适'], groupName: '益倍适', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/64cfd26c6b6240318168de6e0a64488a8bf3387e5a9f6df81ac622698343d5c0/%E7%9B%8A%E5%80%8D%E9%80%82.png?fname=%E7%9B%8A%E5%80%8D%E9%80%82.png' },
    { keywords: ['嘉实多'], groupName: '嘉实多', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/1ddd4a3d3411f39f468609e669e5d79a933309753f5dc563913370a330cd71da/%E5%98%89%E5%AE%9E%E5%A4%9A.png?fname=%E5%98%89%E5%AE%9E%E5%A4%9A.png' },
    { keywords: ['红牛'], groupName: '红牛', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/4a47bb3fa09b4a1b8383f112d6665f6e9c9e1c51796571b838b22e1d01f26980/%E7%BA%A2%E7%89%9B.png?fname=%E7%BA%A2%E7%89%9B.png' },
    { keywords: ['水卫士', '水卫仕'], groupName: '水卫士', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ea3b49b2f2e286fd71966f3369d28b0408b8290c214f4184bab0abf224d574ad/%E6%B0%B4%E5%8D%AB%E5%A3%AB.png?fname=%E6%B0%B4%E5%8D%AB%E5%A3%AB.png' },
    { keywords: ['乐淇'], groupName: '乐淇', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/5b740c5034f992858c26cff9c5691523353e1fcf4ff8fbf3313cf9d32a475cec/%E4%B9%90%E6%B7%87.png?fname=%E4%B9%90%E6%B7%87.png' },
    { keywords: ['盐津铺子'], groupName: '盐津铺子', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/e98bd4f3e6b4ef4f88a549d5b682e597c0fe972ee1d6fb48c416265f924dbfea/%E7%9B%90%E6%B4%A5%E9%93%BA%E5%AD%90.png?fname=%E7%9B%90%E6%B4%A5%E9%93%BA%E5%AD%90.png' },
    { keywords: ['百雀羚'], groupName: '百雀羚', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/618354a5163ce5f656f9c868cb17c9e6ba78758d412d35000ef2a9f52434d636/%E7%99%BE%E9%9B%80%E7%BE%9A.png?fname=%E7%99%BE%E9%9B%80%E7%BE%9A.png' },
    { keywords: ['C咖'], groupName: 'C咖', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/28bdad1bce427743cc1de1b8b4362c04f52b618d2882f45e1cd7ee9c47ba1cf8/C%E5%92%96.png?fname=C%E5%92%96.png' },
    { keywords: ['得宝', 'TEMPO'], groupName: '得宝', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f54ec2e9fd5688c2ad04324c6899bbb7ddaee2342aedc678a333f7c5fef1ad28/%E5%BE%97%E5%AE%9D.png?fname=%E5%BE%97%E5%AE%9D.png' },
    { keywords: ['YAYA', '鸭鸭'], groupName: '鸭鸭', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/cbae68409f7cf3e441b2353b3a71816bdf141970caa0ff82dfc7c9c80989244e/%E9%B8%AD%E9%B8%AD.png?fname=%E9%B8%AD%E9%B8%AD.png' },
    { keywords: ['法丽兹'], groupName: '法丽兹', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/446cb8567efd89e67a0e85f5725a2cdd67f3d7d410b77d9d6f32ff50eaaeb8a6/%E6%B3%95%E4%B8%BD%E5%85%B9.png?fname=%E6%B3%95%E4%B8%BD%E5%85%B9.png' },
    { keywords: ['EVISU'], groupName: 'EVISU', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/566dc64f7b242a58250701866e5906d3658aef5f9e752a00b19dc43807eb533c/evisu.png?fname=evisu.png' },
    { keywords: ['蕉内', 'BANANAIN'], groupName: '蕉内', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/00f7bbc47fbd29dcc5b3aad4c20565033b058f901372fc7675f8e2c50323a29b/%E8%95%89%E5%86%85.png?fname=%E8%95%89%E5%86%85.png' },
    { keywords: ['海伦凯勒'], groupName: '海伦凯勒', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ac961cf74ce00d0334134ded7e68619f7d103d965109dec6f5b0c4281221230a/%E6%B5%B7%E4%BC%A6%E5%87%AF%E5%8B%92.png?fname=%E6%B5%B7%E4%BC%A6%E5%87%AF%E5%8B%92.png' },
    { keywords: ['LACOSTE'], groupName: 'LACOSTE', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/41439162be1d83d683a718971022f5f6c47f2d25c70ffbeaa1c479097339d0f1/LACOSTE.png?fname=LACOSTE.png' },
    { keywords: ['LOEWE', '罗意威'], groupName: '罗意威', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/a0bb1d4495eedc4edbaaf86538df5adc9a08571822f233a9313a72f1a4342aa4/%E7%BD%97%E6%84%8F%E5%A8%81.png?fname=%E7%BD%97%E6%84%8F%E5%A8%81.png' },
    { keywords: ['JIMMYCHOO'], groupName: 'JimmyChoo', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/bc07a2cd0d66c54f3ea432dc4e8993058c0ed7d5504b07bec55e3d814a82add4/JimmyChoo.png?fname=JimmyChoo.png' },
    { keywords: ['香奈儿', 'CHANEL'], groupName: '香奈儿', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/f24153fb74f7d3355da441d6a946f90aaec41d80aa4f35d83a64186bdc6b4f11/%E9%A6%99%E5%A5%88%E5%84%BF.png?fname=%E9%A6%99%E5%A5%88%E5%84%BF.png' },
    { keywords: ['植村秀'], groupName: '植村秀', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/aa241c0a285b1051dd542673653b79df5780868d66c346b87227459d391c7292/%E6%A4%8D%E6%9D%91%E7%A7%80.png?fname=%E6%A4%8D%E6%9D%91%E7%A7%80.png' },
    { keywords: ['FLYCO', '飞科'], groupName: '飞科', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8fd40539b0bce3bce566f7ba8330a1e578e183f28e3053b70f090c91b73173c7/%E9%A3%9E%E7%A7%91.png?fname=%E9%A3%9E%E7%A7%91.png' },
    { keywords: ['漫步者'], groupName: '漫步者', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/c5c2bde228281701667162e15c1dbf87d2c66913586f16cddfab1a3f5d6a4c91/%E6%BC%AB%E6%AD%A5%E8%80%85.png?fname=%E6%BC%AB%E6%AD%A5%E8%80%85.png' },
    { keywords: ['SKG'], groupName: 'SKG', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/3ff6f97b9432b3c411636ba852c01b618d08040940a05b5414ddb409d97482dc/SKG.png?fname=SKG.png' },
    
    // ========== 美妆个护 ==========
    { keywords: ['Whoo', '后拱辰'], groupName: '后拱辰', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/8b20890f195723fe17b7b368e12f9f7d47f21dfe3ec6ce49a8e878efdea37cdd/%E5%90%8E%E6%8B%B1%E8%BE%B0.png?fname=%E5%90%8E%E6%8B%B1%E8%BE%B0.png' },
    { keywords: ['优时颜'], groupName: '优时颜', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/1d1d3029590a5baeb28f68d7d274be7c8cab4dc4d929dc9ace324c643b541616/%E4%BC%98%E6%97%B6%E9%A2%9C.png?fname=%E4%BC%98%E6%97%B6%E9%A2%9C.png' },
    { keywords: ['舒莱'], groupName: '舒莱', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ba04967c130a33bae26b6c80a88e7e5565d6a0ffe94fac060dc229e29068a793/%E8%88%92%E8%8E%B1.png?fname=%E8%88%92%E8%8E%B1.png' },
    { keywords: ['博乐纯','清朗一日'], groupName: '博士伦', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/46d7b82df75ca8a8e02586c240a77eaef6062e2959f3bb587e294be6400035d4/%E5%8D%9A%E5%A3%AB%E4%BC%A6.png?fname=%E5%8D%9A%E5%A3%AB%E4%BC%A6.png' },
    { keywords: ['欧舒适'], groupName: '强生', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/41d05ee75ff68d1a326a5a0b5898b806e055b9a897b0b0775fdf7e535a3a883d/%E5%BC%BA%E7%94%9F.png?fname=%E5%BC%BA%E7%94%9F.png' },
    { keywords: ['清氧清','欧柯适'], groupName: '库博光学', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/c310c479a0659061098f59cf0ecb8da73edc409ce51a2c70aec33ed623a87d3d/%E5%BA%93%E5%8D%9A%E5%85%89%E5%AD%A6.png?fname=%E5%BA%93%E5%8D%9A%E5%85%89%E5%AD%A6.png' },
    { keywords: ['牙线'], groupName: '牙线', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/adcdb77ed6e46f2415b939dc1acd877bc00aed3330c21be4c445739305ed5ffb/%E7%89%99%E7%BA%BF.png?fname=%E7%89%99%E7%BA%BF.png' },
    { keywords: ['高露洁'], groupName: '高露洁', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ea3f844cf83f2f7c97723c81e203f2000249dc610b4afe1ee28310e55f1b934b/%E9%AB%98%E9%9C%B2%E6%B4%81.png?fname=%E9%AB%98%E9%9C%B2%E6%B4%81.png' },
    { keywords: ['hfp'], groupName: 'HFP', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/1bc83dcfbb2c74a90bc4eafb6d13f43cd3f4a134c334812643b43046ff4f230e/HFP.png?fname=HFP.png' },
    
    // ========== 其他 ==========
    { keywords: ['杜蕾斯', '冈本', '避孕套', '小雨伞', '小玩具', '情趣'], groupName: '情趣用品', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/2825352971e487098f4c6cf4a17381f1167ddd5a34b851047a179076746863f0/%E6%83%85%E8%B6%A3.png?fname=%E6%83%85%E8%B6%A3.png' },
    { keywords: ['超给利','超给力'], groupName: '支付超给利', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/41d0fc1933f2649d2f31afa34cefcc3a9970558df601c285d5b38232eb40be61/%E6%94%AF%E4%BB%98%E8%B6%85%E7%BB%99%E5%88%A9.png?fname=%E6%94%AF%E4%BB%98%E8%B6%85%E7%BB%99%E5%88%A9.png' },
    { keywords: ['河南'], groupName: '河南', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/07dc9e52952e78d2c5edf657b46c33feabe5903bab1c72ebe576be3078342c8b/%E6%B2%B3%E5%8D%97.png?fname=%E6%B2%B3%E5%8D%97.png' },
    { keywords: ['上海'], groupName: '上海', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/27c04f43afc2f89512063cc00877518f344173ee4bda722be6797a31bf8bead6/%E4%B8%8A%E6%B5%B7.png?fname=%E4%B8%8A%E6%B5%B7.png' },
    { keywords: ['掌上'], groupName: '掌上生活', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/bd87a6187534ada892078c4ae37347a18e433a497e2ef002409f40a306a53ccb/%E6%8E%8C%E4%B8%8A%E7%94%9F%E6%B4%BB.png?fname=%E6%8E%8C%E4%B8%8A%E7%94%9F%E6%B4%BB.png' },
    { keywords: ['碰一'], groupName: '碰一碰', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/01cab4ea8de1676e39507b19353911188b9c5052f28b065b6a9f58185fcf1307/%E7%A2%B0%E4%B8%80%E7%A2%B0.png?fname=%E7%A2%B0%E4%B8%80%E7%A2%B0.png' },
    { keywords: ['bug'], groupName: 'BUG价', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/acd6ba171ea8817090e14b4bba5b0b2592c6cb75d514b2f7c1fb94b9c6b86551/Bug%E4%BB%B7.png?fname=Bug%E4%BB%B7.png' },
    { keywords: ['必中'], groupName: '必中', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/30d8896e6b117ad2eccd9dece771bc5b49c04f7bdb89149ad8851391f4ae5346/%E5%BF%85%E4%B8%AD.png?fname=%E5%BF%85%E4%B8%AD.png' },
    { keywords: ['开通'], groupName: '开通', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/479d22eecda873d9b12535974925552bf2a280fa0dd21a5a9879f88330304f85/%E5%BC%80%E9%80%9A.png?fname=%E5%BC%80%E9%80%9A.png' },
    { keywords: ['年卡'], groupName: '年卡', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/6dae33e64195eb4b130633fc5a90d769f37c01f65bf72ecf34f80eab65c4810c/%E5%B9%B4%E5%8D%A1.png?fname=%E5%B9%B4%E5%8D%A1.png' },
    { keywords: ['面包', '肉松小贝', '馍片', '沙琪玛', '趣多多', '威化饼'], groupName: '零食', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/0212d23c734ea7be4585cb98fc1ab7e3446f27d351f10303b989b09e37be4f29/%E9%9B%B6%E9%A3%9F.png?fname=%E9%9B%B6%E9%A3%9F.png' },
    { keywords: ['电影'], groupName: '电影票', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/853a0957854c3de97e91451d217ad768b120ac999bb3191683ad6ed8a63bd57c/%E7%94%B5%E5%BD%B1%E7%A5%A8.png?fname=%E7%94%B5%E5%BD%B1%E7%A5%A8.png' },
    { keywords: ['湿巾'], groupName: '湿巾', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/4e2588feb7d22abfea3882800e426d5f0aaa97edac84b6ba338288e9f00bd08d/%E6%B9%BF%E5%B7%BE.png?fname=%E6%B9%BF%E5%B7%BE.png' },
    { keywords: ['湿厕纸'], groupName: '湿厕纸', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/1646f86408b3919bef97fedc3ab6c259100d5aa6e1aae4030626887f6a8807d0/%E6%B9%BF%E5%8E%95%E7%BA%B8.png?fname=%E6%B9%BF%E5%8E%95%E7%BA%B8.png' },
    { keywords: ['擦镜', '镜片清洁', '镜头清洁', '蔡司'], groupName: '擦镜纸', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/4709c3b207e3fb4cb30a36705192a35c9f3311ad6821dda750c179a6a761985d/%E6%93%A6%E9%95%9C%E7%BA%B8.png?fname=%E6%93%A6%E9%95%9C%E7%BA%B8.png' },
    { keywords: ['雪糕', '冰淇淋'], groupName: '冰淇淋', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ce739f5f8842333dda2841215f5f8e8d66d820b01b95b3c0ea56c05096ddacbe/%E5%86%B0%E6%B7%87%E6%B7%8B.png?fname=%E5%86%B0%E6%B7%87%E6%B7%8B.png' },
    { keywords: ['洗烘', '洗衣机'], groupName: '洗衣机', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/832a986d44bfe1beb94804c62ba1daed3215891301d59e863c08b4938b7078b9/%E6%B4%97%E8%A1%A3%E6%9C%BA.png?fname=%E6%B4%97%E8%A1%A3%E6%9C%BA.png' },
    { keywords: ['火腿肠', '王中王'], groupName: '火腿肠', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/ac617054e935db20a7dfe11f9953027131a73a40ed7d43f45844c14879d499f8/%E7%81%AB%E8%85%BF%E8%82%A0.png?fname=%E7%81%AB%E8%85%BF%E8%82%A0.png' },
    { keywords: ['五常'], groupName: '五常大米', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/7cb9c2626a8d4ebc078248cb47ef3070d0b91eb8ecca2164b6b8f149bb27c8e9/%E4%BA%94%E5%B8%B8%E5%A4%A7%E7%B1%B3.png?fname=%E4%BA%94%E5%B8%B8%E5%A4%A7%E7%B1%B3.png' },
    { keywords: ['生抽'], groupName: '生抽', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/a0715eae006c187ae29bc58e9968cf785757fa74cf3b576ee56c55ec48927195/%E7%94%9F%E6%8A%BD.png?fname=%E7%94%9F%E6%8A%BD.png' },
    { keywords: ['鸡蛋'], groupName: '鸡蛋', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/2ed85f07174894f9e01887b8fb8c1bf6b150a78585888407b59089c4adba1d14/%E9%B8%A1%E8%9B%8B.png?fname=%E9%B8%A1%E8%9B%8B.png' },
    { keywords: ['食用油', '大豆油', '花生油', '胚芽油'], groupName: '食用油', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/fbc1efa2f215bfcdcf38466c38ac53e32f15a431fefc83da934f4729ba96d321/%E9%A3%9F%E7%94%A8%E6%B2%B9.png?fname=%E9%A3%9F%E7%94%A8%E6%B2%B9.png' },
    { keywords: ['微波炉'], groupName: '微波炉', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/053b97d05f99f33740593c127f46f4a0c2754bba06f6532d2cd18b38ec301194/%E5%BE%AE%E6%B3%A2%E7%82%89.png?fname=%E5%BE%AE%E6%B3%A2%E7%82%89.png' },
    { keywords: ['短袖', 'T恤'], groupName: '短袖', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/e16bd6f82fbfae9c4df1cc8c22f19ad77b075fd58a754d1b9298b4f446457b57/%E7%9F%AD%E8%A2%96.png?fname=%E7%9F%AD%E8%A2%96.png' },
    { keywords: ['海飞丝'], groupName: '海飞丝', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/9697fc76770835dd8fe239d931272691ad925d284ab14fc245e4f7637ffd2197/%E6%B5%B7%E9%A3%9E%E4%B8%9D.png?fname=%E6%B5%B7%E9%A3%9E%E4%B8%9D.png' },
    { keywords: ['高钙低脂', '低脂高钙'], groupName: '牛奶', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/d14339f23da565e8fad72fe31244147c1ad55e4c6296ea488ac5246d48a6a5a7/%E7%89%9B%E5%A5%B6.png?fname=%E7%89%9B%E5%A5%B6.png' },
    { keywords: ['手抓饼'], groupName: '手抓饼', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/6f144dbbdaffeb3de84f082b4b31ecd3578358923127c75d873f0acdfef806a5/%E6%89%8B%E6%8A%93%E9%A5%BC.png?fname=%E6%89%8B%E6%8A%93%E9%A5%BC.png' },
    { keywords: ['鸡蛋灌饼'], groupName: '鸡蛋灌饼', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/41d5437f94792e320a4f2f9ef5a34efa9840f2cb4647e09ca791239737411dbd/%E9%B8%A1%E8%9B%8B%E7%81%8C%E9%A5%BC.png?fname=%E9%B8%A1%E8%9B%8B%E7%81%8C%E9%A5%BC.png' },
    { keywords: ['皇家小虎'], groupName: '皇家小虎', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/0cdcd6a50c0c845f08bd0c0408dabbc680bd35f7625eab4991faf6d1302522f4/%E7%9A%87%E5%AE%B6%E5%B0%8F%E8%99%8E.png?fname=%E7%9A%87%E5%AE%B6%E5%B0%8F%E8%99%8E.png' },
    { keywords: ['番茄酱', '番茄沙司'], groupName: '番茄酱', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/d4a0bf55aecf634166ffd4c13eb418477b259932d7f80b50c77144b559a2bee9/%E7%95%AA%E8%8C%84%E9%85%B1.png?fname=%E7%95%AA%E8%8C%84%E9%85%B1.png' },
    { keywords: ['查漏补缺'], groupName: '查漏补缺', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/adc7368b6b2b712bc7371e2aa8d3c6c8448842a41dbfb50a1aca5633004b1e29/%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA.png?fname=%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA.png' },
    { keywords: ['税'], groupName: '退税', avatarUrl: 'https://gzc-download.weiyun.com/ftn_handler/fabfd8c1992208f0b1dd9c5c6349236171a322e6087a5bb504d03517f3ecab96/%E9%80%80%E7%A8%8E.png?fname=%E9%80%80%E7%A8%8E.png' }
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
