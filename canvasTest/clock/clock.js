

/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

//定义基础变量
let w = h = 400;    //时钟宽高
let x = y = 200;    //时钟中心坐标
let r = 180;        //时钟半径
let r_hour = 60;    //时针长度
let r_minute = 120; //分针长度
let r_second = 140; //秒针长度
let r_text = 140;   //表盘文字的半径
let r_square = 165; //刻度
let r_circle = 10;  //小圆点
let deg = 2*Math.PI;

context.translate(w/2,h/2);

function clock(){
    /**
 * 画表盘和指针
 */
drawCircle(0,0,r,"#ffffff");            //表盘

let date = new Date();
let hour = date.getHours()*deg/12 - deg/4;
let minute = date.getMinutes()*deg/60 - deg/4;
let second = date.getSeconds()*deg/60 - deg/4;

drawLine(0,0,r_hour*Math.cos(hour),r_hour*Math.sin(hour),"#000000",15);    //时针
drawLine(0,0,r_minute*Math.cos(minute),r_minute*Math.sin(minute),"#000",6);      //分针
drawLine(0,0,r_second*Math.cos(second),r_second*Math.sin(second),"red",2);       //秒针

drawCircle(0,0,r_circle,"#000000");     //中心点

/**
 *  画数字
 *  计算圆周坐标
 *  x = x + r*cos()
 *  y = y + r*sin()
 */
for (let i = 1; i <=12; i++) {
    let square = deg/12 * i - Math.PI/2;
    let x = r_text*Math.cos(square);
    let y = r_text*Math.sin(square);
    drawText(i,x,y);

}

/**
 * 画刻度
 * 
 * x1 y1  x2 y2
 */
for(let i=1;i<=60;i++){
    let square = deg/60 * i - Math.PI/2;
    let x1 = r*Math.cos(square);
    let y1 = r*Math.sin(square);

    if(i%5 == 0){
        let x2 = r_square*Math.cos(square);
        let y2 = r_square*Math.sin(square);
        drawLine(x1,y1,x2,y2,"#999",3);
    }else{
        let r_short = 170;
        let x3 = r_short*Math.cos(square);
        let y3 = r_short*Math.sin(square);
        drawLine(x1,y1,x3,y3,"#aaa",1);
    }
}
}

/**
 * 让指针动起来
 */

clock();
setInterval(function(){
    clock();
},1000);

function drawCircle(x1,y1,r1,color){
    context.beginPath();
    context.arc(x1,y1,r1,0,deg,true);
    context.fillStyle=color;
    context.fill();
    context.closePath();
}

function drawLine(x1,y1,x2,y2,color,linewidth){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.strokeStyle = color;
    context.lineWidth = linewidth;
    context.lineCap="round";
    context.stroke();
    context.closePath();
}

function drawText(text,x1,y1){
    context.font = "bold 26px 微软雅黑";
    context.fillStyle = "#000";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text,x1,y1);
}