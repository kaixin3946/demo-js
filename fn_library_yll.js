/**
 * Created by lily on 2015/8/20.
 */
/*window.onload=function(){
        var oBtn=document.getElementById("btn");
        var oDiv=document.getElementById("div");
        oBtn.onclick=doMove(oDiv,"top",12,40,alert(1));*/

   //函数 获取某元素的属性（如：left，top,width,等）//
    function getStyle(obj,attr){
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }

    //函数执行obj目标元素向某attr方向以dir速度执行到target的值，//
    // 执行完成后执行返回函数//
    function doMove(obj,attr,dir,target,endFn){      //方块div前移、后移
        dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            var speed=parseInt(getStyle(obj,attr))+dir;
            if(speed>target&&dir>0){
                speed=target;
            }
            if(speed<target&&dir<0){
                speed=target;
            }
            obj.style[attr]=speed+"px";
            if(speed==target){
                clearInterval(obj.timer);
                if(endFn){
                    endFn();
                }
            }
        },30)
    }

    //抖动函数封装//
    function shake(obj,attr,endFn){
        var pos=parseInt(getStyle(obj,attr));
        var arr=[];
        var num=0;
        var timer=null;
        for(var i=0;i>0;i-=2){
            arr.push(i,-i);
        }
        arr.push(0);
        clearInterval(obj.shake);
        obj.shake=setInterval(function(){
            obj.style[attr]=pos+arr[num]+px;
            num++;
            if(num==arr.length){
                clearInterval(obj.shake);
                endFn&&endFn();       ////回调函数
            }
        },50)
    }

    //缓冲运动-配合getStyle获取元素属性
    function startMove(obj,attr,iTarget,fn){         //执行缓冲运动
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            var  iCur=0;
            if(attr=="opacity"){
                iCur=parseInt(parseFloat(getStyle(obj, attr))*100);         //getStyle()获得的属性是opacity的小数
            }else{
                iCur=parseInt(getStyle(obj,attr));
            }
            var  iSpeed=iSpeed>0?Math.ceil((iTarget-iCur)/8):Math.floor((iTarget-iCur)/8);

            if(attr=="opacity"){
                obj.style.opacity=(iCur+iSpeed)/100;
                obj.style.filter="alpha(opacity="+(iCur+iSpeed)+")";
            }else{
                if(iCur==iTarget){
                    clearInterval(obj.timer);
                    if(fn){
                        fn();
                    }
                }else{
                    obj.style[attr]=iCur+iSpeed+"px";           //给对象的属性赋值
                }
            }
        },30)
    }



