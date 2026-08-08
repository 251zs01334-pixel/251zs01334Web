const box = document.getElementById('blueBox');
const toggleBtn = document.getElementById('toggleBtn');
const speedUpBtn = document.getElementById('speedUpBtn');

let angle = 0;
let speed = 2;
let isRotating = true;

function rotate() {
  if (isRotating) {
    angle = (angle + speed) % 360;
    box.style.transform = `rotate(${angle}deg)`;
  }
  requestAnimationFrame(rotate);
}

rotate();

// テスト用のアラート付き処理
toggleBtn.onclick = function() {
  alert('ストップ/スタートが押されました');
  isRotating = !isRotating;
};

speedUpBtn.onclick = function() {
  alert('スピードアップが押されました');
  speed += 5;
};
