/**
 * Created by lily on 2015/8/2.
 */
window.onload=function() {
    var oImg = document.getElementById("img1");
    var oText1 = document.getElementById("text1");
    var oBtn1 = document.getElementById("btn1");
    var oDiaBox = document.getElementById("diaBox");
    var arrImg = ["images/1.png", "images/2.png", "images/3.png", "images/4.png"]
    var num=0;
    var m=0;
    var a=0;
    var b=0;

    oBtn1.onclick = function () {
        if (oText1.value == "") {
            alert("输入内容不能为空")
        } else {
            var aLi=document.getElementsByTagName("li");
            m=aLi.length;
            alert(m);

            if(m>0){                                        //非初次发送
                var oLiImg=aLi[m-1].getElementsByTagName("img")[0];
                var oLiIDiv=aLi[m-1].getElementsByTagName("div")[0];
                oLiImg.src=a;
                oLiIDiv.innerHTML=b;
            }

            addDiv();
            var oPopImg=document.getElementById("popImg");
            var oPopDiv=document.getElementById("popDiv");
            oPopImg.src=arrImg[num];
            oPopDiv.innerHTML=oText1.value;
            a=arrImg[num];
            b=oText1.value;
            oText1.value = "";
        }
    };
    oImg.onclick =chgTX;

    //动态添加div img
    function addDiv() {
        var parent1 = document.getElementById("diaBox");
        var divNew = document.createElement("div");
        var liNew2 = document.createElement("li");
        var imgNew = document.createElement("img");
        //++m;
        divNew.id="popDiv";
        liNew2.id="popDivOut";
        imgNew.id="popImg";
        imgNew.style.width="36px";
        imgNew.style.styleFloat="left";
     //创建parent1.appendChild(divNew);div装图片
        parent1.appendChild(liNew2);
        liNew2.appendChild(imgNew);
        liNew2.appendChild(divNew);
    }

    //发送
    /*function send(){
        //发送头像和文字
        addDiv();
        var oPopImg=document.getElementById("popImg");
        var oPopDiv=document.getElementById("popDiv");
        oPopImg.src=arrImg[num];
        oPopDiv.innerHTML=oText1.value;

        a=arrImg[num];
        b=oText1.value;
        oText1.value = "";
    }*/
    //变换头像
    function chgTX() {
        if (num == 3) {
            num = 0;
        } else {
            num++;
        }
        oImg.src = arrImg[num];
    }
};










