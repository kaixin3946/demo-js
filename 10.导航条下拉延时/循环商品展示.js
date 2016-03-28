/**
 * Created by lily on 2015/8/19.
 */
window.onload=function(){
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var aLi1=document.getElementsByTagName("li");
    var num=0;
    var flag=0;
    timer1=setInterval(function(){
        if(flag==0){
            for(var i=0;i<14;i++){
                aLi1[i].style.backgroundColor="yellow";
            }
            aLi1[num].style.backgroundColor="red";
            num++;
            if(num==14){
                flag=1;
            }
        }
        if(flag==1){
            num--;
            for(var j=0;j<14;j++){
                aLi1[j].style.backgroundColor="yellow";
            }
            aLi1[num].style.backgroundColor="red";
            if(num==0){
                flag=0;
            }
        }
    },500);
}