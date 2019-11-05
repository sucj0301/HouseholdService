$(function() {
   // 全局默认加载页面是customer
   $(".content").load("./customer.html");
       $(".nav_list ul>li:first-child").css({
        "background-color": "#000",
        color: "#2d8cf0"
       });

       $("#title").text("顾客管理")
//    $(".nav_list ul>li:first-child").css("background-color","#000");

   // 点击导航跳转
   jumpNav();

   // 点击导航跳转
   function jumpNav (){

    // 为li标签添加点击事件
    $(".nav_list ul>li").click(function() {


        // console.log()
        // $(".nav_list ul>li").not($(this)).css({
        //     "background-color": "#17233d",
        //     color: "#fff"
        //    });

        // 这里的一个思路就是，改变当前点击行的样式，同时恢复其兄弟元素的样式
        $(this).css({
            "background-color": "#000",
            color: "#2d8cf0"
           })
           .siblings()
           .css({
                "background-color": "#17233d",
                color: "#fff"
               });

        // 通过获取li内部的文本匹配相应对的页面
        switch($(this).text().trim()) {
            case "顾客管理": $(".content").load("./customer.html");
            $("#title").text("顾客管理")
            break;
            case "产品管理": $(".content").load("./product.html");
            $("#title").text("产品管理")
            break;
            case "地址管理": $(".content").load("./address.html");
            $("#title").text("地址管理")
            break;
            case "员工管理": $(".content").load("./waiter.html");
            $("#title").text("员工管理")
            break;
            case "订单管理": $(".content").load("./order.html");
            $("#title").text("订单管理管理")
            break;
            case "评论管理": $(".content").load("./comment.html");
            $("#title").text("评论管理")
            break;
        }
    })
   }


});