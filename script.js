// HTMLの要素を取得
const box = document.getElementById('blueBox');
const toggleBtn = document.getElementById('toggleBtn');
const speedUpBtn = document.getElementById('speedUpBtn');

// 回転の状態を管理する変数
let angle = 0;           // 現在の角度
let speed = 2;           // 1フレームごとに進む角度（速度）
let isRotating = true;   // 回転中かどうか
let animationId = null;  // アニメーションのID

// 毎フレーム実行される回転処理
function rotate() {
  if (isRotating) {
    angle = (angle + speed) % 360; // 角度を増やし、360度を超えたら戻す
    box.style.transform = `rotate(${angle}deg)`; // CSSのrotateを更新
  }
  animationId = requestAnimationFrame(rotate); // 次のフレームを要求
}

// 回転処理をスタート
rotate();

// ボタン操作：回転/停止の切り替え
toggleBtn.addEventListener('click', function() {
  isRotating = !isRotating;
  if (isRotating) {
    toggleBtn.textContent = 'ストップ';
  } else {
    toggleBtn.textContent = 'スタート';
  }
});

// ボタン操作：スピードアップ
speedUpBtn.addEventListener('click', function() {
  speed += 2; // 押すたびに速度を上げる
  if (speed > 20) {
    speed = 2; // 速くなりすぎたら初期値に戻す
  }
});
