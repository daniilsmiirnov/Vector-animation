export function Cloud(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x - radius * 0.5, y - radius * 0.5, radius * 0.8, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y - radius * 0.5, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.5, y, radius * 0.8, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y + radius * 0.5, radius * 0.7, 0, 2 * Math.PI);
  ctx.arc(x - radius * 0.5, y + radius * 0.5, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x - radius * 1.2, y, radius * 0.9, 0, 2 * Math.PI);

  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}


export function Cloud1(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x - radius * 0.5, y - radius * 0.5, radius * 0.8, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y - radius * 0.5, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.5, y, radius * 0.8, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y + radius * 0.5, radius * 0.7, 0, 2 * Math.PI);
  ctx.arc(x - radius * 0.5, y + radius * 0.5, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x - radius * 1.2, y, radius * 0.9, 0, 2 * Math.PI);

  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

export function Cloud2(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x - radius * 0.7, y - radius * 0.3, radius * 0.5, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y - radius * 0.5, radius * 0.7, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.7, y, radius * 0.5, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.3, y + radius * 0.4, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x - radius * 0.5, y + radius * 0.4, radius * 0.4, 0, 2 * Math.PI);
  ctx.arc(x - radius * 1.2, y, radius * 0.7, 0, 2 * Math.PI);

  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

export function Cloud3(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x - radius * 0.7, y - radius * 0.2, radius * 0.5, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.3, y - radius * 0.5, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.7, y, radius * 0.7, 0, 2 * Math.PI);
  ctx.arc(x + radius * 0.2, y + radius * 0.4, radius * 0.6, 0, 2 * Math.PI);
  ctx.arc(x - radius * 0.5, y + radius * 0.4, radius * 0.5, 0, 2 * Math.PI);
  ctx.arc(x - radius * 1.3, y, radius * 0.8, 0, 2 * Math.PI);

  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}
export function Clouds(ctx) {
Cloud1(ctx, 100, 100, 50);
Cloud1(ctx, 1200, 200, 70);
Cloud1(ctx, 700, 250, 50);



Cloud2(ctx, 600, 100, 70);
Cloud2(ctx, 200, 200, 70);
Cloud2(ctx, 1000, 50, 70);



Cloud3(ctx, 500, 300, 60);
Cloud3(ctx, 1400, 100, 60);


Cloud1(ctx, 2000, 100, 50);
Cloud1(ctx, 2200, 200, 70);
Cloud1(ctx, 1500, 250, 50);

Cloud2(ctx, 1700, 100, 70);
Cloud2(ctx, 1800, 200, 70);
Cloud2(ctx, 1400, 50, 70);

Cloud3(ctx, 2000, 300, 60);
Cloud3(ctx, 1600, 100, 60);

Cloud1(ctx, 3000, 100, 50);
Cloud1(ctx, 3200, 200, 70);
Cloud1(ctx, 3500, 250, 50);

Cloud2(ctx, 3700, 100, 70);
Cloud2(ctx, 3800, 200, 70);
Cloud2(ctx, 3400, 50, 70);

Cloud3(ctx, 3000, 300, 60);
Cloud3(ctx, 3600, 100, 60);

Cloud1(ctx, 2100, 100, 50);
Cloud1(ctx, 2500, 200, 70);
Cloud1(ctx, 2300, 250, 50);

Cloud2(ctx, 2700, 100, 70);
Cloud2(ctx, 2800, 200, 70);
Cloud2(ctx, 2400, 50, 70);

Cloud3(ctx, 2000, 300, 60);
Cloud3(ctx, 2600, 100, 60);
}