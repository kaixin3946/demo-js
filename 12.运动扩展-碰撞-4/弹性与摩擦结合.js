/**
 * Created by Lily on 2016/3/30.
 */
window.onload=function(){
    var oInp=document.getElementsByTagName("input")[0];
    var oDiv=document.getElementsByClassName("square")[0];
    var ispeed=0;

    oInp.onclick=function(){
        bounceMove();
    };

    function bounceMove(){
        setInterval(function(){

           /* if(oDiv.offsetLeft<300){
                ispeed+=(300-oDiv.offsetLeft)/5;
            }else{
                ispeed-=(oDiv.offsetLeft-300)/5;
            }*/

            ispeed+=(300-oDiv.offsetLeft)/5;
            ispeed*=0.7;
            oDiv.style.left=oDiv.offsetLeft+ispeed+"px";
        },30)
    }
};





