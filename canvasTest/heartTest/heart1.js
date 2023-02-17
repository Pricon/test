

/**@type {HTMLCanvasElement} */
let canvas = document.getElementById("myHeart");
let context = canvas.getContext("2d");


let width = document.documentElement.clientWidth-6;
let height = document.documentElement.clientHeight-6;

canvas.width = width;
canvas.height = height;
let deg = 2*Math.PI;
let add = Math.PI/180;

function Heart(x,y){
    this.x = x || Math.random()*width ;   //[100,300]
    this.y = y || 30  ;
    this.xSpeed = Math.random()*4-2;  //[-2,2]
    this.ySpeed = Math.random()*4+3;  //[1,4]
    this.color = "#d75d6c";
    this.flag = 0; 
    this.type = parseInt(Math.random()*2+1);
}

Heart.prototype.show = function(){
    let t = 0;
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.lineWidth = 1;
    context.globalAlpha=0.2;
    context.moveTo(getX(t,this.x),getY(t,this.y));
    while(t <= deg){
        t += add;
        context.lineTo(getX(t,this.x),getY(t,this.y));
        if(this.type%2 == 0){
            context.stroke();
        }else{
            context.fill();
        }
    }
    context.closePath();
};

Heart.prototype.run = function(){
    this.x = this.x+this.xSpeed;
    this.y = this.y+this.ySpeed;
}




let arr = [];
        
            let t1 = 0;
            context.beginPath();
            context.strokeStyle = "#d75d6c";
            context.lineWidth = 3;
            context.textAlign = "center";
            context.textBaseline = "middle";

            context.fillStyle = "#d75d6c";
            context.font = "25px 楷体";
            context.moveTo(getXbig(t1,width/2),getYbig(t1,height/2));
            let timer1 = setInterval(function(){
                t1 += add;
                context.lineTo(getXbig(t1,width/2),getYbig(t1,height/2));
                context.stroke();
                context.fillText("爱意加载中......",width/2,height/2);
                if(t1 > deg){

                    context.closePath();

                    // context.fillText("臭宝贝情人节快乐！",width/2,height/2);

                    clearInterval(timer1);
                    
                    for(let i=0; i<15; i++){
                        let h = new Heart();
                        arr.push(h);
                        // h.show();
                    }
                    let timer = setInterval(function(){
                        context.clearRect(0,0,width,height);
                        context.globalAlpha = 1.0;
                        let img = document.getElementById("myimg");
                        context.drawImage(img,width/2-250,height/2-250,450,600);
                        context.globalAlpha = 0.7;
                        context.font = "40px 楷体";
                        context.fillStyle = "pink";
                        context.fillText("情人节快乐！",width/2,100);
                        for(let i=0;i<arr.length;i++){
                            let heart = arr[i];
                            heart.show();
                            heart.run();
                            if(heart.y >= height/4 && heart.flag != 1){
                                let h = new Heart();
                                    arr.push(h);
                                    h.show();
                                heart.flag =1;
                            }
                            if(heart.y >= height/5*4){
                                arr.splice(i,1);
                            }
                        }
                    },5);
                    
                }
            },20);
            
function getX(t, x){
    return (12*Math.sin(t) - 4*Math.sin(3*t)) + x;
}

function getY(t,y){
    return -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t)) + y;
}

function getXbig(t, x){
    return 15*(12*Math.sin(t) - 4*Math.sin(3*t)) + x;
}

function getYbig(t,y){
    return -15*(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t)) + y;
}