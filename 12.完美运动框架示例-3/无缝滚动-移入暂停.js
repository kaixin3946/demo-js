/**
 * Created by Lily on 2016/3/29.
 */
window.onload=function(){
    var oDiv1=document.getElementById("div1");
    var oUl=oDiv1.getElementsByTagName("ul")[0];
    var aLi=oDiv1.getElementsByTagName("li");
    oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
    var aInput=document.getElementsByTagName("input");
    var time4=null;
    var ispeed=5;

    time4=setInterval(cycle,30)
    aInput[0].onclick=function(){
        ispeed*=-1;
        cycle();
    };
    aInput[1].onclick=function(){
        ispeed=Math.abs(ispeed);
        cycle();
    }
    oUl.onmouseover=function(){
        clearInterval(time4);
    }
    oUl.onmouseout=function(){
        time4=setInterval(cycle,30)
    }

    function cycle(){
        var iWidth=oUl.offsetWidth;
        if(oUl.offsetLeft<=-(iWidth/2)&&ispeed<0){
            oUl.style.left=0+"px";
        }else if(oUl.offsetLeft>=0){
            oUl.style.left=-(iWidth/2)+"px";
        }
        oUl.style.left=(oUl.offsetLeft+ispeed)+"px";
    }
}
























