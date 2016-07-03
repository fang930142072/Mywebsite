/**
 * Created by 我就是我 on 2016/7/3.
 */

//窗口变化事件
function windowResize() {
    //window窗口变化时改变ul的宽
    $(".screen li").width($(".maxbox-bott").width());

    //window窗口变化时改变marginTop是div居中
    var maxHeight = $("body").height();
    var htmlHeight = $("html").height();
    if(htmlHeight>maxHeight){

        $(".container-ul").css('marginTop',(htmlHeight-maxHeight)/4+10);
    }


}
$(function () {
    //初始化li的宽，给轮播图部分 li设置宽高
    $(".screen li").width($(".maxbox-bott").width());

    //初始化垂直居中
    windowResize();

    $(window).resize(windowResize);//监控浏览器窗口变化
})




