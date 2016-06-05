/**
 * Created by Lily on 2016/5/15.
 */

window.onload = function(){
    var oDiv = document.getElementById('div1');

    oDiv.onmousedown = function(ev){
        var oEvent = ev || event;       //兼容代码
        var disX = oEvent.clientX - oDiv.offsetLeft;    //offsetLeft: 为元素离左侧的距离
        var disY = oEvent.clientY - oDiv.offsetTop;


        document.onmousemove = function(ev){
            var oEvent = ev || event;
            oDiv.style.left = oEvent.clientX-disX+'px';     //是原来的基础上增加或减少
            oDiv.style.top  = oEvent.clientY-disY+'px';

        }

        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        }

    }
}