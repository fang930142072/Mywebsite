/**
 * Created by �Ҿ����� on 2016/7/3.
 */
//���������ֲ�����ͼ
//��ȡ��������Ԫ�ؽڵ�
$(function () {
        var ul = document.getElementById("ul");
        var arr = document.getElementById("arr");

//���к���
//        zhidong(ul,arr,3000);
})


//�����Զ��ֲ�
function zhidong(ulNode,arrs,speed) {
    //��ȡ�����ǩ
    //var ol = ulNode.nextElementSibling || ulNode.nextSibling;
    var ulli = ulNode.children;
    var liwidth = ulli[0].offsetWidth;
    //���Ƶ�һ��li�ڵ�ŵ�ul���
    var newli = ulli[0].cloneNode(true);
    ulNode.appendChild(newli);



    var ji = 0;
    var square = 0;
    //�Զ��ֲ�
    ds = setInterval(dss, speed);
    function dss() {
        square = square > ulli.length-1 ? 0 : square;
        //�ı䰴ť��ɫ
        ji++;
        yundong(ulNode, -ji * liwidth);

        square++;
    }

    //������ͣ��ʱ�����Ƴ�����
    var divbox = ulNode.parentNode.parentNode;
    divbox.onmouseover = function () {
        clearInterval(ds);
        arrs.style.display="block";
    }
    divbox.onmouseout = function () {
        ds = setInterval(dss, 1000);
        arrs.style.display="none";
    }

    //span����������
    var span = arrs.children;
    span[0].onclick = function () {
        ji--;
        square--;
        //�ӵ�һ��ͼƬ�˻ص�����ͼƬ��Ҫ֪�����һ���Ǻ͵�һ��һģһ���ģ�����-1��
        if (ji < 0) {
            //�Ȼص������µ�λ��
            ulNode.style.left = -(ulli.length - 1) * liwidth + "px";
            //��ɵ����µģ�����ֵ��
            ji = ulli.length - 2;
        }
        //console.log(key);
        //�������ڶ���
        yundong(ulNode, -ji * liwidth);

        //����С���飨����˼�룩
        //С�����ֻص��������ת�ص�һ��
        square = square < 0 ? olli.length-1 : square;
        for (var i = 0; i < olli.length; i++) {
            olli[i].className = "";
        }
        olli[square].className = "current";
    }
    span[1].onclick = function () {
        ji++;
        square++;
        //�ӵ�һ��ͼƬ�˻ص�����ͼƬ��Ҫ֪�����һ���Ǻ͵�һ��һģһ���ģ�����-1��
        if (ji > ulli.length-1) {
            //�Ȼص������µ�λ��
            ulNode.style.left ="0px";
            //��ɵ����µģ�����ֵ��
            ji = 1;
        }
        //console.log(key);
        //�������ڶ���
        yundong(ul, -ji * liwidth);
        //����С���飨����˼�룩
        //С�����ֻص��������ת�ص�һ��
        //square = square > olli.length-1 ? 0 : square;
        //for (var i = 0; i < olli.length; i++) {
        //    olli[i].className = "";
        //}
        //olli[square].className = "current";
    }

}
//�˶����
function yundong (butto,Left,Speed){
    if(Speed){
        var Speedleft = Speed/100;
    }else{
        var Speedleft = 10;
    }
    clearInterval(butto.time);
    var reep = butto.offsetLeft<Left?Speedleft:-Speedleft;
    butto.time = setInterval(function(){
        var ca = Left - butto.offsetLeft;
        butto.style.left = butto.offsetLeft+reep+"px";
        if(Math.abs(ca)<Speedleft){
            clearInterval(butto.time);
            butto.style.left = Left+"px";
        }
    },10)

}