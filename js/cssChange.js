/**
 * Created by 我就是我 on 2016/7/3.
 */

//窗口变化事件
function windowResize() {
    var hei = $(".container-minbox").height()*3+20;
    $(".screen li").width($(".maxbox-bott").width());
    if($("html").height()>hei){
        $(".container-ul").css('marginTop',($("html").height()-hei-20)/2);
    }else{
        $("html").height(hei+20);
    }
}
$(function () {
    //给轮播图部分 li设置宽高
    $(".screen li").width($(".maxbox-bott").width());
    $(".maxbox-bott").resize(function () {
        console.log("0")

    })

    windowResize();

    $(window)[0].onresize =windowResize;//监控浏览器窗口变化
})




