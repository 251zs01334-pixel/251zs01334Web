// HTMLの要素（青い四角形）を取得
const box = document.getElementById('blueBox');

let angle = 0; // 現在の角度
const speed = 2; // 1フレームごとに進む角度（速度）

// 回転させる関数
function rotate() {
  angle = (angle + speed) % 360; // 角度を増やし、360度を超えたら0に戻す
  box.style.transform = `rotate(${angle}deg)`; // CSSのrotateを更新して回転させる
  
  // 次のフレームでもこの関数を呼び出す（ループさせる）
  requestAnimationFrame(rotate);
}

// 最初の呼び出し（これでアニメーションが始まる）
rotate();
