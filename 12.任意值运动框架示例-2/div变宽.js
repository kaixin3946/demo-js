/**
 * Created by Lily on 2016/3/13.
 */
window.onload=function(){
    var oDiv=document.getElementsByTagName("div")[0];

    oDiv.onmouseover=function(){
        startMove(oDiv,300);
    };
    oDiv.onmouseout=function(){
        startMove(oDiv,100);
    };
    var timer1=null;
    function startMove(obj,iTarget){
        clearInterval(timer1);

        timer1=setInterval(function(){
        var  iSpeed=iSpeed>0?Math.ceil((iTarget-obj.offsetWidth)/8):Math.floor((iTarget-obj.offsetWidth)/8);

            if(obj.offsetWidth==iTarget){
                clearInterval(timer1);
            }else{
                obj.style.width=obj.offsetWidth+iSpeed+"px";
            }
        },30)
    }
}