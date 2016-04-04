/**
 * Created by Lilyon 2016/4/4.
 */
window.onload=function(){
    var oDiv1=document.getElementById("div1");
    var oBody=document.getElementsByTagName("body");
    var timer=null;
    var iSpeed1=5;
    var iSpeed2=5;

    timer=setInterval(function(){

        var l=oDiv1.offsetLeft+oDiv1.offsetWidth;
        var t=oDiv1.offsetTop+oDiv1.offsetHeight;

        if(l>=document.documentElement.clientWidth){
            iSpeed1*=-1;
            l=document.documentElement.clientWidth;
        }else if(l<=oDiv1.offsetWidth){
            iSpeed1=Math.abs(iSpeed1);
            l=0;
        }
        if(t>=document.documentElement.clientHeight){
            iSpeed2*=-1;
            t=document.documentElement.clientHeight;
        }else if(t<=oDiv1.offsetWidth){
            iSpeed2=Math.abs(iSpeed2);
            t=0;
        }
        oDiv1.style.top=oDiv1.offsetTop+iSpeed2+"px";
        oDiv1.style.left=oDiv1.offsetLeft+iSpeed1+"px";
    },30)


}







