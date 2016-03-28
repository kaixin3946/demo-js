/**
 * Created by lily on 2015/8/19.
 */
window.onload=function(){
    var oUp=document.getElementById("up");
    var oDown=document.getElementById("down");
    var oSlide=document.getElementById("slide");
    var num=60;
    oUp.onmousedown=function(){
        timer1=setInterval(function(){
            if(num>(-160)){
                num=num-1;
                oSlide.style.top=num+"px";
            }else{
                clearInterval(timer1);
                oSlide.style.top=num+"px";
            }
        },100)
    };
    oUp.onmouseup=function(){
        clearInterval(timer1);
        oSlide.style.top=num+"px";
    };

    oDown.onmousedown=function(){
        timer2=setInterval(function(){
            if(num<60){
                num=num+1;
                oSlide.style.top=num+"px";
            }else{
                clearInterval(timer2);
                oSlide.style.top=num+"px";
            }
        },100)
    };
    oDown.onmouseup=function(){
        clearInterval(timer2);
        oSlide.style.top=num+"px";
    }
}