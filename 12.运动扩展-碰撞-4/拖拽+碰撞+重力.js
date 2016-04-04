/**
 * Created by Lily on 2016/4/4.
 */

window.onload=function(){
    var oDiv1=document.getElementById("div1");
    var timer=null;
    var lastX=0;
    var lastY=0;
    var iSpeedX=0;
    var iSpeedY=0;

    startMove();
    oDiv1.onmousedown=function(ev){
        var oEvent=ev||event;
        var disX=oEvent.clientX-oDiv1.offsetLeft;
        var disY=oEvent.clientY-oDiv1.offsetTop;

        document.onmousemove=function(ev){
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            var t=oEvent.clientY-disY;
            oDiv1.style.left=l+"px";
            oDiv1.style.top=t+"px";

            iSpeedX=l-lastX;
            iSpeedY=t-lastY;
            lastX=l;
            lastY=t;
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
            startMove();
        };
        clearInterval(timer);
};

    function startMove(){
        var oDiv1=document.getElementById("div1");

        timer=setInterval(function(){
            clearInterval(timer);
            iSpeedY+=3;
            var l=oDiv1.offsetLeft+iSpeedX;
            var t=oDiv1.offsetTop+iSpeedY;

            if(t>=document.documentElement.clientHeight-oDiv1.offsetHeight){
                iSpeedY*=-0.8;
                iSpeedX*=0.8;
                t=document.documentElement.clientHeight-oDiv1.offsetHeight;
            }else if(t<=0){
                iSpeedY*=-1;
                iSpeedX*=0.8;
                t=0;
            }

            if(l>=document.documentElement.clientWidth-oDiv1.offsetWidth){
                iSpeedX*=-0.8;
                l=document.documentElement.clientWidth-oDiv1.offsetWidth;
            }else if(l<=0){
                iSpeedX*=-0.8;
                l=0;
            }

            if(Math.abs(iSpeedX)<1){
                iSpeedX=0;
            }
            if(Math.abs(iSpeedY)<1){
                iSpeedY=0;
            }
            if(iSpeedX==0 && iSpeedY==0 && t==document.documentElement.clientHeight-oDiv1.offsetHeight) {
                clearInterval(timer);
            }else{
                oDiv1.style.left=l+"px";
                oDiv1.style.top=t+"px";
            }
        },30)


    }


}
