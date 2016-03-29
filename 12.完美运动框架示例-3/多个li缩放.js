/**
 * Created by Lily on 2016/3/29.
 */
window.onload=function(){
    var aLi=document.getElementsByTagName("li");
    /*首先需要做布局转换，确保小的li不浮动，给绝对定位*/
    var minIndex=1;

    for(var i=0;i<aLi.length;i++){
        aLi[i].style.left=aLi[i].offsetLeft+"px";
        aLi[i].style.top=aLi[i].offsetTop+"px";
    }
    for(var i=0;i<aLi.length;i++){
        aLi[i].style.position="absolute";
        aLi[i].style.margin=0;
    }
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
            minIndex++;
            this.style.zIndex=minIndex;
            startMove(this,{width:200,height:200,marginLeft:-50,marginTop:-50});
        }
        aLi[i].onmouseout=function(){
            startMove(this,{width:100,height:100,marginLeft:0,marginTop:0});
        }
    }
}

function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

function startMove(obj,json,fn){         //执行缓冲运动
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var bStop=true;		                               //保证所有值同时到达
        for(var attr in json){
            var  iCur=0;
            var iTarget=json[attr];

            if(attr=="opacity"){
                iCur=parseInt(parseFloat(getStyle(obj, attr))*100);         //getStyle()获得的属性是opacity的小数
            }else{
                iCur=parseInt(getStyle(obj,attr));
            }

            var iSpeed=(iTarget-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            /*var  iSpeed=iSpeed>0?Math.ceil((iTarget-iCur)/8):Math.floor((iTarget-iCur)/8);         ???*/

            if(iCur!=iTarget){
                bStop=false;
            }
            if(attr=="opacity"){
                obj.style.opacity=(iCur+iSpeed)/100;
                obj.style.filter="alpha(opacity="+(iCur+iSpeed)+")";
            }else{
                obj.style[attr]=iCur+iSpeed+"px";           //给对象的属性赋值
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}










