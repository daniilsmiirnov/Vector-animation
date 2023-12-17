export function subaru(ctx, height, width, wheelRotationAngle,carX, carY) {
  let h = height;
  let w = width;
  let h1 = h * 0.7;
  // let h1 = 855;    
  let w1 = w * 0.03;
  // let w1 = 65;
  // console.log(h1,w1)
  ctx.save(); 

  //корпус
  ctx.beginPath();
  ctx.moveTo(w1, h1);
  const radius = 10; 

  ctx.lineTo(w1 + w1 * 6 - radius, h1);

  ctx.arcTo(w1 + w1 * 6, h1, w1 + w1 * 6, h1 - h1 * 0.1, radius);

  ctx.lineTo(w1 + w1 * 6, h1 - h1 * 0.02); 

  ctx.arcTo(
    w1 + w1 * 6 - radius,
    h1 - h1 * 0.04,
    w1 + w1 * 6 - radius,
    h1 - h1 * 0.06, 
    radius
  );

  ctx.lineTo(w1 + w1 * 6 - radius, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 4.5, h1 - h1 * 0.07);
  ctx.lineTo(w1 + w1 * 3.5, h1 - h1 * 0.12);
  ctx.lineTo(w1, h1 - h1 * 0.12);
  ctx.lineTo(w1, h1 - h1 * 0.08);
  ctx.lineTo(w1, h1 - h1 * 0.08);
  ctx.lineTo(w1, h1);
  ctx.closePath();
  ctx.fillStyle = "#ff4252"; 
  ctx.fill(); 
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0.5;
  ctx.stroke();

  let r = h * 0.025;
  let rd = r - 3;

  ctx.save();
  ctx.translate(w1 + w1 * 0.8, h1);
  ctx.rotate(wheelRotationAngle);
  ctx.translate(-(w1 + w1 * 1), -h1);

  ctx.beginPath();
  ctx.arc(w1 + w1 * 1, h1, r, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = h * 0.005;
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(w1 + w1 * 1, h1, rd, 0, Math.PI * 2);
  ctx.strokeStyle = "#00e600";
  ctx.lineWidth = h * 0.003;
  ctx.stroke();

  const spokesCount = 12;
  ctx.beginPath();
  for (let i = 0; i < spokesCount; i++) {
    const angle = (Math.PI * 2 * i) / spokesCount;
    const x1 = w1 + w1 * 1 + Math.cos(angle) * (r * 0.5);
    const y1 = h1 + Math.sin(angle) * (r * 0.5);
    const x2 = w1 + w1 * 1 + Math.cos(angle) * r;
    const y2 = h1 + Math.sin(angle) * r;

    ctx.moveTo(w1 + w1 * 1, h1);
    ctx.lineTo(x1, y1);
    ctx.moveTo(w1 + w1 * 1, h1);
    ctx.lineTo(x2, y2);
  }

  ctx.strokeStyle = "#00e600";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore(); 

  ctx.save();
  ctx.translate(w1 + w1 * 4.9, h1);
  ctx.rotate(wheelRotationAngle); 
  ctx.translate(-(w1 + w1 * 4.9), -h1);

  ctx.beginPath();
  ctx.arc(w1 + w1 * 4.9, h1, r, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = h * 0.005;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(w1 + w1 * 4.9, h1, rd, 0, Math.PI * 2);
  ctx.strokeStyle = "#00e600";
  ctx.lineWidth = h * 0.003;
  ctx.stroke();

  ctx.beginPath();
  for (let i = 0; i < spokesCount; i++) {
    const angle = (Math.PI * 2 * i) / spokesCount;
    const x1 = w1 + w1 * 4.9 + Math.cos(angle) * (r * 0.5);
    const y1 = h1 + Math.sin(angle) * (r * 0.5);
    const x2 = w1 + w1 * 4.9 + Math.cos(angle) * r;
    const y2 = h1 + Math.sin(angle) * r;

    ctx.moveTo(w1 + w1 * 4.9, h1);
    ctx.lineTo(x1, y1);
    ctx.moveTo(w1 + w1 * 4.9, h1);
    ctx.lineTo(x2, y2);
  }
  ctx.strokeStyle = "#00e600";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore(); 

  ctx.beginPath();
  ctx.moveTo(w1, h1 - h1 * 0.06); 
  ctx.lineTo(w1, h1 - h1 * 0.03);
  ctx.lineTo(w1 + w1 * 0.4, h1 - h1 * 0.03);
  ctx.lineTo(w1, h1 - h1 * 0.07);
  ctx.closePath();
  ctx.fillStyle = "#610000";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w1, h1 - h1 * 0.03);
  ctx.lineTo(w1, h1 - h1 * 0.02);
  ctx.lineTo(w1 + w1 * 0.3, h1 - h1 * 0.02);
  ctx.lineTo(w1 + w1 * 0.3, h1 - h1 * 0.03);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 5.5, h1 - h1 * 0.04);
  ctx.lineTo(w1 + w1 * 5.5, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.8, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.8, h1 - h1 * 0.04);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 5.5, h1 - h1 * 0.04);
  ctx.lineTo(w1 + w1 * 5.5, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.6, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.6, h1 - h1 * 0.04);
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(w1 + w1 * 5.8, h1 - h1 * 0.02, w1 * 0.1, w1 * 0.06, 0, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 4.5, h1 - h1 * 0.07);
  ctx.lineTo(w1 + w1 * 3.5, h1 - h1 * 0.12);
  ctx.lineTo(w1, h1 - h1 * 0.12);
  ctx.lineTo(w1, h1 - h1 * 0.07);
  ctx.closePath();
  ctx.fillStyle = "#333333";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 2.8, h1 - h1 * 0.12);
  ctx.lineTo(w1 + w1 * 2.9, h1);
  ctx.lineTo(w1 + w1 * 3, h1);
  ctx.lineTo(w1 + w1 * 2.9, h1 - h1 * 0.12);
  ctx.closePath();
  ctx.fillStyle = "#ff4252";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 1, h1 - h1 * 0.12);
  ctx.lineTo(w1 + w1 * 1, h1 - h1 * 0.05);
  ctx.lineTo(w1 + w1 * 1.1, h1 - h1 * 0.05);
  ctx.lineTo(w1 + w1 * 1.1, h1 - h1 * 0.12);
  ctx.closePath();
  ctx.fillStyle = "#ff4252";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 2.8, h1 - h1 * 0.12);
  ctx.lineTo(w1 + w1 * 2.9, h1);

  ctx.moveTo(w1 + w1 * 2.9, h1 - h1 * 0.12);
  ctx.lineTo(w1 + w1 * 3, h1);

  ctx.moveTo(w1 + w1 * 1.1, h1 - h1 * 0.07);
  ctx.lineTo(w1 + w1 * 1.22, h1);

  ctx.moveTo(w1 + w1 * 4.5, h1 - h1 * 0.07);
  ctx.lineTo(w1 + w1 * 4.5, h1 - h1 * 0.02);
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(w1, h1 - h1 * 0.12);
  ctx.lineTo(w1 + w1 * 3.5, h1 - h1 * 0.12);
  ctx.strokeStyle = "#ff4252";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.translate(carX, carY);
  ctx.restore(); 
  // ctx.beginPath();
  // ctx.ellipse(w1 + w1 * 1.3, h1 - h1 * 0.06, w1*0.14, w1*0.06, 0, 0, Math.PI * 2);
  // ctx.ellipse(w1 + w1 * 3, h1 - h1 * 0.06, w1 * 0.14, w1 * 0.06, 0, 0, Math.PI * 2);
  // ctx.fillStyle = "black";
  // ctx.fill();
}
