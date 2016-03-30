/**
 * Created by Lily on 2016/3/29.
 */
window.onload=function(){
    var oInp=document.getElementsByTagName("input")[0];
    var oDiv=document.getElementsByClassName("square")[0];
    var timer1=null;

    oInp.onclick=function(){
        bounceMove();
    };

    function bounceMove(){
        var ispeed=0;
        setInterval(function(){
            if(oDiv.offsetLeft<300){
                ispeed+=(300-oDiv.offsetLeft)/50;
            }else{
                ispeed-=(oDiv.offsetLeft-300)/50;
            }
            oDiv.style.left=oDiv.offsetLeft+ispeed+"px";
        },30)
    }
};
