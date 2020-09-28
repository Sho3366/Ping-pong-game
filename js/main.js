//ベクトルのクラスを定義
//クラスを初期化した時に呼ばれる関数
class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

//長方形を定義するクラス
class Rect {
    constructor(w, h) {
        this.pos = new Vec;
        //size.xが横幅、size.yが縦幅になります
        this.size = new Vec(w,h);
    }
}

//ボールクラス
//Rectを継承するのでextendsを記載
class Ball extends Rect {
    constructor() {
        super(10, 10);
        this.vel = new Vec;
    }
}

const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const ball = new Ball;
//ボールのポジションの初期値の設定
ball.pos.x = 100;
ball.pos.y = 50;
console.log(ball);
// 6:16まで実装

//update関数を定義
//animationさせるときに繰り返し実行される関数
//dt = delta time
function update(dt) {
    ball.pos.x += ball.vel.x * dt;
    ball.pos.y += ball.vel.y * dt;
}

context.fillStyle = "#000";
//四角形を描画する
context.fillRect(0,0, canvas.width, canvas.height);

context.fillStyle = "#fff";
//四角形を描画する
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, 
    ball.size.y);