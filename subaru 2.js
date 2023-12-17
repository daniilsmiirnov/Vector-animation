export function subaru2(ctx, height, width, wheelRotationAngle) {
  let h = height;
  let w = width;
  let h1 = h * 0.55;
  let w1 = w * 0.03;
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
  ctx.lineTo(w1 + w1 * 4.5, h1 - h1 * 0.08);
  ctx.lineTo(w1 + w1 * 3.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 1.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 1, h1 - h1 * 0.08);
  ctx.lineTo(w1, h1 - h1 * 0.08);
  ctx.lineTo(w1, h1);
  ctx.closePath();
  ctx.fillStyle = "#000066"; 
  ctx.fill(); 
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  let r = h * 0.022;
  let rd = r - 3;

  // первое колесо
  ctx.save();
  ctx.translate(w1 + w1 * 1, h1);
  ctx.rotate(wheelRotationAngle);
  ctx.translate(-(w1 + w1 * 1), -h1);

  ctx.beginPath();
  ctx.arc(w1 + w1 * 1, h1, r, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = h * 0.005;
  ctx.stroke();

  // Диск первого колеса
  ctx.beginPath();
  ctx.arc(w1 + w1 * 1, h1, rd, 0, Math.PI * 2);
  ctx.strokeStyle = "gold";
  ctx.lineWidth = h * 0.003;
  ctx.stroke();

  // Спицы первого колеса
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

  ctx.strokeStyle = "gold";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore(); 
  // второе колесо
  ctx.save();
  ctx.translate(w1 + w1 * 4.9, h1);
  ctx.rotate(wheelRotationAngle); 
  ctx.translate(-(w1 + w1 * 4.9), -h1);

  ctx.beginPath();
  ctx.arc(w1 + w1 * 4.9, h1, r, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = h * 0.005;
  ctx.stroke();

  // Диск второго колеса
  ctx.beginPath();
  ctx.arc(w1 + w1 * 4.9, h1, rd, 0, Math.PI * 2);
  ctx.strokeStyle = "gold";
  ctx.lineWidth = h * 0.003;
  ctx.stroke();

  // Спицы второго колеса
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
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore(); 

  ctx.beginPath();
  ctx.moveTo(w1, h1 - h1 * 0.08); // начальная точка левого фара
  ctx.lineTo(w1, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 0.4, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 0.4, h1 - h1 * 0.08);
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 0.3, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 0.3, h1 - h1 * 0.08);
  ctx.lineTo(w1 + w1 * 0.5, h1 - h1 * 0.08);
  ctx.lineTo(w1 + w1 * 0.5, h1 - h1 * 0.06);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 5.5, h1 - h1 * 0.04);
  ctx.lineTo(w1 + w1 * 5.5, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.9, h1 - h1 * 0.06);
  ctx.lineTo(w1 + w1 * 5.9, h1 - h1 * 0.04);
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
  ctx.moveTo(w1 + w1 * 4.5, h1 - h1 * 0.08);
  ctx.lineTo(w1 + w1 * 3.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 1.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 1, h1 - h1 * 0.08);
  ctx.closePath();
  ctx.fillStyle = "#333333";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 2.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 2.6, h1 );
  ctx.lineTo(w1 + w1 * 2.8, h1 );
  ctx.lineTo(w1 + w1 * 2.7, h1 - h1 * 0.14);
  ctx.closePath();
  ctx.fillStyle = "#000066";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 2.5, h1 - h1 * 0.14); 
  ctx.lineTo(w1 + w1 * 2.6, h1);

  ctx.moveTo(w1 + w1 * 2.7, h1 - h1 * 0.14); 
  ctx.lineTo(w1 + w1 * 2.8, h1);

  ctx.moveTo(w1 + w1 * 1, h1 - h1 * 0.08); 
  ctx.lineTo(w1 + w1 * 1.1, h1-h1*0.04);

  ctx.moveTo(w1 + w1 * 4.5, h1 - h1 * 0.08);
  ctx.lineTo(w1 + w1 * 4.5, h1-h1*0.02);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();  
  
  ctx.beginPath();
  ctx.moveTo(w1 + w1 * 3.5, h1 - h1 * 0.14);
  ctx.lineTo(w1 + w1 * 1.5, h1 - h1 * 0.14);
  ctx.strokeStyle = "#000066";
  ctx.lineWidth = 4;
  ctx.stroke();    
  ctx.beginPath();
  ctx.ellipse(w1 + w1 * 1.3, h1 - h1 * 0.06, w1*0.14, w1*0.06, 0, 0, Math.PI * 2);
  ctx.ellipse(w1 + w1 * 3, h1 - h1 * 0.06, w1 * 0.14, w1 * 0.06, 0, 0, Math.PI * 2); 
  ctx.fillStyle = "black"; 
  ctx.fill();
}
