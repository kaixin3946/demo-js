/**
 * Created by lily on 2015/8/6.
 */
window.onload=function(){
    var oUl=document.getElementById("all");
    var aH2=document.getElementsByTagName("h2");
    var aUl=oUl.getElementsByTagName("ul");
    var aLi=null;
    var arrLi=[];
    var x=[];
    for(var i=0;i<aH2.length;i++){
        aH2[i].index=i;
        aH2[i].onclick=function(){
            var num=this.index;
            if(aUl[num].className==""){
                aUl[num].className="show";
            }else if(aUl[num].className=="show"){
                aUl[num].className="hide";
            }else if(aUl[num].className=="hide"){
                for(var j=0;j<aUl.length;j++){
                    aUl[j].className="hide";
                }
                aUl[num].className="show";
            }
        }
    }
    for(var i=0;i<aUl.length;i++){
        aLi=aUl[i].getElementsByTagName("li");
        for(var j=0;j<aLi.length;j++){
            arrLi.push(aLi[j]);         //把想要的li放到数组里面去
            }
        }
    for(var i=0;i<arrLi.length;i++){
        arrLi[i].onclick=function(){
            if(this.className==""){         //判断当前的li上有没有样式
                for(var j=0;j<arrLi.length;j++){
                    arrLi[j].className="";
                }
                this.className="hover";
            }else if(this.className=="hover"){
                this.className="";
            }
        }
    }
}
