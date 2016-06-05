/**
 * Created by Lily on 2016/5/15.
 */
<!--V1.0 过渡OOP, 就是把所有方法抽取出来，单独存在-->

var oDiv = null;
var disX = 0;
var disY = 0;

window.onload = function(){
    oDiv = document.getElementById('div1');
    oDiv.onmousedown = fnDown;
    }

function fnDown(ev){
    var oEvent = ev || event;       //兼容代码
    disX = oEvent.clientX - oDiv.offsetLeft;    //offsetLeft: 为元素离左侧的距离
    disY = oEvent.clientY - oDiv.offsetTop;

    document.onmousemove = fnMove;
    document.onmouseup = fnUp;
    }

function fnMove(ev){
    var oEvent = ev || event;
    oDiv.style.left = oEvent.clientX-disX+'px';     //是原来的基础上增加或减少
    oDiv.style.top  = oEvent.clientY-disY+'px';
    }

function fnUp(){
    document.onmousemove = null;
    document.onmouseup = null;
    }