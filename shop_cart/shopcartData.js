//购物车数据
var shopcartData = [
    {
        //商品数量
        count: 2,
        //创建购物车数据时间
        created_at: "2022-08-17T01:46:20.000Z",
        //商品描述
        desc: "独特的黑糖风味拿铁，佐以Q嫩儒糯的黑糖口味珍珠，创造出层次丰富的美妙口感。（建议搅拌后饮用）\n主要原材料：浓缩咖啡，黑糖味珍珠，纯牛奶，黑糖味调味糖浆，原味调味糖浆，可选择添加搅打奶油（含香草风味糖浆）\n图片仅供参考，请以实物为准，建议取餐后尽快饮用。",
        //商品英文名称
        enname: "Brown Sugar Bubble Latte",
        //是否热卖，0非热卖，1热卖
        is_hot: 1,
        //是否删除, 0未删除，1已删除
        is_remove: 0,
        //商品大图片
        large_img: "http://www.kangliuyong.com:10002/images/product_large/IMG_0392_02.jpg",
        //商品名称
        name: "黑糖啵啵拿铁",
        //商品id
        pid: "latte006",
        //商品单价
        price: "28.00",
        //商品口味规格
        rule: "冷/半糖/无奶油",
        //购物车id
        sid: "_s1660700780912",
        //商品小图片
        small_img: "http://www.kangliuyong.com:10002/images/product_small/IMG_0392_02p.jpg",
        //商品状态
        status: 0,
        //商品类型
        type: "latte",
        //商品类型描述
        type_desc: "拿铁",
        //更新购物车数据时间
        updated_at: "2022-08-17T01:46:20.000Z",
        //用户id
        user_id: "coffe1660700764654"
    },
    {
        count: 3,
        created_at: "2022-08-17T01:46:27.000Z",
        desc: "清新又浓郁的百香果香气，混合清新茉莉茶香，加上椰果与寒天的爽滑Q弹，满杯椰香果香茶香。\n主要原材料：椰果、百香果汁、原味寒天晶球、茉莉绿茶、原味调味糖浆。\n图片仅供参考，请以实物为准，建议取餐后尽快饮用。",
        enname: "Passion Fruit & Coconut Jelly Jasmine Tea",
        is_hot: 1,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/d001.png",
        name: "满杯百香果",
        pid: "fruit_tea001",
        price: "17.00",
        rule: "冰/半糖",
        sid: "_s1660700787744",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/d001_small.png",
        status: 0,
        type: "fruit_tea",
        type_desc: "水果茶",
        updated_at: "2022-08-17T01:46:27.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 1,
        created_at: "2022-08-17T01:46:32.000Z",
        desc: "【不含咖啡】优选纯牛奶为底，融进满满椰香，又加入柔和香草风味，椰子控必喝。\n主要原料：纯牛奶、椰子风味粉、香草风味糖浆、原味冰沙粉、冰块、稀奶油（含香草风味糖浆）。\n图片及包装仅供参考，请以实物为准。温馨提示：瑞纳冰系列产品形态为冰沙，无法进行少冰去冰操作，请您谅解。建议送达后尽快饮用。到店饮用口感更佳。 ",
        enname: "Coconut ice",
        is_hot: 1,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/h001.png",
        name: "椰子冰",
        pid: "fruit_tea005",
        price: "20.00",
        rule: "冰/默认奶油",
        sid: "_s1660700792199",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/h001_small.png",
        status: 0,
        type: "fruit_tea",
        type_desc: "水果茶",
        updated_at: "2022-08-17T01:46:32.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 3,
        created_at: "2022-08-17T01:46:39.000Z",
        desc: "醇香巧克力风味搭配牛奶，口感香甜酷爽。（到店饮用口感更佳）\n主要原料：巧克力酱，牛奶，冰沙粉，冰块，搅打奶油（含香草风味糖浆）。\n图片仅供参考，请以实物为准。建议送达后尽快饮用。",
        enname: "Chocolate Exfreezo",
        is_hot: 0,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/IMG_0387_02.jpg",
        name: "巧克力瑞纳冰",
        pid: "rena_ice001",
        price: "28.00",
        rule: "无奶油",
        sid: "_s1660700799360",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/IMG_0387_02p.jpg",
        status: 0,
        type: "rena_ice",
        type_desc: "瑞纳冰",
        updated_at: "2022-08-17T01:46:39.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 1,
        created_at: "2022-08-17T01:46:45.000Z",
        desc: "经典抹茶搭配香滑奶油，入口伴有浓郁的抹茶清香。（到店饮用口感更佳）\n主要原料：抹茶风味固体饮料，冰沙粉，牛奶，冰块，搅打稀奶油。\n图片仅供参考，请以实物为准。建议送达后尽快饮用。",
        enname: "Matcha Exfreezo",
        is_hot: 0,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/IMG_0388_02.jpg",
        name: "抹茶瑞纳冰",
        pid: "rena_ice002",
        price: "28.00",
        rule: "默认奶油",
        sid: "_s1660700805316",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/IMG_0388_02p.jpg",
        status: 0,
        type: "rena_ice",
        type_desc: "瑞纳冰",
        updated_at: "2022-08-17T01:46:45.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 2,
        created_at: "2022-08-17T01:46:52.000Z",
        desc: "草莓和椰果的酸甜搭配，混合醇香牛奶与清新优格，交织出Q滑细腻的口感，莓香四溢很好喝。（饮用前建议搅拌）\n主要原材料：牛奶、草莓汁饮料浓浆、椰果、风味酸奶。\n图片仅供参考，请以实物为准，建议取餐后尽快饮用。",
        enname: "Strawberry sour drink",
        is_hot: 0,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/e001.png",
        name: "草莓酸饮",
        pid: "fruit_tea002",
        price: "19.00",
        rule: "冰/0卡糖",
        sid: "_s1660700812706",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/e001_small.png",
        status: 0,
        type: "fruit_tea",
        type_desc: "水果茶",
        updated_at: "2022-08-17T01:46:52.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 1,
        created_at: "2022-08-17T01:46:59.000Z",
        desc: "Espresso（意式浓缩）与水的黄金配比，带来浓郁的咖啡芬芳，成为脑海中挥之不去的绝妙体验。\n主要原材料：浓缩咖啡，水。\n图片仅供参考，请以实物为准。建议送达后尽快饮用。",
        enname: "Americano",
        is_hot: 0,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/IMG_0380_02.jpg",
        name: "标准美式",
        pid: "coffee001",
        price: "22.00",
        rule: "热/单份糖",
        sid: "_s1660700819267",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/IMG_0380_02p.jpg",
        status: 0,
        type: "coffee",
        type_desc: "咖啡",
        updated_at: "2022-08-17T01:46:59.000Z",
        user_id: "coffe1660700764654"
    },
    {
        count: 4,
        created_at: "2022-08-17T01:47:10.000Z",
        desc: "浓缩咖啡与牛奶彼此融合，加入香浓巧克力风味。（建议到店饮用，奶油融化前口感更佳）\n主要原材料：浓缩咖啡，牛奶，巧克力酱，搅打奶油（含香草风味糖浆）。\n图片仅供参考，请以实物为准。建议送达后尽快饮用。",
        enname: "Mocha",
        is_hot: 0,
        is_remove: 0,
        large_img: "http://www.kangliuyong.com:10002/images/product_large/IMG_0382_02.jpg",
        name: "摩卡",
        pid: "coffee003",
        price: "28.00",
        rule: "热/全糖/无奶油",
        sid: "_s1660700830045",
        small_img: "http://www.kangliuyong.com:10002/images/product_small/IMG_0382_02p.jpg",
        status: 0,
        type: "coffee",
        type_desc: "咖啡",
        updated_at: "2022-08-17T01:47:10.000Z",
        user_id: "coffe1660700764654"
    }
];