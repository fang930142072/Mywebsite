/**
 * Created by �Ҿ����� on 2016/7/3.
 */

//���ڱ仯�¼�
function windowResize() {
    if($("html").height()>410){
        $(".container-ul").css('marginTop',($("html").height()-410)/2);
    }else{
        $("html").height(430);
    }
}
$(function () {
    //���ֲ�ͼ���� li���ÿ��

    $(".screen li").width($(".maxbox-bott").width());

    windowResize();
    $(window)[0].onresize =windowResize;//�����������ڱ仯
})




