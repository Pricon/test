const obj = [
    {
        "title": "数据结构与算法之美",
        "subTitle": "为工程师量身打造的数据结构与算法私教课",
        "count": 262206,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/11/5b/11a3a5aa2f5879ec88b284044bacd55b.jpg"
    },
    {
        "title": "MySQL实战45讲",
        "subTitle": "从原理到实战，丁奇带你搞懂MySQL",
        "count": 196901,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/59/db/598593a4da4fd7ea898711cc623292db.jpg"
    },
    {
        "title": "左耳听风",
        "subTitle": "洞悉技术的本质，享受科技的乐趣",
        "count": 159401,
        "priceMarket": 39900,
        "price": 27900,
        "backAmount": 2900,
        "pic": "https://static001.geekbang.org/resource/image/21/da/216b472de3f9027371576e107601c2da.jpg"
    },
    {
        "title": "从0开始学架构",
        "subTitle": "前阿里P9技术专家的实战架构心法",
        "count": 133054,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/a9/ed/a96b163e2d9bf19cdfc0f5d0d69e13ed.jpg"
    },
    {
        "title": "Java核心技术面试精讲",
        "subTitle": "前Oracle首席工程师带你修炼Java内功",
        "count": 120074,
        "priceMarket": 12900,
        "price": 9000,
        "backAmount": 1800,
        "pic": "https://static001.geekbang.org/resource/image/6f/51/6f1829aeae4e740e949340c663834551.jpg"
    },
    {
        "title": "趣谈网络协议",
        "subTitle": "像小说一样的网络协议入门课",
        "count": 115355,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/99/57/99f9772bb4ff0d815bb75f6812d24f57.jpg"
    },
    {
        "title": "设计模式之美",
        "subTitle": "前Google工程师手把手教你写高质量代码",
        "count": 112949,
        "priceMarket": 29900,
        "price": 19900,
        "backAmount": 2900,
        "pic": "https://static001.geekbang.org/resource/image/37/47/37db2297526f625866b66cee9aea0547.jpg"
    },
    {
        "title": "深入剖析Kubernetes",
        "subTitle": "Kubernetes原来可以如此简单",
        "count": 98127,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg"
    },
    {
        "title": "重学前端",
        "subTitle": "每天10分钟，重构你的前端知识体系",
        "count": 91887,
        "priceMarket": 12900,
        "price": 9000,
        "backAmount": 1800,
        "pic": "https://static001.geekbang.org/resource/image/80/e2/80293b21a2cc9c02ccde5cec6838efe2.jpg"
    },
    {
        "title": "玩转Spring全家桶",
        "subTitle": "一站通关Spring、Spring Boot与Spring Cloud",
        "count": 84774,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/b1/bd/b16a3f21e6e615b3403deef8decc7cbd.jpg"
    }
]

window.onload = function(){
    for(let i=0;i<obj.length;i++){
        //create card
        let card = document.createElement("div");
        card.setAttribute("class","card");
    
        //create image
        let image_div = document.createElement("div");
        card.appendChild(image_div);
        let image = document.createElement("img");
        image_div.appendChild(image);
        //set image source
        image.setAttribute("src",obj[i].pic);
    
    
        //create info
        let info = document.createElement("div");
        card.appendChild(info);
        info.setAttribute("class","info");
        
        let top_div = document.createElement("div");
        info.appendChild(top_div);
        let title = document.createElement("div");
        top_div.appendChild(title);
        title.setAttribute("id","title");
        let title_text = document.createTextNode(obj[i].title);
        title.appendChild(title_text);
        let detail = document.createElement("div");
        top_div.appendChild(detail);
        detail.setAttribute("id","detail");
        let detail_text = document.createTextNode(obj[i].subTitle);
        detail.appendChild(detail_text);
        let count = document.createElement("div");
        top_div.appendChild(count);
        count.setAttribute("id","count");
        let count_text = document.createTextNode(obj[i].count+"人已购买");
        count.appendChild(count_text);
    
        let text_bt = document.createElement("div");
        info.appendChild(text_bt);
        text_bt.setAttribute("class","text_bt");
        let left_div = document.createElement("div");
        text_bt.appendChild(left_div);
        let price = document.createElement("div");
        left_div.appendChild(price);
        price.setAttribute("class","price");
        let new_price = document.createElement("p");
        price.appendChild(new_price);
        new_price.setAttribute("id","new_price");
        let new_price_text = document.createTextNode("特惠：¥"+obj[i].price);
        new_price.appendChild(new_price_text);
        let old_price = document.createElement("s");
        price.appendChild(old_price);
        old_price.setAttribute("id","old_price");
        let old_price_text = document.createTextNode("原价：¥"+obj[i].priceMarket);
        old_price.appendChild(old_price_text);
    
        let remark = document.createElement("div");
        left_div.appendChild(remark);
        remark.setAttribute("id","remark");
        let remark_text = document.createTextNode("返回红包¥"+obj[i].backAmount);
        remark.appendChild(remark_text);
    
        // let right_div = document.createElement("div");
        // text_bt.appendChild(right_div);
        let buy_bt = document.createElement("button");
        text_bt.appendChild(buy_bt);
        buy_bt.textContent = "去购买";
    
        document.getElementsByTagName("body")[0].appendChild(card);
    }

    
}

