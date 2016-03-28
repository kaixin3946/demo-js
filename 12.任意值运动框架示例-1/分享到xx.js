/**
 * Created by Lily on 2016/3/10.
 */
window.onload=function(){

    oCon.onmouseover=function(){
        startMove(0);
    };
    oCon.onmouseout=function(){
        startMove(-100);
    };

    var timer=null;
    function startMove(itarget){
        var oCon=document.getElementById("container");
        clearInterval(timer);
        var ispeed=0;
        if(itarget-oCon.offsetLeft>0){
            ispeed=5;
        }else{
            ispeed=-5;
        }
        timer=setInterval(function(){
            if(oCon.offsetLeft==itarget){
                clearInterval(timer);
            }else{
                oCon.style.left=oCon.offsetLeft+ispeed+"px";//alert(oCon.style.left);alert(oCon.offsetLeft);alert(oCon.clientLeft);
            }
        },30)
    }
};







