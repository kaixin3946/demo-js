/**
 * Created by Lily on 2016/5/4.
 */
window.onload=function(){
    var oMenu=document.getElementById("menu");
    var aImg=oMenu.getElementsByTagName("img");
    var aInput=document.getElementsByTagName("input");

    document.onmousemove=function(ev){
        var oEvent=ev||event;

        for(var i=0;i<aImg.length;i++){
            var x=aImg[i].offsetLeft+aImg[i].offsetWidth/2;                     //注意x是个变量，此时对于不同的i，x的值不同
            var y=aImg[i].offsetTop+oMenu.offsetTop+aImg[i].offsetHeight/2;             //offsetTop 是指元素到父元素的高，所以要加上oMenu的offsetTop

            var disx=oEvent.clientX- x;
            var disy=oEvent.clientY- y;
            var dis=parseInt(Math.sqrt(disx*disx+disy*disy));
            aInput[i].value="dis:"+dis;

            var scale=1-dis/300;                    //递减函数，300处的数字决定了距离多远图片就会有感应
            if(scale<=0.5){
                scale=0.5;
            }
            aImg[i].style.width=scale*128+"px";
        }
    }
}









