// --- CURSOR ---
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".hover-trigger").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
});

// --- CANVAS ---
const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0,
  lastY = 0;
let strokeColor = "#1A1A1A";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 3;
  ctx.strokeStyle = strokeColor;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function draw(e) {
  if (!isDrawing) return;
  const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  const y = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
  cursor.classList.add("drawing");
});

window.addEventListener("mouseup", () => {
  isDrawing = false;
  cursor.classList.remove("drawing");
});

canvas.addEventListener("mousemove", draw);

// Touch
canvas.addEventListener(
  "touchstart",
  (e) => {
    isDrawing = true;
    const t = e.touches[0];
    [lastX, lastY] = [t.clientX, t.clientY];
  },
  { passive: false }
);
canvas.addEventListener(
  "touchmove",
  (e) => {
    if (isDrawing) e.preventDefault();
    draw(e);
  },
  { passive: false }
);
canvas.addEventListener("touchend", () => (isDrawing = false));

// Herramientas
function setColor(color) {
  strokeColor = color;
  ctx.strokeStyle = color;
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
