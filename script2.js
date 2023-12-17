

import {Cloud, Cloud1, Cloud2, Cloud3, Clouds } from "./cloud.js";
import { subaru2 } from "./subaru 2.js";
import { subaru } from "./subaru.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawText() {
  ctx.font = "50px Arial";
  ctx.fillStyle = "blue";
  ctx.fillText("Blue win!!", canvas.width / 2 - 80, canvas.height / 2);
}
function endline() {
  ctx.beginPath();
  ctx.moveTo(canvas.width*4.8,canvas.height*0.8) ; 
  ctx.lineTo(canvas.width*4.8, canvas.height*0.4); 
  ctx.strokeStyle = "white"; 
  ctx.lineWidth = 5;
  ctx.stroke();
}
function drawGrid() {
  const gridColor = "rgba(0, 0, 0, 0.2)";
  const gridWidth = 1;

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

function drawTrafficLight(redLightOn) {
  const trafficLightX = canvas.width * 0.5; 
  const trafficLightY = canvas.height-canvas.height*0.15; 
  const trafficLightWidth = canvas.width*0.03; 
  const trafficLightHeight = canvas.height*0.14; 

  ctx.fillStyle = "black";
  ctx.fillRect(trafficLightX, trafficLightY, trafficLightWidth, trafficLightHeight); 

  const redLightRadius = canvas.width*0.007; 
  const lightSpacing = 20; 

  ctx.fillStyle = redLightOn ? "red" : "#00e600"; // Определяем цвет в зависимости от флага


  ctx.beginPath();
  ctx.arc(trafficLightX + trafficLightWidth / 2, trafficLightY + lightSpacing, redLightRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(trafficLightX + trafficLightWidth / 2, trafficLightY + trafficLightHeight / 2, redLightRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(trafficLightX + trafficLightWidth / 2, trafficLightY + trafficLightHeight - lightSpacing, redLightRadius, 0, Math.PI * 2);
  ctx.fill();
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

let w =canvas.width;
let h = canvas.height;
let roadOffset = 0; 

let cloudOffset = 0; 
let animationStartTime = null;
const animationDuration = 20000; 
let wheelRotationAngle1 = 0;
let wheelRotationSpeed1 = 0.03;
let wheelRotationAngle2 = 0;
let wheelRotationSpeed2 = 0.03; // Скорость вращения колеса
let redLightOn = true; // Флаг, указывающий, включен ли красный свет светофора
let pinkCarOffset = 0; // Смещение розовой машины
let BlueCarOffset = 0; 
let carX = 50;
let swet = 50; 
let line = 600;
let carY = canvas.height * 0.6;
function animateRoad(timestamp) {
  console.log(timestamp);
  if (!animationStartTime) {
    animationStartTime = timestamp;
  }

  // Определение времени, прошедшего с начала анимации
  const elapsedTime = timestamp - animationStartTime;
  if (elapsedTime < 5000) {
    wheelRotationSpeed1 = 0;
    wheelRotationSpeed2 = 0;
    // Первые 5 секунд поочередно включаем и выключаем красный свет
    if (elapsedTime % 1000 < 500) {
      redLightOn = true;
    } else {
      redLightOn = false;
    }
  } else {
    // После первых 5 секунд все три круга становятся зелеными
    redLightOn = false;
  }
  if (elapsedTime >= 5000 && elapsedTime<=10000 ) {
    wheelRotationSpeed1 = 0.03;
    pinkCarOffset += 1;
    BlueCarOffset += 0.3;
    wheelRotationSpeed2 = 100;
    carX -= 5;
    swet+=100000
    roadOffset -= 10;
    cloudOffset -= 0.5;
  }
  if (elapsedTime > 10000 && elapsedTime <= 16000) {
    wheelRotationSpeed1 = 0.1;
    pinkCarOffset += 1;
    BlueCarOffset += 2;
    wheelRotationSpeed2 = 100;
    carX -= 5;
    drawText();
    roadOffset -= 10;
    cloudOffset -= 0.5;
  }
  if (elapsedTime > 16000 && elapsedTime <= 18000) {
      wheelRotationSpeed1 = 0.1;
      pinkCarOffset += 3;
      BlueCarOffset += 2;
      wheelRotationSpeed2 = 100;
      carX -= 5;
      roadOffset -= 10;
      cloudOffset -= 0.5;
    }

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.save();
  ctx.translate(roadOffset, 0);
  Background();
  Highway();
  ctx.restore();

  ctx.save();
  ctx.translate(cloudOffset, 0);
  Clouds(ctx);
  ctx.restore();
  ctx.save();
  ctx.translate(roadOffset, 0);
  endline(); 
  ctx.restore();
  wheelRotationAngle1 += 2*wheelRotationSpeed1;
  wheelRotationAngle2 += wheelRotationSpeed2; 
  ctx.save();
  ctx.translate(pinkCarOffset, 0);
  subaru(ctx, canvas.height, canvas.width, wheelRotationAngle1); 
   // ctx.translate(pinkCarOffset,0)
  ctx.restore()
  ctx.save();
  ctx.translate(BlueCarOffset, 0);
  subaru2(ctx, canvas.height, canvas.width, wheelRotationAngle2);
  ctx.restore();
  // drawGrid();
  ctx.save();
  ctx.translate(swet, 0);
  drawTrafficLight(redLightOn); 
  ctx.restore();
  // endline(); 
    if (elapsedTime > 18000) {
    wheelRotationSpeed1 = 0.1;
    pinkCarOffset += 10;
    BlueCarOffset += 10;
    wheelRotationSpeed2 = 100;
    carX -= 5;
    roadOffset -= 10;
    cloudOffset -= 0.5;
    drawText();
  }

  if (elapsedTime < animationDuration) {
    requestAnimationFrame(animateRoad);
  }

}

// Начать анимацию
requestAnimationFrame(animateRoad);

// drawGrid();
