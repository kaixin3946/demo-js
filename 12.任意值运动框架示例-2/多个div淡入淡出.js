/**
 * Created by Lily on 2016/3/18.
 */
window.onload=function(){
    var aDiv=document.getElementsByTagName("div");
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].timer=null;                         //  给对象添加timer属性
        aDiv[i].onmouseover=function(){
            startMove(this,"opacity",100);
        };
        aDiv[i].onmouseout=function(){
            startMove(this,"opacity",30);
        };
    }


    function getStyle(obj,attr){                    //  获取元素的属性
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }

    function startMove(obj,attr,iTarget){         //执行缓冲运动
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            var  iCur=0;
            if(attr=="opacity"){
                iCur=parseInt(parseFloat(getStyle(obj, attr))*100);         //getStyle()获得的属性是opacity的小数
            }else{
                iCur=parseInt(getStyle(obj,attr));
            }
            var  iSpeed=iSpeed>0?Math.ceil((iTarget-iCur)/8):Math.floor((iTarget-iCur)/8);
            /*alert(iCur);*/
            if(attr=="opacity"){
                obj.style.opacity=(iCur+iSpeed)/100;
                obj.style.filter="alpha(opacity="+(iCur+iSpeed)+")";
            }else{
                if(iCur==iTarget){
                    clearInterval(obj.timer);
                }else{
                    obj.style[attr]=iCur+iSpeed+"px";           //给对象的属性赋值
                }
            }
        },30)
    }
}