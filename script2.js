const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//фон
function Background() {
  ctx.fillStyle = "#8ac8ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// облако
function Cloud(x,y,radius){
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.closePath();
}

// автобан 
function Highway(){
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0.4*canvas.height, canvas.width, canvas.height);

  // Разделительные полосы
  const lineWidth = 5;
  const lineHeight = 20;
  const lineColor = "#ffffff";

  ctx.fillStyle = lineColor;
//   const y1 = canvas.height / 2 - lineWidth / 2;
//   const y2 = canvas.height / 2 - lineWidth / 2;
//   const y3 = canvas.height / 2 - lineWidth / 2;
const y1 =canvas.height - 0.6*(1/3)*canvas.height;
const y2 = canvas.height - 0.6 * (2/ 3) * canvas.height;

  // Первая прерывистая полоса
  const x1 = 0;
  for (let i = x1; i < canvas.width; i += lineHeight * 2) {
    ctx.fillRect(i, y1, lineHeight, lineWidth);
  }
  for (let i = x1; i < canvas.width; i += lineHeight * 2) {
    ctx.fillRect(i, y2, lineHeight, lineWidth);
  }

}
Background();
Cloud(100, 100, 50);
Cloud(400, 200, 70);
Cloud(600, 150, 60);
Highway();