/**
 * Created by 我就是我 on 2016/7/3.
 */

//窗口变化事件
function windowResize() {
    if($("html").height()>410){
        $(".container-ul").css('marginTop',($("html").height()-410)/2);
    }else{
        $("html").height(430);
    }
}
$(function () {
    //给轮播图部分 li设置宽高

    $(".screen li").width($(".maxbox-bott").width());

    windowResize();
    $(window)[0].onresize =windowResize;//监控浏览器窗口变化
})




