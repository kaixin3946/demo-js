/**
 * Created by lily on 2015/8/19.
 */
window.onload=function(){
    var oNav=document.getElementById("nav");
    var aLi1=oNav.getElementsByTagName("li");
    var aDrop=document.getElementsByClassName("drop");
    var oShouye=document.getElementById("shouye");
    var aHide=document.getElementsByClassName("hide");
    var timer=null;
    var num=0;
    function showDiv(){
        for(var i=0;i<4;i++){
            aLi1[i].style.backgroundColor="blue";
            aHide[i].style.display="none";
            //aHide[i].className="hide";       ???为什么不好使
        }
            aLi1[num].style.backgroundColor="green";
            aHide[num].style.display="block";
            //aHide[num].className="show";
    }

    timer=setInterval(function(){
        showDiv();
        num=num+1;
        num=num%4;
    },1000);
};