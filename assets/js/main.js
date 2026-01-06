// --- DATA ---
const projects = [
  {
    id: 1,
    title: {
      es: "LUZ DE TARDE",
      en: "AFTERNOON LIGHT",
      nl: "AVONDLICHT",
    },
    year: "2024",
    category: {
      es: "Arte Tradicional",
      en: "Traditional Art",
      nl: "Traditionele Kunst",
    },
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    desc: "Un estudio contemplativo.",
    client: "Colección Privada",
    services: "Óleo",
  },
  {
    id: 2,
    title: { es: "MEMORIA AZUL", en: "BLUE MEMORY", nl: "BLAUWE HERINNERING" },
    year: "2023",
    category: {
      es: "Ilustración Digital",
      en: "Digital Illustration",
      nl: "Digitale Illustratie",
    },
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2845&auto=format&fit=crop",
    desc: "Exploración cromática.",
    client: "Personal",
    services: "Procreate",
  },
  {
    id: 3,
    title: { es: "BOTÁNICA", en: "BOTANICA", nl: "BOTANICA" },
    year: "2023",
    category: {
      es: "Diseño de Patrones",
      en: "Pattern Design",
      nl: "Patroonontwerp",
    },
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2787&auto=format&fit=crop",
    desc: "Patrones tropicales.",
    client: "Moda S.A.",
    services: "Vector",
  },
  {
    id: 4,
    title: {
      es: "RETRATO LÍQUIDO",
      en: "LIQUID PORTRAIT",
      nl: "VLOEIBAAR PORTRET",
    },
    year: "2022",
    category: { es: "Experimental", en: "Experimental", nl: "Experimenteel" },
    img: "https://images.unsplash.com/photo-1507643179173-617d67456fd8?q=80&w=2669&auto=format&fit=crop",
    desc: "Fusión fotografía/digital.",
    client: "Revista Arte",
    services: "Edición",
  },
  {
    id: 5,
    title: { es: "SUEÑOS DE PAPEL", en: "PAPER DREAMS", nl: "PAPIERDROMEN" },
    year: "2025",
    category: { es: "Editorial", en: "Editorial", nl: "Redactioneel" },
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2564&auto=format&fit=crop",
    desc: "Colección de ilustraciones editoriales.",
    client: "Editorial XYZ",
    services: "Ilustración, Layout",
  },
];

// --- SETUP ---
gsap.registerPlugin(ScrollTrigger);
let lenis;
let isPlaygroundActive = false;

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
  // If user clicks a navbar link while inside playground (but not the PLAYGROUND button), exit playground
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const onclickAttr = link.getAttribute("onclick") || "";
      if (isPlaygroundActive && !onclickAttr.includes("activatePlayground")) {
        exitPlayground();
      }
    });
  });
}

function renderArchive() {
  const container = document.getElementById("archive-gallery-track");
  const lang = window.currentLang || "es";
  container.innerHTML = projects
    .map((p) => {
      const title =
        typeof p.title === "object" ? p.title[lang] || p.title.es : p.title;
      return `
        <div class="gallery-item hover-trigger" onclick="openProject(${p.id})">
          <div class="gallery-img-wrapper">
            <img src="${p.img}" alt="${title}">
          </div>
          <div class="mt-3 d-flex justify-content-between align-items-center">
            <h4 class="m-0" style="color: var(--text-main); font-size: 1.2rem;">${title}</h4>
            <span class="badge rounded-pill text-bg-secondary border">${p.year}</span>
          </div>
        </div>
      `;
    })
    .join("");

  // Re-attach gallery scroll interactions after rendering
  if (typeof setupGalleryScroll === "function") setupGalleryScroll();
}

// Enable pointer/touch drag to scroll and wheel-to-scroll for the gallery
function setupGalleryScroll() {
  const outer = document.querySelector(".swipe-gallery-container");
  if (!outer) return;

  // prevent attaching multiple handlers
  if (outer.__galleryScrollInit) return;
  outer.__galleryScrollInit = true;

  let isDown = false;
  let startX;
  let scrollLeft;

  outer.addEventListener("pointerdown", (e) => {
    isDown = true;
    outer.setPointerCapture(e.pointerId);
    startX = e.clientX;
    scrollLeft = outer.scrollLeft;
    outer.classList.add("dragging");
  });

  outer.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const x = e.clientX;
    const walk = startX - x;
    outer.scrollLeft = scrollLeft + walk;
  });

  outer.addEventListener("pointerup", (e) => {
    isDown = false;
    outer.releasePointerCapture && outer.releasePointerCapture(e.pointerId);
    outer.classList.remove("dragging");
  });

  outer.addEventListener("pointercancel", () => {
    isDown = false;
    outer.classList.remove("dragging");
  });

  // Wheel: translate vertical wheel to horizontal scroll for convenience
  outer.addEventListener(
    "wheel",
    (e) => {
      // allow normal scroll when shift is held or if horizontal delta is present
      if (Math.abs(e.deltaX) > 0 || e.shiftKey) return;
      e.preventDefault();
      outer.scrollLeft += e.deltaY;
    },
    { passive: false }
  );
}

// --- DRAWING LOGIC & PLAYGROUND ---
function toggleDrawingMode() {
  document.body.classList.toggle("drawing-enabled");
  const btn = document.getElementById("pencil-toggle-btn");
  if (btn) btn.classList.toggle("active");

  // Si activamos dibujo, paramos el scroll
  if (document.body.classList.contains("drawing-enabled")) {
    lenis.stop();
    document.getElementById("cursor").classList.add("drawing");
    // Aseguramos que herramientas estén visibles SOLO si estamos en playground
    if (isPlaygroundActive) {
      document.getElementById("tools-panel").classList.remove("hidden");
    }
  } else {
    lenis.start();
    document.getElementById("cursor").classList.remove("drawing");
  }
}

function activatePlayground() {
  lenis.scrollTo(0, { immediate: true });
  clearCanvas();

  // Forzar activación de herramientas y lápiz
  isPlaygroundActive = true;
  document.getElementById("tools-panel").classList.remove("hidden");

  // Enable pencil button inside playground and make sure it's visible
  const pencilBtn = document.getElementById("pencil-toggle-btn");
  if (pencilBtn) {
    pencilBtn.disabled = false;
    pencilBtn.setAttribute("aria-disabled", "false");
    pencilBtn.style.display = "block";
  }

  if (!document.body.classList.contains("drawing-enabled")) toggleDrawingMode();

  document.getElementById("hero-text").classList.add("hero-content-hidden");
  document.getElementById("mascot").classList.add("hero-content-hidden");
  document.getElementById("exit-playground-btn").classList.add("visible");
  document.getElementById("pencil-toggle-btn").style.display = "none";
}

function exitPlayground() {
  if (document.body.classList.contains("drawing-enabled")) toggleDrawingMode();
  isPlaygroundActive = false;

  // ocultar panel de herramientas al salir del playground
  document.getElementById("tools-panel").classList.add("hidden");

  // Disable pencil button outside playground but keep it visible
  const pencilBtnExit = document.getElementById("pencil-toggle-btn");
  if (pencilBtnExit) {
    pencilBtnExit.disabled = true;
    pencilBtnExit.setAttribute("aria-disabled", "true");
    pencilBtnExit.classList.remove("active");
  }

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
  // Only allow toggling tools when inside playground
  if (!isPlaygroundActive) return;
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
  // store currently open project id
  window.currentOpenProjectId = id;

  const lang = window.currentLang || "es";
  const title =
    typeof p.title === "object" ? p.title[lang] || p.title.es : p.title;
  const category =
    typeof p.category === "object"
      ? p.category[lang] || p.category.es
      : p.category;
  document.getElementById("detail-title").innerText = title;
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
  window.currentOpenProjectId = null;
}

// Update the currently open project's textual content (called when language changes)
window.updateOpenProjectContent = function () {
  const id = window.currentOpenProjectId;
  if (!id) return;
  const p = projects.find((item) => item.id === id);
  if (!p) return;
  const lang = window.currentLang || "es";
  const title =
    typeof p.title === "object" ? p.title[lang] || p.title.es : p.title;
  const category =
    typeof p.category === "object"
      ? p.category[lang] || p.category.es
      : p.category;
  document.getElementById("detail-title").innerText = title;
  const catEl = document.getElementById("detail-category");
  if (catEl) catEl.innerText = category;
};

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
// --- LÓGICA DE MÚSICA ---
let isMusicPlaying = false;
const audioPlayer = document.getElementById("audio-player");

// Volumen bajo para no asustar
if (audioPlayer) audioPlayer.volume = 0.4;

function toggleMusic() {
  const cdPlayer = document.querySelector(".cd-player");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");

  if (!isMusicPlaying) {
    // Reproducir
    audioPlayer
      .play()
      .then(() => {
        isMusicPlaying = true;
        cdPlayer.classList.add("playing");
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      })
      .catch((error) => {
        console.log("Autoplay bloqueado. Haz clic de nuevo.");
      });
  } else {
    // Pausar
    audioPlayer.pause();
    isMusicPlaying = false;
    cdPlayer.classList.remove("playing");
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
