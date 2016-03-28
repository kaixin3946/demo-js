/**
 * Created by lily on 2015/8/20.
 */
window.onload=function(){
    var oBody=document.body;
    var aDiv=document.getElementsByTagName("div");

    for(var i=0;i<20;i++){
        oBody.innerHTML+="<div></div>";
    }
    var flag=0;
    var d,u;
    document.onclick=function(){
        if(flag%2==0){
            clearInterval(u);                                           //不可以每次点击都初始化，需统一初始化
            d=setInterval(doMoveDown,100);
        }else if(flag%2==1){

            u=setInterval(doMoveUp,100);
            clearInterval(d);
        };
        flag++;

    }

    /*oDown.onclick=function() {
        setInterval(doMoveDown,100);
    };
    oUp.onclick=function() {
        setInterval(doMoveUp,100);
    };*/

    function doMoveDown(){
        var topValue=[];
        for(var i=0;i<20;i++){
            topValue[i]=parseInt(getStyle(aDiv[i],"top"));
        }
        if(topValue[0]<=500){
            topValue[0]=parseInt(getStyle(aDiv[0],"top"))+16;
            aDiv[0].style.top=topValue[0]+"px";//当前值+12
        }
        /*if(topValue[1]<=(topValue[0]-13)||topValue[1]==490){
            topValue[1]=parseInt(getStyle(aDiv[1],"top"))+12;
            aDiv[1].style.top=topValue[1]+"px";
        }
        if(topValue[2]<=(topValue[1]-13)||topValue[2]==490){
            topValue[2]=parseInt(getStyle(aDiv[2],"top"))+12;
            aDiv[2].style.top=topValue[2]+"px";
        }*/                                                                                                 //思考过程，从点到面
        for(var j=0;j<=20;j++){
            down(j,j+1)
        }
        function down(a,b){
            if(topValue[b]<=(topValue[a]-17)||topValue[b]==490){
                topValue[b]=parseInt(getStyle(aDiv[b],"top"))+16;
                aDiv[b].style.top=topValue[b]+"px";
            }
        }
    }
    function doMoveUp(){
        var topValue=[];
        for(var i=0;i<20;i++){
            topValue[i]=parseInt(getStyle(aDiv[i],"top"));
        }
        if(topValue[0]>10){
            topValue[0]=parseInt(getStyle(aDiv[0],"top"))-16;
            /*if(topValue[0]<10){
                topValue[0]=parseInt(getStyle(aDiv[0],"top"))+6;
            }*/
            aDiv[0].style.top=topValue[0]+"px";                                     //当前值+12
        }
        for(var j=0;j<20;j++){
            up(j,j+1)
        }
        function up(a,b){
            if(topValue[b]>=(topValue[a]+17)||topValue[b]==26){
                topValue[b]=parseInt(getStyle(aDiv[b],"top"))-16;
                aDiv[b].style.top=topValue[b]+"px";
            }
        }
    }
    function getStyle(obj,attr){
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
    }
};
