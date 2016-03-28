/**
 * Created by Administrator on 2015/8/2.
 */
window.onload=function(){
var oPrev=document.getElementById("prev");
var oNext=document.getElementById("next");
var oImg=document.getElementById("img");
var arr=["dhzx.jpg","jkyz.jpg","jksc.jpg","zjft.jpg","zxpx.jpg"];
var num=0;//初始化
oPrev.onclick=function(){
    if(num==0){
        num=4;
    }else{
        num--;
    }
    oImg.src=arr[num];
};
oNext.onclick=function(){
    if(num==4){
        num=0;
    }else{
        num++;
    }
    oImg.src=arr[num];
};


var olink1=document.getElementById("link1");
var olink2=document.getElementById("link2");
var olink3=document.getElementById("link3");
var olink4=document.getElementById("link4");
var olink5=document.getElementById("link5");
var olink11=document.getElementById("link11");
var olink21=document.getElementById("link21");
var olink31=document.getElementById("link31");
var olink41=document.getElementById("link41");
var olink51=document.getElementById("link51");

    function fnLink1(){
        olink1.style.color = "red";
        oImg.src=arr[0];
        olink11.style.backgroundColor="blue";
        olink2.style.color = "black";
        olink3.style.color = "black";
        olink4.style.color = "black";
        olink5.style.color = "black";
        olink21.style.backgroundColor="deepskyblue";
        olink31.style.backgroundColor="deepskyblue";
        olink41.style.backgroundColor="deepskyblue";
        olink51.style.backgroundColor="deepskyblue";
    }
    function fnLink2(){
        olink2.style.color = "red";
        oImg.src=arr[1];
        olink21.style.backgroundColor="blue";
        olink1.style.color = "black";
        olink3.style.color = "black";
        olink4.style.color = "black";
        olink5.style.color = "black";
        olink11.style.backgroundColor="deepskyblue";
        olink31.style.backgroundColor="deepskyblue";
        olink41.style.backgroundColor="deepskyblue";
        olink51.style.backgroundColor="deepskyblue";
    }
    function fnLink3() {
        olink3.style.color = "red";
        oImg.src=arr[2];
        olink31.style.backgroundColor="blue";
        olink1.style.color = "black";
        olink2.style.color = "black";
        olink4.style.color = "black";
        olink5.style.color = "black";
        olink11.style.backgroundColor="deepskyblue";
        olink21.style.backgroundColor="deepskyblue";
        olink41.style.backgroundColor="deepskyblue";
        olink51.style.backgroundColor="deepskyblue";
    }
    function fnLink4() {
        olink4.style.color = "red";
        oImg.src=arr[3];
        olink41.style.backgroundColor="blue";
        olink1.style.color = "black";
        olink2.style.color = "black";
        olink3.style.color = "black";
        olink5.style.color = "black";
        olink11.style.backgroundColor="deepskyblue";
        olink21.style.backgroundColor="deepskyblue";
        olink31.style.backgroundColor="deepskyblue";
        olink51.style.backgroundColor="deepskyblue";
    }
    function fnLink5(){
        olink5.style.color = "red";
        oImg.src=arr[4];
        olink51.style.backgroundColor="blue";
        olink1.style.color = "black";
        olink3.style.color = "black";
        olink4.style.color = "black";
        olink2.style.color = "black";
        olink11.style.backgroundColor="deepskyblue";
        olink31.style.backgroundColor="deepskyblue";
        olink41.style.backgroundColor="deepskyblue";
        olink21.style.backgroundColor="deepskyblue";
    }
    /*
    olink1.onmouseover=fnLink1;
    olink2.onmouseover=fnLink2;
    olink3.onmouseover=fnLink3;
    olink4.onmouseover=fnLink4;
    olink5.onmouseover=fnLink5;
    olink11.onmouseover=fnLink1;   //也可以Onclick
    olink21.onmouseover=fnLink2;
    olink31.onmouseover=fnLink3;
    olink41.onmouseover=fnLink4;
    olink51.onmouseover=fnLink5;*/

    var oUl=document.getElementById("test");
    var aLi=oUl.getElementsByTagName("li");
    //点击测试事件
    for( var i=0; i<aLi.length; i++ ){
        aLi[i].index = i;   //指示作用，标示出当前是第几个li
// 索引值
        aLi[i].onmouseover = function (){
            num = this.index;
            oImg.src=arr[num];
        };
    }
}
