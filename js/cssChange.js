/**
 * Created by �Ҿ����� on 2016/7/3.
 */

//���ڱ仯�¼�
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
    //���ֲ�ͼ���� li���ÿ��
    $(".screen li").width($(".maxbox-bott").width());
    $(".maxbox-bott").resize(function () {
        console.log("0")

    })

    windowResize();

    $(window)[0].onresize =windowResize;//�����������ڱ仯
})




