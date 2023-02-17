
/**@type {HTMLCanvasElement} */
let canvas = document.getElementById("myHeart");
let context = canvas.getContext("2d");

let width = document.documentElement.clientWidth-6;
let height = document.documentElement.clientHeight-6;


canvas.width = width;
canvas.height = height;

let radian = 0;
let radian_add = Math.PI/180;
let size = 15;
let max_size = 20;
let t = -Math.PI;
let deg = 2*Math.PI;

// context.translate(width/2,height/2);
context.beginPath();
context.moveTo(getX(radian,size),getY(radian,size));
context.strokeStyle = "red";
context.lineWidth = 3;
context.textAlign = "center";
context.textBaseline = "middle";

context.fillStyle = "red";
context.font = "38px 宋体";

let timer = setInterval(function(){
    radian += radian_add;
    context.lineTo(getX(radian,size),getY(radian,size));
    context.stroke();
    if(radian > deg){
        context.closePath();

        context.fillText("臭宝贝情人节快乐！",width/2,height/2);
        clearInterval(timer);
    }
    
},15);

function drawHeart(size){
    let radian_temp = 0;
    context.beginPath();
    context.moveTo(getX(radian_temp,this.size),getY(radian_temp,this.size));
    context.strokeStyle = "red";
    context.lineWidth = 3;
    while(radian_temp <= deg){
        radian_temp += radian_add;
        context.lineTo(getX(radian_temp,this.size),getY(radian_temp,this.size));
        
        context.stroke();
    }
}
function getX(t,size){
    return size*(12*Math.sin(t) - 4*Math.sin(3*t)) + width/2;
}

function getY(t,size){
    return -size*(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t)) + height/2;
}

