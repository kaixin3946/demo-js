/**
 * Created by Lily on 2016/3/13.
 */
window.onload=window.onscroll=function() {

    var oDiv = document.getElementsByTagName("div")[0];
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var t=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2;
    startMove(oDiv, t);
}
var timer1 = null;

function startMove(obj,iTarget){
    clearInterval(timer1);

    timer1=setInterval(function(){
        var iSpeed=Math.ceil((iTarget-obj.offsetTop)/8);
        iSpeed=iSpeed>0?Math.ceil((iTarget-obj.offsetTop)/8):Math.floor((iTarget-obj.offsetTop)/8);   //不添这句话影响不大

        if(obj.offsetTop==iTarget){
            clearInterval(timer1);
        }else{
            obj.style.top=obj.offsetTop+iSpeed+"px";
            wid.value="啦啦啦";                //写入文本框的值要 直接用id名加上.value
        }
    },30)
}
