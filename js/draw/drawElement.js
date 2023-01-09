function drawLine(canvas, data) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = data.style.width;
  ctx.strokeStyle = data.style.color;
  ctx.moveTo(data.drawStart.x, data.drawStart.y);
  ctx.lineTo(data.drawEnd.x, data.drawEnd.y);
  ctx.stroke();
}

function drawCircle(canvas, data) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(data.x, data.y, data.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = data.color;
  ctx.fill();
}

function drawText(canvas, data, textValue) {
  const ctx = canvas.getContext("2d");
  ctx.font = data.text;
  ctx.fillStyle = data.color;
  ctx.textAlign = data.align;
  ctx.fillText(textValue, data.x, data.y);
}

export { drawLine, drawCircle, drawText };
