// --- DATA ---
const projects = [
  {
    id: 1,
    title: "LUZ DE TARDE",
    year: "2024",
    category: "Arte Tradicional",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    desc: "Un estudio contemplativo.",
    client: "Colección Privada",
    services: "Óleo",
  },
  {
    id: 2,
    title: "MEMORIA AZUL",
    year: "2023",
    category: "Ilustración Digital",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2845&auto=format&fit=crop",
    desc: "Exploración cromática.",
    client: "Personal",
    services: "Procreate",
  },
  {
    id: 3,
    title: "BOTÁNICA",
    year: "2023",
    category: "Diseño de Patrones",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2787&auto=format&fit=crop",
    desc: "Patrones tropicales.",
    client: "Moda S.A.",
    services: "Vector",
  },
  {
    id: 4,
    title: "RETRATO LÍQUIDO",
    year: "2022",
    category: "Experimental",
    img: "https://images.unsplash.com/photo-1507643179173-617d67456fd8?q=80&w=2669&auto=format&fit=crop",
    desc: "Fusión fotografía/digital.",
    client: "Revista Arte",
    services: "Edición",
  },
];

// --- SETUP ---
gsap.registerPlugin(ScrollTrigger);
let lenis;

function init() {
  // Smooth Scroll Optimizado
  lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothTouch: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Intro Animation
  const tl = gsap.timeline();
  tl.to(".big-title", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.2,
  }).to(
    ".hero-subtitle",
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=1"
  );

  renderArchive();
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  setupHoverEffects();
}

function renderArchive() {
  const container = document.getElementById("archive-gallery-track");
  container.innerHTML = projects
    .map(
      (p) => `
                <div class="gallery-item hover-trigger" onclick="openProject(${p.id})">
                    <div class="gallery-img-wrapper">
                        <img src="${p.img}" alt="${p.title}">
                    </div>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <h4 class="m-0" style="color: var(--text-main); font-size: 1.2rem;">${p.title}</h4>
                        <span class="badge rounded-pill text-bg-secondary border">${p.year}</span>
                    </div>
                </div>
            `
    )
    .join("");
}

// --- DRAWING LOGIC & PLAYGROUND ---
function toggleDrawingMode() {
  document.body.classList.toggle("drawing-enabled");
  const btn = document.getElementById("pencil-toggle-btn");
  btn.classList.toggle("active");

  // Si activamos dibujo, paramos el scroll
  if (document.body.classList.contains("drawing-enabled")) {
    lenis.stop();
    document.getElementById("cursor").classList.add("drawing");
    // Aseguramos que herramientas estén visibles
    document.getElementById("tools-panel").classList.remove("hidden");
  } else {
    lenis.start();
    document.getElementById("cursor").classList.remove("drawing");
  }
}

function activatePlayground() {
  lenis.scrollTo(0, { immediate: true });
  clearCanvas();

  // Forzar activación de herramientas y lápiz
  document.getElementById("tools-panel").classList.remove("hidden");
  if (!document.body.classList.contains("drawing-enabled")) toggleDrawingMode();

  document.getElementById("hero-text").classList.add("hero-content-hidden");
  document.getElementById("mascot").classList.add("hero-content-hidden");
  document.getElementById("exit-playground-btn").classList.add("visible");
  document.getElementById("pencil-toggle-btn").style.display = "none";
}

function exitPlayground() {
  if (document.body.classList.contains("drawing-enabled")) toggleDrawingMode();

  document.getElementById("hero-text").classList.remove("hero-content-hidden");
  document.getElementById("mascot").classList.remove("hero-content-hidden");
  document.getElementById("exit-playground-btn").classList.remove("visible");
  document.getElementById("pencil-toggle-btn").style.display = "block";
}

// --- DRAWING ENGINE ---
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
});
window.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousemove", draw);

// Touch events
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
window.addEventListener("touchend", () => (isDrawing = false));

function setColor(c) {
  strokeColor = c;
  ctx.strokeStyle = c;
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// --- UI UTILS ---
function toggleTools() {
  document.getElementById("tools-panel").classList.toggle("hidden");
}
function toggleContactForm(btn) {
  btn.classList.toggle("active");
  document.querySelector(".contact-form-container").classList.toggle("open");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function openProject(id) {
  const p = projects.find((item) => item.id === id);
  if (!p) return;
  document.getElementById("detail-title").innerText = p.title;
  document.getElementById("detail-img").src = p.img;
  // ... resto de datos
  document.getElementById("project-overlay").classList.add("active");
  lenis.stop();
  document.body.style.overflow = "hidden";
}
function closeProject() {
  document.getElementById("project-overlay").classList.remove("active");
  lenis.start();
  document.body.style.overflow = "";
}

// --- CURSOR ---
const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
function setupHoverEffects() {
  document
    .querySelectorAll(".hover-trigger, a, button, .gallery-item")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hovered")
      );
    });
}
/* --- TRADUCCIONES Y LÓGICA DE IDIOMA --- */
const translations = {
  es: {
    "hero-title": "HOLA,<br>SOY TEA",
    "hero-subtitle": "Portfolio & Visual Playground",
    "about-title": "CREATIVIDAD<br>SIN LÍMITES",
    "about-text":
      "Hola, soy Tea. Diseñadora visual e ilustradora. Este sitio es un lienzo vivo; no solo para mostrar mi trabajo, sino para que interactúes con él.",
    "nav-playground": "PLAYGROUND",
    "nav-about": "ABOUT",
    "nav-archive": "ARCHIVO",
    "nav-contact": "CONTACTO",
    "footer-title": "HABLEMOS",
    "btn-project": "INICIAR PROYECTO",
  },
  en: {
    "hero-title": "HELLO,<br>I'M TEA",
    "hero-subtitle": "Portfolio & Visual Playground",
    "about-title": "LIMITLESS<br>CREATIVITY",
    "about-text":
      "Hi, I'm Tea. Visual designer and illustrator. This site is a living canvas; not just to show my work, but for you to interact with it.",
    "nav-playground": "PLAYGROUND",
    "nav-about": "ABOUT",
    "nav-archive": "ARCHIVE",
    "nav-contact": "CONTACT",
    "footer-title": "LET'S TALK",
    "btn-project": "START PROJECT",
  },
};

let currentLang = "es";

function toggleLanguage() {
  // 1. Cambiar idioma
  currentLang = currentLang === "es" ? "en" : "es";

  // 2. Cambiar texto del botón
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.innerText = currentLang === "es" ? "EN / ES" : "ES / EN";

  // 3. Buscar y traducir textos
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}
