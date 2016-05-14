/**
 * Created by Lily  on 2016/5/8.
 */
window.onload=function(){
    var oDiv1=document.getElementById("div1");
    var aLi=oDiv1.getElementsByTagName("li");
    var oTxt=document.getElementById("txt1");
    var aPos=[];
    var iMinZindex=2;

    for(var i=0;i<aLi.length;i++){
        /*aPos[i].left=aLi[i].offsetLeft;                   注意：不能给json属性这样赋值
        aPos[i].top=aLi[i].offsetTop;*/
        aPos[i]={left: aLi[i].offsetLeft, top: aLi[i].offsetTop};
    }
    for(var j=0;j<aLi.length;j++){
        aLi[j].style.position="absolute";
        aLi[j].style.margin="0";
        aLi[j].style.left=aPos[j].left+"px";
        aLi[j].style.top=aPos[j].top+"px";
        aLi[j].index=j;
    }
    for(var i=0;i<aLi.length;i++){
        setDrag(aLi[i]);
    }
    function setDrag(obj){
        obj.onmousedown=function(ev){
            var oEvent=ev||event;
            var disx=oEvent.clientX-obj.offsetLeft;
            var disy=oEvent.clientY-obj.offsetTop;
            obj.style.zIndex=iMinZindex++;

            document.onmousemove=function(ev){
                var oEvent=ev||event;
                oTxt.value=oEvent.clientX;
                obj.style.left=oEvent.clientX-disx+"px";
                obj.style.top=oEvent.clientY-disy+"px";

                for(var j=0;j<aLi.length;j++){
                    aLi[j].style.border="0";
                }
                var oNear=findNearest(obj);
                if(oNear){
                    oNear.style.border="1px dashed #000";
                }
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;

                var oNear=findNearest(obj);
                if(oNear){
                    oNear.style.border="1px dashed #000";

                    startMove(oNear, aPos[obj.index]);
                    startMove(obj, aPos[oNear.index]);
                    var tmp=0;
                    tmp=obj.index;
                    obj.index=oNear.index;
                    oNear.index=tmp;
                }else{
                    startMove(obj, aPos[obj.index]);
                }
            };
            return false;                               //解决mouseup后图片依然动 放不下的问题
        }
    }

    function cdtest(obj1,obj2){                 //碰撞检测
        var l1=obj1.offsetLeft;
        var r1=obj1.offsetLeft+obj1.offsetWidth;
        var t1=obj1.offsetTop;
        var b1=obj1.offsetTop+obj1.offsetHeight;

        var l2=obj2.offsetLeft;
        var r2=obj2.offsetLeft+obj2.offsetWidth;
        var t2=obj2.offsetTop;
        var b2=obj2.offsetTop+obj2.offsetHeight;

        if(r1<l2 || l1>r2 || b1<t2 || t1>b2)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    function getDis(obj1,obj2){                                      //  计算两个对象之间的距离
        var a=obj1.offsetLeft-obj2.offsetLeft;
        var b=obj1.offsetTop-obj2.offsetTop;

        return Math.sqrt(a*a+b*b);
    }

    function findNearest(obj){                                             //找到靠近的几个中最近的
        var a=999999;
        var iMinIndex=-1;
        for(var i=0;i<aLi.length;i++){
            if(obj==aLi[i]) continue;                                   //第二次点下的图片还是原来的图片，同一个obj，因为他们属性index没有变
            if(cdtest(obj,aLi[i])){
                if(getDis(obj,aLi[i])<a){
                    a=getDis(obj,aLi[i]);
                    iMinIndex=i;
                }
            }
        }
        if(iMinIndex==-1){
            return null;
        }else{
            return aLi[iMinIndex];
        }
    }
}







