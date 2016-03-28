/**
 * Created by lily on 2015/8/12.
 */
window.onload=function() {
    var oEvl = document.getElementById("evl");
 //   var oSpan = document.getElementsByTagName("span")[0];
    var aLi = oEvl.getElementsByTagName("li");
    var oP = document.getElementsByTagName("p")[0];
    var oInput = document.getElementById("save");
    var arrTxt = ["很差", "较差", "还行", "推荐", "力荐"];
    clearAll= function () {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';
        }
    };
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onclick = function () {
            var q = this.getAttribute("rel");
            clearAll();
            oInput.value = q;
            for (var i = 0; i < q; i++) {
                aLi[i].className = 'on';
            }
            oP.innerHTML = arrTxt[q-1];
        };
        aLi[i].onmouseover = function () {
            var q = this.getAttribute("rel");
            clearAll();
            for (var i = 0; i < q; i++) {
                aLi[i].className = 'on';
            }
        };
        aLi[i].onmouseout = function () {
            clearAll();
            for (var i = 0; i < oInput.value; i++) {

                aLi[i].className = 'on';
            }
        };
    }
}

    /*aLi.onmouseover=function(){             //异步执行
        var flag=0;
        this.index=1;
        num=this.index;
        for(var j=0;j<=this.index;j++){
            aLi[j].style.backgroundColor="yellow";
            for(var k=j+1;k<5;k++){
                aLi[k].style.backgroundColor="gray";
            }
        }
        oP.innerHTML=arrTxt[this.index];

        this.onmouseout=function(){
            for(var i=0;i<5;i++){
                aLi[i].style.backgroundColor="gray";
                oP.innerHTML="";
            }
        }
    };*/

    /*  <script type="text/javascript">
      window.onload = function(){
          var star = document.getElementsByTagName('a');
          var oDiv = document.getElementsByTagName('div')[0];
          var temp = 0;

          for(var i = 0, len = star.length; i < len; i++){
          star[i].index = i;

          star[i].onmouseover = function(){
          clear();
          for(var j = 0; j < this.index + 1; j++){
          star[j].style.backgroundPosition = '0 0';
          }
          }

          star[i].onmouseout = function(){
          for(var j = 0; j < this.index + 1; j++){
          star[j].style.backgroundPosition = '0 -20px';
          }
          current(temp);
          }

          star[i].onclick = function(){
          temp = this.index + 1;
          document.getElementsByTagName('p')[0].innerHTML = temp + ' 颗星';
          current(temp);
          }
          }
          //清除所有
          function clear(){
          for(var i = 0, len = star.length; i < len; i++){
          star[i].style.backgroundPosition = '0 -20px';
          }
          }
          //显示当前第几颗星
          function current(temp){
          for(var i = 0; i < temp; i++){
          star[i].style.backgroundPosition = '0 0';
          }
          }
          };
      </script>*/

/*
<script>
$(function(){
    $(".star li").mouseenter(function(){
        $(".star li").css("background","#f60");
        $(this).css("background","#f60");
        $(this).nextAll().css("background","#ccc");
    })
    });
</script>*/
