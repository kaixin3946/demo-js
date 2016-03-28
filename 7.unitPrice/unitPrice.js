/**
 * Created by lily on 2015/8/8.
 */
window.onload=function(){
    var oUl=document.getElementById("ul1");
    var aLi=oUl.getElementsByTagName("li");
    var ototal=document.getElementById("total");
    var aEmTot=ototal.getElementsByTagName("em");
    var a=0;
    for(var i=0;i<aLi.length;i++){
        unitPrice(i);
    }
    /*单价计价*/
    function unitPrice(x){
                //如果某事件重复执行，则创建函数
        var aBtn1=aLi[x].getElementsByTagName("input")[0];
        var aBtn2=aLi[x].getElementsByTagName("input")[1];
        var aEm=aLi[x].getElementsByTagName("em");
        var num1=parseFloat(aEm[0].innerHTML);  //单价数
        var num2=Number(aEm[1].innerHTML);      //件数
        var aCmp=document.getElementsByClassName("cmp");
        var aJian=document.getElementsByClassName("jian");
        /*点击减少件数*/
        aBtn1.onclick=function(){
            var b=0;
            if(num2==0){
                num2=0;
            }else{
                num2=num2-1;
                aEmTot[0].innerHTML=Number(aEmTot[0].innerHTML)-1;
                aEmTot[1].innerHTML=parseFloat(aEmTot[1].innerHTML)-parseFloat(aEm[0].innerHTML);
            }
            aEm[1].innerHTML=num2;
            aEm[2].innerHTML=num1*num2;

            /*for(var j=0;j<aJian.length;j++){
                if((Number(aJian[j].innerHTML)!=0)){
                   // alert("当前件数不为0是第"+j);
                    var z=parseFloat(aCmp[j].innerHTML);//脚本出现问题
                    if(z<a&&z>b){
                        b=z;
                    //    alert("b的值"+b);
                        aEmTot[2].innerHTML=b;
                    //    alert("j2的值为"+j);
                    }
                }else{

                }
            }*/

             if((Number(aJian[x].innerHTML)==0)){
                  var i=0;
                 var c=0;  //判断在哪定义
                 for(i=0;i<aLi.length;i++){
                     if((i<x||i>x)&&(Number(aJian[i].innerHTML)!=0)){
                         if(parseFloat(aCmp[i].innerHTML)>c){
                             c=parseFloat(aCmp[i].innerHTML);
                         }
                     }
                 }
                 aEmTot[2].innerHTML=c;
            }else{
                 var z=parseFloat(aCmp[x].innerHTML);
                 if(z>a&&z>b){
                     aEmTot[2].innerHTML=z;
                 }
             }
        };
        /*点击增加件数*/
        aBtn2.onclick=function(){
            num2=num2+1;
            aEm[1].innerHTML=num2;
            aEm[2].innerHTML=num1*num2;
            aEmTot[0].innerHTML=Number(aEmTot[0].innerHTML)+1;
            aEmTot[1].innerHTML=parseFloat(aEmTot[1].innerHTML)+parseFloat(aEm[0].innerHTML);
            if(parseFloat(aEm[0].innerHTML)>parseFloat(aEmTot[2].innerHTML)){
                a=parseFloat(aEm[0].innerHTML);
            }
            aEmTot[2].innerHTML=a;
        };
    }
}
