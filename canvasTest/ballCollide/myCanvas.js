
/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let width = 500;
let height = 500;

function random(num){
    return Math.random()*num;
}

//创建小球类
function Ball(){
    this.x = random(5)+60;
    this.y = random(3)+60;
    this.r = random(40)+10; //[10,50]
    this.color = "#"+parseInt(Math.random()*0xffffff).toString(16);
    this.xSpeed = random(3)+2;  //[2,5]
    this.ySpeed = random(3)+1;  //[1,4]
}

Ball.prototype.show = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
    ctx.fillStyle = this.color;
    ctx.fill();
};

//碰撞检测
Ball.prototype.run = function(){
    if((this.x-this.r)<=0 || (this.x+this.r)>=width){
        this.xSpeed = -this.xSpeed;
    }
    this.x = this.x+this.xSpeed;

    if((this.y-this.r)<=0 || (this.y+this.r)>=width){
        this.ySpeed = -this.ySpeed;
    }
    this.y = this.y+this.ySpeed;

};

//生成多个小球对象，并放到数组里
let ballArr = [];
let nums=15;
for (let i = 0; i < nums;i++) {
    let ball = new Ball();
    ballArr.push(ball);
    ball.show();
}

//让小球动起来
setInterval(function(){
    ctx.clearRect(0,0,width,height);    //清除画布
    for (let i = 0; i < ballArr.length; i++) {
        let ball = ballArr[i];
        ball.run();
        ball.show();
    }
},10);


