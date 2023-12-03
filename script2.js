

import {Cloud, Cloud1, Cloud2, Cloud3, Clouds } from "./cloud.js";
import { subaru } from "./subaru.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//сетка
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
  
  ctx.fillRect(0, 0, 1000000, 0.4 * canvas.height);
  ctx.fillStyle = "#008000";
  ctx.fillRect(0, 0.8 * canvas.height, 1000000, canvas.height);
}



// автобан 
function Highway(){
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0.4 * canvas.height, 1000000, 0.4 * canvas.height);
  // console.log(canvas.height);
  // Разделительные полосы
  const lineWidth = 5;
  const lineHeight = 20;
  const lineColor = "#ffffff";

  ctx.fillStyle = lineColor;

  const y1 = 0.6 ;

  // Первая разделительная полоса
  const x1 = 0;

  for (let i = x1; i < 1000000; i += lineHeight * 2) {
    ctx.fillRect(i, 0.59*canvas.height, lineHeight, lineWidth);
  }

  // Отбойники
const railHeight = 0.03 * canvas.height; // Высота отбойника
const numberOfPlates = 10000; // Количество плит

for (let i = 0; i < numberOfPlates; i++) {
  const plateWidth = 1000000 / numberOfPlates;

  if (i % 2 === 0) {
    ctx.fillStyle = "#FF0000"; // Красный цвет для четных плит
  } else {
    ctx.fillStyle = "#FFFFFF"; // Белый цвет для нечетных плит
  }

  ctx.fillRect(i * plateWidth, 0.37 * canvas.height, plateWidth, railHeight);
  ctx.fillRect(i * plateWidth, 0.77 * canvas.height, plateWidth, railHeight);
}
}


let roadOffset = 0; // Смещение дороги по оси X

let cloudOffset = 0; // Смещение дороги по оси X
let animationStartTime = null;
const animationDuration = 20000; // 15 секунд в миллисекундах
let wheelRotationAngle = 0;
const wheelRotationSpeed = 0.03; // Скорость вращения колеса
function animateRoad(timestamp) {
  console.log(timestamp);
  if (!animationStartTime) {
    animationStartTime = timestamp;
  }

  // Определение времени, прошедшего с начала анимации
  const elapsedTime = timestamp - animationStartTime;

  // Изменение смещения дороги (движение слева направо)
  roadOffset -= 10; // Изменение смещения, чтобы двигать дорогу влево
  cloudOffset -= 0.5; // Изменение смещения для облаков
  // Очистить холст
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Отрисовка дороги с новым смещением
  ctx.save();
  ctx.translate(roadOffset, 0); // Применение смещения
  Background();
  Highway();

  ctx.restore();
  ctx.save();
  ctx.translate(cloudOffset, 0); // Применение смещения для облаков
  Clouds(ctx);
  ctx.restore();
  wheelRotationAngle += wheelRotationSpeed;
  subaru(ctx, canvas.height, canvas.width, wheelRotationAngle);
  drawGrid();

  // Проверка времени анимации (15 секунд) и продолжение анимации
  if (elapsedTime < animationDuration) {
    requestAnimationFrame(animateRoad);
  }
}

// Начать анимацию
requestAnimationFrame(animateRoad);
// Background();
// Highway();
// Clouds(ctx);
// subaru(ctx,canvas.height,canvas.width);
drawGrid();
