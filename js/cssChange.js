/**
 * Created by �Ҿ����� on 2016/7/3.
 */

//���ڱ仯�¼�
function windowResize() {
    //window���ڱ仯ʱ�ı�ul�Ŀ�
    $(".screen li").width($(".maxbox-bott").width());

    //window���ڱ仯ʱ�ı�marginTop��div����
    var maxHeight = $("body").height();
    var htmlHeight = $("html").height();
    if(htmlHeight>maxHeight){

        $(".container-ul").css('marginTop',(htmlHeight-maxHeight)/4+10);
    }


}
$(function () {
    //��ʼ��li�Ŀ����ֲ�ͼ���� li���ÿ��
    $(".screen li").width($(".maxbox-bott").width());

    //��ʼ����ֱ����
    windowResize();

    $(window).resize(windowResize);//�����������ڱ仯
})




