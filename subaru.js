export function subaru(ctx, height, width, wheelRotationAngle) {
  let h = height;
  let w = width;
  let h1 = h * 0.55;
  let w1 = w * 0.03;

  ctx.beginPath();
  ctx.moveTo(w1, h1);
  ctx.lineTo(w1 + w1 * 6, h1);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  let r = h * 0.022;
  let rd = r - 3;

  // Нарисовать первое колесо
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

  ctx.restore(); // Восстанавливаем сохраненное состояние контекста для первого колеса

  // Нарисовать второе колесо
  ctx.save();
  ctx.translate(w1 + w1 * 4.9, h1);
  ctx.rotate(wheelRotationAngle); // Применяем тот же угол вращения
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

  ctx.restore(); // Восстанавливаем сохраненное состояние контекста для второго колеса
}
