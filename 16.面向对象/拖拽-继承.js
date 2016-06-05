/**
 * Created by Lily on 2016/5/14.
 */

function LimitDrag(id){
   Drag.call(this,id);                                              //调用drag
}
for(var i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i];       //把drag原型上的属性和方法全部继承过来,是的在更改当前limitdrag函数时不会影响原来的原型
}

LimitDrag.prototype.fnMove=function(ev){
    var oEvent = ev || event;
    var l=oEvent.clientX-this.disX;
    var t=oEvent.clientY-this.disY;

    if(l<0){
        l=0;
    }else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
        l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
    }
    if(t<0){
        t=0;
    }else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
        t=document.documentElement.clientHeight-this.oDiv.offsetHeight;
    }

    this.oDiv.style.left=l+'px';
    this.oDiv.style.top=t+'px';
}

