/**
 * Created by Lily on 2016/3/28.
 */
window.onload=function(){
    var aLi=document.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover=function(){
            var obj=this.getElementsByClassName("down")[0];
            obj.style.height="auto";
            var iHeight=obj.offsetHeight;
            obj.style.height="0";
            startMove(obj,{"opacity":"80","height":iHeight})
        }
        aLi[i].onmouseout=function(){
            var obj=this.getElementsByClassName("down")[0];
            startMove(obj,{"opacity":"0","height":"30"})
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







