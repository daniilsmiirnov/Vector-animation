const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid() {
  const gridColor = "rgba(0, 0, 0, 0.2)"; // Цвет сетки с прозрачностью 0.2
  const gridWidth = 1; // Ширина линий сетки

  ctx.save();

  ctx.globalAlpha = 0.5;

  // Рисуем сетку по оси Y (высота)
  const stepY = canvas.height / 10; // Шаг делений по оси Y
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = gridWidth;
  for (let i = 0; i <= canvas.height; i += stepY) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
    ctx.fillText(canvas.height - i, 5, i);
  }

  // Рисуем сетку по оси X (ширина)
  const stepX = canvas.width / 10; // Шаг делений по оси X
  for (let i = 0; i <= canvas.width; i += stepX) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
    ctx.fillText(i, i, canvas.height - 5);
  }

  ctx.restore();
}
//фон
function Background() {
  ctx.fillStyle = "#8ac8ff";
  ctx.fillRect(0, 0, canvas.width, 0.4*canvas.height);
  ctx.fillStyle = "#008000";
  ctx.fillRect(0, 0.8 * canvas.height, canvas.width,canvas.height);
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
  ctx.fillRect(0, 0.4 * canvas.height, canvas.width, 0.4 * canvas.height);
  console.log(canvas.height);
  // Разделительные полосы
  const lineWidth = 5;
  const lineHeight = 20;
  const lineColor = "#ffffff";

  ctx.fillStyle = lineColor;

  const y1 = canvas.height - 0.6 * (1 / 3) * canvas.height;
  const y2 = canvas.height - 0.6 * (2 / 3) * canvas.height;

  // Первая прерывистая полоса
  const x1 = 0;

  // for (let i = x1; i < canvas.width; i += lineHeight * 2) {
  //   ctx.fillRect(i, y2, lineHeight, lineWidth);
  // }
  const railHeight = 0.03 * canvas.height; // Высота отбойника
  const railColor = "#aaaaaa"; // Цвет отбойника
  const gradient = ctx.createLinearGradient(0, 0.37 * canvas.height, canvas.width, 0.37 * canvas.height + railHeight);
  gradient.addColorStop(0, "#ff0000"); // Начальный цвет (красный)
  gradient.addColorStop(1, "#ffffff"); // Конечный цвет (белый)
  // верхний отбойник
  ctx.fillStyle =gradient;
  ctx.fillRect(0, 0.37 * canvas.height, canvas.width, railHeight);

  // Правый отбойник
  ctx.fillStyle = railColor;
  ctx.fillRect(0, 0.77 * canvas.height, canvas.width, railHeight);
}
function DrawGuardRails() {
const railHeight = 0.03 * canvas.height; // Высота отбойника
const numberOfStripes = 20; // Количество полос

// Переменные с цветами
const colors = ["#ffffff", "#ff0000"]; // Белый и красный цвета
let currentColorIndex = 0; // Индекс текущего цвета

for (let i = 0; i < numberOfStripes; i++) {
  const stripeColor = colors[currentColorIndex]; // Выбираем текущий цвет

  // Рисуем отбойник
  ctx.fillStyle = stripeColor;
  ctx.fillRect(0, (0.37 + i * 0.04) * canvas.height, canvas.width, railHeight);

  // Переключаемся на следующий цвет
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}
}

Background();
Cloud(100, 100, 50);
Highway();
// DrawGuardRails();
drawGrid();