/**
 * Created by Lily on 2016/3/9.
 */
window.onload=function(){
    var oImg=document.getElementsByTagName("img")[0];
    oImg.onmouseover=function(){
        startMove(100);
    };
    oImg.onmouseout=function(){
        startMove(30);
    };

    var timer=null;
    var alpha=30;

    function startMove(itarget){
        var oImg=document.getElementsByTagName("img")[0];
        clearInterval(timer);
        var ispeed=0;
        if(itarget>alpha){
            ispeed=1;
        }else{
            ispeed=-1;
        }
        timer=setInterval(function(){
            if(alpha==itarget){
                clearInterval(timer);
            }else{
                alpha+=ispeed;
                oImg.style.filter="alpha(opacity:"+alpha+")";
                oImg.style.opacity=alpha/100;
            }
        },30)
    }
};





