/**
 * Created by Lily on 2016/3/13.
 */
window.onload=function(){
    var oBtn=document.getElementsByTagName("input")[0];
    var oDiv=document.getElementsByTagName("div")[0];

    oBtn.onclick=function(){
        startMove(oDiv,300);
    };

    var timer1=null;
    function startMove(obj,iTarget){
        var iSpeed=0;
        clearInterval(timer1);

        timer1=setInterval(function(){
            iSpeed=Math.ceil((iTarget-obj.offsetLeft)/8);

            if(obj.offsetLeft>=iTarget){
                clearInterval(timer1);
            }else{
                obj.style.left=obj.offsetLeft+iSpeed+"px";
                wid.value="啦啦啦";                //写入文本框的值要 直接用id名加上.value
            }
        },30)
    }
}