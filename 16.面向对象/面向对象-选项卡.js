/**
 * Created by Lily on 2016/5/14.
 */
window.onload=function(){
    /*var oDiv1=document.getElementById("div1");                        //普通方式
    var aBtn=oDiv1.getElementsByTagName("button");
    var aDiv=oDiv1.getElementsByTagName("div");

    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            for(var j=0;j<aBtn.length;j++){
                aDiv[j].style.display="none";
            }
            aDiv[this.index].style.display="block";
        }
    }*/
    var oTab=new TabSwitch("div1");
}
/*创造构造函数模式*/
function TabSwitch(id){
    var oDiv=document.getElementById(id);
    this.aBtn=oDiv.getElementsByTagName("button");
    this.aDiv=oDiv.getElementsByTagName("div");

    for(var i=0;i<this.aBtn.length;i++){
        _this=this;
        this.aBtn[i].index=i;
        this.aBtn[i].onclick=function(){                    //此处若是this.tab，则this指代input
            _this.tab(this);
        };
    }
}
TabSwitch.prototype.tab=function(obj){
    for(var j=0;j<this.aBtn.length;j++){
        this.aDiv[j].style.display="none";
    }
    this.aDiv[obj.index].style.display="block";
}











