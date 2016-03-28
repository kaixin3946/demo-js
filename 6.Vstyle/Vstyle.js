/**
 * Created by lily on 2015/8/8.
 */
window.onload=function(){
    var aDiv=document.getElementsByTagName("div");
    for(var i=0;i<21;i++){
        document.body.innerHTML+="<div>"+i+"</div>";
    }
    for(var i=0;i<aDiv.length;i++){
        if(i<=(aDiv.length/2)){
            aDiv[i].style.left=i*50+"px";
            aDiv[i].style.top=i*50+"px";
        }else{
            aDiv[i].style.left=i*50+"px";
            aDiv[i].style.top=(aDiv.length-i-1)*50+"px";
        }
    }
};