var drawFlag = false;
var oldX = 0;
var oldY = 0;
window.addEventListener("load", function(){
    var can = document.getElementById("myCanvas");
    var context = can.getContext("2d");
//context.fillStyle = "rgb(255, 255, 255)";
//context.fillRect(0, 0, 510, 510);

    can.addEventListener("mousemove", draw, true);
    can.addEventListener("mousedown", function(e){
        drawFlag = true;
        oldX = e.clientX;
        oldY = e.clientY;
    }, false);
    can.addEventListener("mouseup", function(){
        drawFlag = false;
    }, false);


	var count = 1;
	var count2 = 1;
	var timer = setInterval(function(){
	    arrows(count2);
	  if(count >= 100){
	        clearInterval(timer);
	  }
	  count++;
	  count2++;
	  if(count2 >= 10){
	    count2 = 1;
	  }
	},2000);


    var can1 = document.getElementById("answerCanvas1");
    var ctx = can1.getContext("2d");
ctx.font = "italic 64px Arial";
ctx.fillText("fish",120,80);

    var can2 = document.getElementById("answerCanvas2");
    var ctx2 = can2.getContext("2d");
ctx2.font = "italic 64px Arial";
ctx2.fillText("ribbon",120,80);

}, true);

function arrows(aaa){

var bbb = 0;
if (aaa == 9){
window.document.getElementById("arrow1").style.visibility="hidden";
window.document.getElementById("arrow2").style.visibility="hidden";
window.document.getElementById("arrow3").style.visibility="hidden";
window.document.getElementById("arrow4").style.visibility="hidden";
window.document.getElementById("arrow5").style.visibility="hidden";
window.document.getElementById("arrow6").style.visibility="hidden";
window.document.getElementById("arrow7").style.visibility="hidden";
window.document.getElementById("arrow8").style.visibility="hidden";
window.document.getElementById("arrow9").style.visibility="hidden";
window.document.getElementById("arrow10").style.visibility="hidden";
} else {
window.document.getElementById("arrow" + aaa ).style.visibility="visible";
}

}

// 描画処理
function draw(e){
    if (!drawFlag) return;
    var x = e.clientX;
    var y = e.clientY;
    var can = document.getElementById("myCanvas");
    var context = can.getContext("2d");
    context.strokeStyle = "rgba(0,0,0,1)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(oldX, oldY);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
    oldX = x;
    oldY = y;
}
function draw2(e){
    var x = e.clientX;
    var y = e.clientY;
    var can = document.getElementById("myCanvas");
    var context = can.getContext("2d");
    context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(x,y,1,1);
}
//
function saveData(){
	var can = document.getElementById("myCanvas");
	var imagedata = can.toDataURL('image/png');
//var w=window.open('about:blank','image from canvas');
//w.document.write("<img src='"+imagedata+"' alt='from canvas'/>");

//Canvas2Image.saveAsPNG(can);
//console.log(imagedata);
//console.log(imagedata.length);
//formdataオブジェクトを作成
//var form_data = new FormData();
//var imagedata2 = imagedata.split(',');
//var b64img = imagedata2[ 1 ];
//console.log(b64img);
//form_data.append("images_file" , b64img );
var form_data="imagedata=" + imagedata;


// 非同期アクセス
ajax("/quickdraw",form_data,
    function(res) {
        alert(res);
    }
);



}

function clearCanvas(){
	var can = document.getElementById("myCanvas");
	var ctx = can.getContext('2d');
	ctx.clearRect(0,0,510,510);
//ctx.fillStyle = "rgb(255, 255, 255)";
//ctx.fillRect(0, 0, 510, 510);

}


// Ajax（非同期タイプ）
function ajax(url, param, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open("POST", url, true); // true:非同期、false:同期
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//    xmlHttp.setRequestHeader('Content-Type', 'multipart/form-data');
    xmlHttp.send(param);
}

//定期的に画像エンコードして、それをajaxでサーバ送信

//画像認識サービスにdataurlを直接送れるならそれで。
//無理ならサーバ側で変換して送る



