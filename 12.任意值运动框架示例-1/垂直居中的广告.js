/**
 * Created by Lily on 2016/3/10.
 */
window.onload=window.onscroll=function(){
    var oDiv=document.getElementsByTagName("div")[0];
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var t=(document.documentElement.clientHeight-oDiv.offsetHeight)/2;   //此处oDiv.offsetHeight和oDiv.clientHeight可以互换

    oDiv.style.top=scrollTop+t+"px";
};

