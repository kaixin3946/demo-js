/**
 * Created by Lily on 2016/3/18.
 */
    //函数 获取某元素的属性（如：left，top,width,等）//
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

//缓冲运动//
function startMove(obj,attr,iTarget,fn){         //执行缓冲运动
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var  iCur=0;
        if(attr=="opacity"){
            iCur=parseInt(parseFloat(getStyle(obj, attr))*100);         //getStyle()获得的属性是opacity的小数
        }else{
            iCur=parseInt(getStyle(obj,attr));
        }
        /*var  iSpeed=iSpeed>0?Math.ceil((iTarget-iCur)/8):Math.floor((iTarget-iCur)/8);*/
        var iSpeed=(iTarget-iCur)/8;
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

        if(iCur==iTarget){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }else{
            if(attr=="opacity"){
                obj.style.opacity=(iCur+iSpeed)/100;
                obj.style.filter="alpha(opacity="+(iCur+iSpeed)+")";
            }else{
                obj.style[attr]=iCur+iSpeed+"px";           //给对象的属性赋值
            }
        }
    },30)
}







