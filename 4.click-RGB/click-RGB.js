/**
 * Created by Administrator on 2015/7/29.
 */

/*点击设置*/
function Set(){
    document.getElementById("Pop-box1").style.visibility="visible";
    document.getElementById("Pop-box2").style.visibility="visible";
}
/*点击变红、绿、蓝*/
function tRed(){
    document.getElementById("odiv1").style.backgroundColor="red";
}
function tGreen(){
    document.getElementById("odiv1").style.backgroundColor="green";
}
function tBlue(){
    document.getElementById("odiv1").style.backgroundColor="blue";
}
/*点击宽度变化*/
function w200(){
    document.getElementById("odiv1").style.width="200px";
}
function w300(){
    document.getElementById("odiv1").style.width="300px";
}
function w400(){
    document.getElementById("odiv1").style.width="400px";
}
/*点击高度变化*/
function h200(){
    document.getElementById("odiv1").style.height="200px";
}
function h300(){
    document.getElementById("odiv1").style.height="300px";
}
function h400(){
    document.getElementById("odiv1").style.height="400px";
}/*确定，隐藏蒙版*/
function osure(){
    document.getElementById("Pop-box1").style.visibility="hidden";
    document.getElementById("Pop-box2").style.visibility="hidden";
}
function reset(){
    var divReset= document.getElementById("odiv1");
    divReset.style.width="100px";
    divReset.style.height="100px";
    divReset.style.backgroundColor="yellow";
    document.getElementById("Pop-box1").style.visibility="hidden";
    document.getElementById("Pop-box2").style.visibility="hidden";
}