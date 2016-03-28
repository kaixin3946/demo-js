/**
 * Created by lily on 2015/8/7.
 */
window.onload= function() {
    var oImg=document.getElementById("img1");
    var oImg2=document.getElementById("img2");
    var oSpan=document.getElementById("numImg");
    var oP=document.getElementById("txtImg");
    var aLi=document.getElementsByTagName("li");
    var arrTop=["10px","30px","50px","70px","90px"];
    var arrImg=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    var osDiv=document.getElementsByClassName("sDiv");
    var arrTxt=["图片一","图片二","图片三","图片四","图片五"]
    oImg.src=arrImg[0];
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            var num=this.index;
            oImg2.src=arrImg[num];
            osDiv[0].style.top=arrTop[num];
            osDiv[0].style.display="block";
        };
        aLi[i].onmouseout=function(){
            osDiv[0].style.display="none";
        };
        aLi[i].onclick=function(){
            var num=this.index;
            oImg.src=arrImg[num];
            oSpan.innerHTML=num+1+"/"+aLi.length;
            oP.innerHTML=arrTxt[num];
        }
    }

}