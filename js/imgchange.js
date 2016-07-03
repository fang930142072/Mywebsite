/**
 * Created by 我就是我 on 2016/7/3.
 */
//需求：做出轮播焦点图
//获取各个所需元素节点
$(function () {
        var ul = document.getElementById("ul");
        var arr = document.getElementById("arr");

//运行函数
//        zhidong(ul,arr,3000);
})


//函数自动轮播
function zhidong(ulNode,arrs,speed) {
    //获取所需标签
    //var ol = ulNode.nextElementSibling || ulNode.nextSibling;
    var ulli = ulNode.children;
    var liwidth = ulli[0].offsetWidth;
    //复制第一个li节点放到ul最后
    var newli = ulli[0].cloneNode(true);
    ulNode.appendChild(newli);



    var ji = 0;
    var square = 0;
    //自动轮播
    ds = setInterval(dss, speed);
    function dss() {
        square = square > ulli.length-1 ? 0 : square;
        //改变按钮颜色
        ji++;
        yundong(ulNode, -ji * liwidth);

        square++;
    }

    //移入暂停定时器，移出开启
    var divbox = ulNode.parentNode.parentNode;
    divbox.onmouseover = function () {
        clearInterval(ds);
        arrs.style.display="block";
    }
    divbox.onmouseout = function () {
        ds = setInterval(dss, 1000);
        arrs.style.display="none";
    }

    //span控制左右走
    var span = arrs.children;
    span[0].onclick = function () {
        ji--;
        square--;
        //从第一张图片退回第五张图片，要知道最后一张是和第一张一模一样的（所以-1）
        if (ji < 0) {
            //先回到第五章的位置
            ulNode.style.left = -(ulli.length - 1) * liwidth + "px";
            //变成第五章的（索引值）
            ji = ulli.length - 2;
        }
        //console.log(key);
        //滑动到第二张
        yundong(ulNode, -ji * liwidth);

        //点亮小方块（排他思想）
        //小方块轮回道第五个，转回第一个
        square = square < 0 ? olli.length-1 : square;
        for (var i = 0; i < olli.length; i++) {
            olli[i].className = "";
        }
        olli[square].className = "current";
    }
    span[1].onclick = function () {
        ji++;
        square++;
        //从第一张图片退回第五张图片，要知道最后一张是和第一张一模一样的（所以-1）
        if (ji > ulli.length-1) {
            //先回到第五章的位置
            ulNode.style.left ="0px";
            //变成第五章的（索引值）
            ji = 1;
        }
        //console.log(key);
        //滑动到第二张
        yundong(ul, -ji * liwidth);
        //点亮小方块（排他思想）
        //小方块轮回道第五个，转回第一个
        //square = square > olli.length-1 ? 0 : square;
        //for (var i = 0; i < olli.length; i++) {
        //    olli[i].className = "";
        //}
        //olli[square].className = "current";
    }

}
//运动框架
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