
/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

//获取网页窗口大小
let width = document.documentElement.clientWidth-6;
let height = document.documentElement.clientHeight-6;

//更新canvas的大小
canvas.width = width;
canvas.height = height;

/**
 * 
 * @param {x} x坐标 
 * @param {y} y坐标
 * @param {r} 小球的半径
 * @param {color} 小球的颜色
 * 
 */
function Ball(x,y){
    this.x = x;
    this.y = y;
    this.r = 40;
    this.color = "#" + parseInt(Math.random()*0xffffff).toString(16);
}

//画小球
Ball.prototype.show = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
    this.r--;
};

//生成小球，并把小球对象存放到数组里
let ballsArr = [];
// for (let i = 0; i < 10; i++) {
//     let ball = new Ball(60+i*60,100);
//     ballsArr.push(ball);
// }

window.onmousemove = function(e){
    let ball = new Ball(e.x, e.y);
    ballsArr.push(ball);
    ball.show();
};

setInterval(function(){
    context.clearRect(0,0,width,height); //清理画布
    for (let i = 0; i < ballsArr.length; i++) {
        ballsArr[i].show();
        if(ballsArr[i].r <=0){
            ballsArr.splice(i,1);
        }
    }
},20);


