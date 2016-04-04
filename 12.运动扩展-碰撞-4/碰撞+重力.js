/**
 * Created by Lily on 2016/4/4.
 */
window.onload=function(){
    var oDiv1=document.getElementById("div1");
    var timer=null;
    var iSpeed1=6;
    var iSpeed2=8;

    timer=setInterval(function(){
        iSpeed2+=3;
        var l=oDiv1.offsetLeft+iSpeed1;
        var t=oDiv1.offsetTop+iSpeed2;

        if(t>=document.documentElement.clientHeight-oDiv1.offsetHeight){
            iSpeed2*=-0.8;
            iSpeed1*=0.8;
            t=document.documentElement.clientHeight-oDiv1.offsetHeight;
        }else if(t<=0){
            iSpeed2*=-1;
            iSpeed1*=0.8;
            t=0;
        }

        if(l>=document.documentElement.clientWidth-oDiv1.offsetWidth){
            iSpeed1*=-0.8;
            l=document.documentElement.clientWidth-oDiv1.offsetWidth;
        }else if(l<=0){
            iSpeed1*=-0.8;
            l=0;
        }

        if(Math.abs(iSpeed1)<1){
            iSpeed1=0;
        }
        if(Math.abs(iSpeed2)<1){
            iSpeed2=0;
        }
        oDiv1.style.left=l+"px";
        oDiv1.style.top=t+"px";
    },30)


}









