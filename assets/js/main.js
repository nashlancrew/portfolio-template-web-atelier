// --- DATA ---
const projects = [
  {
    id: 1,
    title: {
      es: "Animacion de Handicap International para el festival Sfinks 2024",
      en: "Handicap's International animation for Sfinks Festival 2024",
      nl: "Handicap International animatie voor Sfinks Festival 2024",
    },
    year: "2025",
    category: {
      es: "Prgramacion, Arte Digital, Realidad Aumentada",
      en: "Programming, Digital Art, Augmented Reality",
      nl: "Programmeren, Digitale Kunst, Augmented Reality",
    },
    img: "assets/images/handicap_logo.jpg",
    embed: "https://handicap-moreido.github.io/MoreIDo_AR_project/",
    embedCaption: {
      es: "Demo de realidad aumentada",
      en: "Augmented reality demo",
      nl: "Augmented reality-demo",
    },
    extraMedia: [
      {
        type: "image",
        src: "assets/images/PHOTO-2025-07-26-18-55-29.jpg",
        caption: {
          es: "Demostracion en vivo en Sfinks'25",
          en: "Live demo at Sfinks'25",
          nl: "Live demo op Sfinks'25",
        },
      },
    ],
    desc: {
      es: `Durante mi Erasmus, trabajé con la ONG Handicap International para crear una experiencia inmersiva para el festival de verano belga Sfinks. Junto con mi equipo, desarrollé una experiencia de realidad aumentada (en inglés, francés y neerlandés) que cuenta las historias y la vida cotidiana de personas amputadas y refugiadas de guerra al alcance de tus dedos.

Trabajé en experiencia de usuario y desarrollo, elaborando las preguntas para los grupos focales, iterando la interfaz según los comentarios y programando junto a mis compañeros.

El proyecto se presentó en julio de 2025 en el festival Sfinks.`,
      en: `During my Erasmus, I worked with the NGO Handicap International to create an immersive experience for the Belgian summer festival Sfinks. Along with my teammates, I built an AR experience (in English, French, and Dutch) that tells the stories and daily lives of amputees and war refugees right at your fingertips.

I worked on user experience and development, writing the focus-group questions, iterating on the UI based on feedback, and coding alongside my colleagues.

The project was presented in July 2025 at the Sfinks Festival.`,
      nl: `Tijdens mijn Erasmus werkte ik met de NGO Handicap International om een meeslepende ervaring te creëren voor het Belgische zomerfestival Sfinks. Samen met mijn team ontwikkelde ik een AR-ervaring (in het Engels, Frans en Nederlands) die de verhalen en het dagelijks leven van geamputeerden en oorlogsvluchtelingen tot binnen handbereik brengt.

Ik werkte aan user experience en ontwikkeling: ik stelde de vragen voor de focusgroepen op, verfijnde de UI op basis van feedback en programmeerde samen met mijn collega's.

Het project werd in juli 2025 gepresenteerd op het Sfinks Festival.`,
    },
    client: {
      es: "Handicap International Belgica",
      en: "Handicap International Belgium",
      nl: "Handicap International België",
    },
    servicesLabel: {
      es: "Programas usados",
      en: "Programs used",
      nl: "Gebruikte programma's",
    },
    services: {
      es: "Photoshop, illustrator, After Effects, Spark AR, HTML/CSS/JS",
      en: "Photoshop, Illustrator, After Effects, Spark AR, HTML/CSS/JS",
      nl: "Photoshop, Illustrator, After Effects, Spark AR, HTML/CSS/JS",
    },
  },
  {
    id: 2,
    title: { es: "A-FIN A-FIN", en: "A-FIN A-FIN", nl: "A-FIN A-FIN" },
    year: "2024",
    category: {
      es: "Diseño de Interfaz, Experiencia de Usuario",
      en: "UI Design, User Experience",
      nl: "UI Ontwerp, Gebruikerservaring",
    },
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2845&auto=format&fit=crop",
    desc: {
      es: "A-FIN A-FIN se define como un Cupido para los amantes de la música. Con un enfoque similar a Tinder, Bumble, y otras aplicaciones conocidas; A-FIN A-FIN cree en la afinidad romántica basada en el gusto musical. ¿Deslizar fotos? No, deslizar listas de reproducción. La aplicación/prototipo nos ofrece una experiencia táctil de varias funciones de la aplicación, tales como: un menú de sugerencias de planes, listas de reproducción compartidas con tu pareja, la oportunidad de hacer amigos en lugar de conexiones románticas en la aplicación, y más... Aquí encontrarás: fotos del prototipo de alta fidelidad y un enlace al prototipo/bocetos funcionales de baja fidelidad con notas incluidas.",
      en: "A-Fin A-Fin defines itself as a Cupid for music lovers. With an approach similar to Tinder, Bumble, another well known apps; A-Fin A-Fin believes in the romantic affinity based on their music taste. Swiping through pictures? Naah, swiping through playlists. The app/prototype offers us a touch and feel of various app’s features such as: a plan suggestion menu, shared playlists with your match, the chance to make friends instead of romantic connections in the app and so on... Here you’ll find: pictures of the high fidelity prototype and a link to the fully functional low prototype/wireframes with notes included",
      nl: "A-Fin A-Fin definieert zichzelf als een Cupid voor muziekliefhebbers. Met een aanpak die lijkt op Tinder, Bumble, en andere bekende apps; gelooft A-Fin A-Fin in romantische affiniteit op basis van hun muzieksmaak. Swipen door foto's? Nee, swipen door afspeellijsten. De app/prototype biedt ons een gevoel van verschillende functies van de app, zoals: een planningssuggestiemenu, gedeelde afspeellijsten met je match, de kans om vrienden te maken in plaats van romantische connecties in de app, enzovoort... Hier vind je: foto's van het high-fidelity prototype en een link naar het volledig functionele low-prototype/wireframes met notities inbegrepen.",
    },
    client: "Personal",
    servicesLabel: {
      es: "Programas usados",
      en: "Programs used",
      nl: "Gebruikte programma's",
    },
    services: "Figma",
  },
  {
    id: 3,
    title: {
      es: "20's Archive: Guia para sobrevivir a los 20",
      en: "20's Archive: Guide to Survive Your 20s",
      nl: "20's Archief: Gids om je twintig te overleven",
    },
    year: "2023",
    category: {
      es: "Diseño Editorial",
      en: "Editorial Design",
      nl: "Redactioneel Ontwerp",
    },
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2787&auto=format&fit=crop",
    desc: {
      es: "20's Archive es un proyecto editorial dirigido como un fanzine basado en tipografía con poco o ningún gráfico. 20's Archive nace de la necesidad de saber qué hay en los primeros años de la adultez antes de convertirte tú mismo en uno. Lleno con los consejos y trucos de la comunidad, esta pequeña nube de citas está destinada a ayudar a navegar a nuestros lectores por buena música y pensamientos igualmente y reconfortantes de la comunidad que ya no tiene veinte años. Las imágenes usadas en el portfolio, fueron dadas por las personas que contribuyeron al proyecto.",
      en: "20’s Archive is an editorial project targeted as a typography based fanzine with little-to-no graphics. 20’s Archive is born from the necessity to know what’s in the first years of adulthood before you become one yourself.Filled with the comunity’s tips and tricks, this little quote cloud is meant to help navigate our readers through good music and both equally and comforting thoughts from the community who’s not 20 anymore. The pictures used in the portfolio, were given from the people who contributed to the project.",
      nl: "20's Archief is een redactioneel project gericht op een typografisch gebaseerd fanzine met weinig tot geen grafische elementen. 20's Archief is geboren uit de noodzaak om te weten wat er in de eerste jaren van de volwassenheid is voordat je zelf er één wordt. Vulde met tips en trucs van de community, is deze kleine quote cloud bedoeld om onze lezers te helpen navigeren door goede muziek en zowel gelijke als troostende gedachten van de community die niet meer twintig zijn. De afbeeldingen gebruikt in het portfolio, werden geleverd door de mensen die bijgedragen hebben aan het project.",
    },
    client: "Moda S.A.",
    servicesLabel: {
      es: "Programas usados",
      en: "Programs used",
      nl: "Gebruikte programma's",
    },
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
    servicesLabel: {
      es: "Servicios",
      en: "Services",
      nl: "Diensten",
    },
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
    servicesLabel: {
      es: "Servicios",
      en: "Services",
      nl: "Diensten",
    },
    services: "Ilustración, Layout",
  },
];

// --- SETUP ---
gsap.registerPlugin(ScrollTrigger);
let lenis;
let isPlaygroundActive = false;
let hasInitialized = false;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function init() {
  // Smooth Scroll Optimizado
  if (prefersReducedMotion) {
    lenis = {
      raf: () => {},
      stop: () => {},
      start: () => {},
      scrollTo: (value) => {
        const y = typeof value === "number" ? value : 0;
        window.scrollTo(0, y);
      },
    };
  } else {
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
  }

  // Intro Animation
  if (prefersReducedMotion) {
    const titleEl = document.querySelector(".big-title");
    if (titleEl) {
      titleEl.style.opacity = "1";
      titleEl.style.transform = "none";
    }
    const subtitleEl = document.querySelector(".hero-subtitle");
    if (subtitleEl) {
      subtitleEl.style.opacity = "1";
      subtitleEl.style.transform = "none";
    }
  } else {
    const tl = gsap.timeline();
    tl.to(".big-title", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.2,
    })
      .to(
        ".hero-subtitle",
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .eventCallback("onComplete", positionStickerOnTeaA);
  }
  // --- AQUÍ AÑADES LA LLAMADA NUEVA ---
  if (!prefersReducedMotion) initStickerAnimation();
  // position sticker relative to the TEA 'A' when available
  positionStickerOnTeaA();
  if (!prefersReducedMotion) scheduleStickerRelayout();
  // ------------------------------------
  renderArchive();
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  setupHoverEffects();
  setupContactFormFeedback();
  setupKeyboardActivation();
  setupOverlayAccessibility();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(positionStickerOnTeaA);
  }
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

window.addEventListener("load", () => {
  if (hasInitialized) return;
  hasInitialized = true;
  init();
});

function scheduleStickerRelayout() {
  if (prefersReducedMotion) {
    positionStickerOnTeaA();
    return;
  }
  let frames = 0;
  const tick = () => {
    positionStickerOnTeaA();
    frames += 1;
    if (frames < 24) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
window.scheduleStickerRelayout = scheduleStickerRelayout;

// Position the sticker container so the base image overlays the 'A' in TEA
function positionStickerOnTeaA() {
  const container = document.querySelector(".sticker-container");
  const anchor = document.getElementById("tea-A");
  if (!container || !anchor) return;

  const baseEl = container.querySelector(".base");
  const baseRect = (baseEl || container).getBoundingClientRect();
  if (!baseRect.width || !baseRect.height) {
    if (baseEl) {
      baseEl.addEventListener("load", positionStickerOnTeaA, { once: true });
    }
    return;
  }

  const anchorRect = anchor.getBoundingClientRect();
  const styles = getComputedStyle(container);
  const offsetX =
    parseFloat(styles.getPropertyValue("--sticker-offset-x")) || 0;
  const offsetY =
    parseFloat(styles.getPropertyValue("--sticker-offset-y")) || 0;
  const left = Math.round(anchorRect.right + offsetX);
  const top = Math.round(anchorRect.bottom + offsetY);
  const maxLeft = window.innerWidth - baseRect.width - 12;
  const maxTop = window.innerHeight - baseRect.height - 12;
  const safeLeft = Math.min(Math.max(left, 8), Math.max(8, maxLeft));
  const safeTop = Math.min(Math.max(top, 8), Math.max(8, maxTop));

  container.style.setProperty("position", "fixed", "important");
  container.style.setProperty("left", safeLeft + "px", "important");
  container.style.setProperty("top", safeTop + "px", "important");
  container.style.setProperty("right", "auto", "important");
  container.style.setProperty("bottom", "auto", "important");

  if (baseEl) baseEl.style.setProperty("transform", "none", "important");
}
window.positionStickerOnTeaA = positionStickerOnTeaA;

// Reposition on resize/scroll to keep alignment
window.addEventListener("resize", () => {
  // slight debounce
  clearTimeout(window.__stickerResizeTimeout);
  window.__stickerResizeTimeout = setTimeout(positionStickerOnTeaA, 80);
});
window.addEventListener(
  "scroll",
  () => {
    // reposition on scroll
    positionStickerOnTeaA();
  },
  { passive: true }
);

function renderArchive() {
  const container = document.getElementById("archive-gallery-track");
  const lang = window.currentLang || "es";
  container.innerHTML = projects
    .map((p) => {
      const title =
        typeof p.title === "object" ? p.title[lang] || p.title.es : p.title;
      return `
        <div
          class="gallery-item hover-trigger"
          data-project-id="${p.id}"
          role="button"
          tabindex="0"
          aria-haspopup="dialog"
          aria-label="${title}"
        >
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
  if (!container.__galleryKeyboardInit) {
    container.__galleryKeyboardInit = true;
    container.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const item = event.target.closest(".gallery-item");
      if (!item) return;
      event.preventDefault();
      event.stopPropagation();
      const id = Number(item.dataset.projectId);
      if (!Number.isNaN(id)) openProject(id);
    });
  }
}

// Enable pointer/touch drag to scroll and wheel-to-scroll for the gallery
function setupGalleryScroll() {
  const outer = document.querySelector(".swipe-gallery-container");
  if (!outer) return;

  // prevent attaching multiple handlers
  if (outer.__galleryScrollInit) return;
  outer.__galleryScrollInit = true;

  let isDown = false;
  let isDragging = false;
  let lastPointerType = null;
  let startX;
  let startY;
  let scrollLeft;
  const dragThreshold = 6;

  outer.addEventListener("pointerdown", (e) => {
    lastPointerType = e.pointerType || "mouse";
    if (e.pointerType === "touch") return;
    isDown = true;
    isDragging = false;
    outer.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startY = e.clientY;
    scrollLeft = outer.scrollLeft;
    outer.classList.add("dragging");
  });

  outer.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const x = e.clientX;
    const y = e.clientY;
    const walk = startX - x;
    const travelY = startY - y;
    if (
      !isDragging &&
      Math.abs(walk) > dragThreshold &&
      Math.abs(walk) > Math.abs(travelY)
    ) {
      isDragging = true;
    }
    if (isDragging) outer.scrollLeft = scrollLeft + walk;
  });

  outer.addEventListener("pointerup", (e) => {
    if (e.pointerType === "touch") return;
    isDown = false;
    outer.releasePointerCapture && outer.releasePointerCapture(e.pointerId);
    outer.classList.remove("dragging");
    if (!isDragging) {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const item =
        target && target.closest ? target.closest(".gallery-item") : null;
      if (item) {
        const id = Number(item.dataset.projectId);
        if (!Number.isNaN(id)) openProject(id);
      }
    }
    isDragging = false;
  });

  outer.addEventListener("click", (e) => {
    if (lastPointerType && lastPointerType !== "touch") return;
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    const id = Number(item.dataset.projectId);
    if (!Number.isNaN(id)) openProject(id);
  });

  outer.addEventListener("pointercancel", () => {
    isDown = false;
    isDragging = false;
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
  const sticker = document.querySelector(".sticker-container");
  if (sticker) sticker.classList.add("hero-content-hidden");
  document.getElementById("exit-playground-btn").classList.add("visible");
  document.getElementById("pencil-toggle-btn").style.display = "none";
}

function exitPlayground() {
  if (document.body.classList.contains("drawing-enabled")) toggleDrawingMode();
  isPlaygroundActive = false;
  clearCanvas();

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
  const sticker = document.querySelector(".sticker-container");
  if (sticker) sticker.classList.remove("hero-content-hidden");
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
  const container = document.querySelector(".contact-form-container");
  if (!container) return;
  const isOpen = container.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
  container.setAttribute("aria-hidden", isOpen ? "false" : "true");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function setupKeyboardActivation() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target;
    if (!target) return;
    if (target.matches("[role='button']")) {
      event.preventDefault();
      target.click();
    }
  });
}
function setupOverlayAccessibility() {
  if (window.__overlayKeyInit) return;
  window.__overlayKeyInit = true;
  document.addEventListener("keydown", (event) => {
    const overlay = document.getElementById("project-overlay");
    if (!overlay || !overlay.classList.contains("active")) return;
    if (event.key === "Escape") {
      closeProject();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      overlay.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("aria-hidden"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
function setupContactFormFeedback() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("form-toast");
  const closeBtn = document.getElementById("form-toast-close");
  if (!form || !toast) return;

  const mailLabels = {
    es: { name: "Nombre", email: "Email", message: "Mensaje" },
    en: { name: "Name", email: "Email", message: "Message" },
    nl: { name: "Naam", email: "E-mail", message: "Bericht" },
  };

  const buildMailBody = () => {
    const lang = window.currentLang || "es";
    const labels = mailLabels[lang] || mailLabels.es;
    const name = form.elements.name ? form.elements.name.value.trim() : "";
    const email = form.elements.email ? form.elements.email.value.trim() : "";
    const message = form.elements.message
      ? form.elements.message.value.trim()
      : "";
    return `${labels.name}: ${name}\n${labels.email}: ${email}\n${labels.message}:\n${message}`;
  };

  const buildMailtoHref = () => {
    const recipient = form.dataset.mailto || "nachadafonte@gmail.com";
    const subject = form.dataset.mailSubject || "";
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    const body = buildMailBody();
    if (body) params.set("body", body);
    const queryString = params.toString();
    return queryString
      ? `mailto:${recipient}?${queryString}`
      : `mailto:${recipient}`;
  };

  const hideToast = () => {
    toast.classList.remove("show");
    toast.hidden = true;
  };
  const showToast = () => {
    toast.hidden = false;
    toast.classList.add("show");
    if (toast.__hideTimeout) clearTimeout(toast.__hideTimeout);
    toast.__hideTimeout = setTimeout(hideToast, 4500);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const mailtoHref = buildMailtoHref();
    window.location.href = mailtoHref;
    showToast();
  });
  if (closeBtn) closeBtn.addEventListener("click", hideToast);
}
let cameraStream = null;
let cameraRequestInFlight = false;
async function requestCameraAccess() {
  if (cameraStream || cameraRequestInFlight) return;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.warn("Camera access not supported in this browser.");
    return;
  }
  cameraRequestInFlight = true;
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
  } catch (error) {
    console.warn("Camera access denied or failed.", error);
  } finally {
    cameraRequestInFlight = false;
  }
}
function stopCameraAccess() {
  if (!cameraStream) return;
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = null;
}
function getLocalizedValue(value, lang) {
  if (value == null) return "";
  if (typeof value === "object") return value[lang] || value.es || "";
  return value;
}
function setProjectMedia(p, title) {
  const imgEl = document.getElementById("detail-img");
  const embedEl = document.getElementById("detail-embed");
  if (!imgEl || !embedEl) return;
  if (p.embed) {
    embedEl.src = p.embed;
    embedEl.hidden = false;
    imgEl.hidden = true;
  } else {
    embedEl.hidden = true;
    embedEl.src = "";
    imgEl.hidden = false;
    if (p.img) imgEl.src = p.img;
  }
  if (title) {
    imgEl.alt = title;
    embedEl.title = title;
  }
}
function setEmbedCaption(p, lang) {
  const captionEl = document.getElementById("detail-embed-caption");
  if (!captionEl) return;
  const caption = getLocalizedValue(p.embedCaption, lang);
  if (p.embed && caption) {
    captionEl.textContent = caption;
    captionEl.hidden = false;
  } else {
    captionEl.textContent = "";
    captionEl.hidden = true;
  }
}
function updateProjectMediaLayout(p) {
  const mediaWrap = document.getElementById("project-media");
  if (!mediaWrap) return;
  const hasEmbed = Boolean(p.embed);
  const hasExtra = Array.isArray(p.extraMedia) && p.extraMedia.length > 0;
  mediaWrap.classList.toggle("is-split", hasEmbed && hasExtra);
}
function renderExtraMedia(p, title, lang) {
  const container = document.getElementById("detail-extra-media");
  if (!container) return;
  const items = Array.isArray(p.extraMedia) ? p.extraMedia : [];
  if (!items.length) {
    container.innerHTML = "";
    container.hidden = true;
    updateProjectMediaLayout(p);
    return;
  }
  const markup = items
    .map((item) => {
      if (!item || item.type !== "image" || !item.src) return "";
      const caption = getLocalizedValue(item.caption, lang);
      const alt = caption || title || "Project image";
      return `
        <figure class="project-extra-item">
          <img src="${item.src}" alt="${alt}" loading="lazy" />
          ${caption ? `<figcaption>${caption}</figcaption>` : ""}
        </figure>
      `;
    })
    .join("");
  container.innerHTML = markup;
  container.hidden = false;
  updateProjectMediaLayout(p);
}
function setProjectDetails(p) {
  const lang = window.currentLang || "es";
  const title =
    typeof p.title === "object" ? p.title[lang] || p.title.es : p.title;
  const category =
    typeof p.category === "object"
      ? p.category[lang] || p.category.es
      : p.category;
  const desc = getLocalizedValue(p.desc, lang);
  const client = getLocalizedValue(p.client, lang);
  const services = getLocalizedValue(p.services, lang);
  const servicesLabel = getLocalizedValue(p.servicesLabel, lang);

  const titleEl = document.getElementById("detail-title");
  if (titleEl) titleEl.innerText = title || "";
  const catEl = document.getElementById("detail-category");
  if (catEl) catEl.innerText = category || "";
  const descEl = document.getElementById("detail-desc");
  if (descEl) descEl.innerText = desc || "";
  const clientEl = document.getElementById("detail-client");
  if (clientEl) clientEl.innerText = client || "";
  const servicesLabelEl = document.getElementById("detail-services-label");
  if (servicesLabelEl && servicesLabel) {
    servicesLabelEl.innerText = servicesLabel;
  }
  const servicesEl = document.getElementById("detail-services");
  if (servicesEl) servicesEl.innerText = services || "";
  const yearEl = document.getElementById("detail-year");
  if (yearEl) yearEl.innerText = p.year || "";

  setProjectMedia(p, title);
  setEmbedCaption(p, lang);
  renderExtraMedia(p, title, lang);
  updateProjectMediaLayout(p);
}
function openProject(id) {
  const p = projects.find((item) => item.id === id);
  if (!p) return;
  // store currently open project id
  window.currentOpenProjectId = id;
  window.lastFocusedElement = document.activeElement;

  setProjectDetails(p);
  // ... resto de datos
  document.getElementById("project-overlay").classList.add("active");
  const overlay = document.getElementById("project-overlay");
  if (overlay) {
    overlay.setAttribute("aria-hidden", "false");
  }
  const closeBtn = overlay ? overlay.querySelector(".close-btn") : null;
  if (closeBtn) closeBtn.focus();
  lenis.stop();
  document.body.style.overflow = "hidden";
  if (id === 1) requestCameraAccess();
}
function closeProject() {
  const overlay = document.getElementById("project-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  }
  lenis.start();
  document.body.style.overflow = "";
  if (window.currentOpenProjectId === 1) stopCameraAccess();
  const embedEl = document.getElementById("detail-embed");
  if (embedEl) {
    embedEl.src = "";
    embedEl.hidden = true;
  }
  const captionEl = document.getElementById("detail-embed-caption");
  if (captionEl) {
    captionEl.textContent = "";
    captionEl.hidden = true;
  }
  const imgEl = document.getElementById("detail-img");
  if (imgEl) imgEl.hidden = false;
  window.currentOpenProjectId = null;
  if (window.lastFocusedElement && window.lastFocusedElement.focus) {
    window.lastFocusedElement.focus();
  }
}

// Update the currently open project's textual content (called when language changes)
window.updateOpenProjectContent = function () {
  const id = window.currentOpenProjectId;
  if (!id) return;
  const p = projects.find((item) => item.id === id);
  if (!p) return;
  setProjectDetails(p);
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
const playlist = [
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Pommelien%20Thijs%20-%20Erop%20Of%20Eronder%20(Official%20Lyric%20video).mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/MICO%20%E2%80%93%20glhf%E1%90%B83%20%5Bofficial%20visual%5D.mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/MICO%20%E2%80%93%20Senses%20%5Bofficial%20video%5D.mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Marco%20Mares%20-%20amable%20(trending%20topic%20en%20tu%20cora).mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/MICO%20%E2%80%93%20HOMESICK%20%5Bofficial%20video%5D.mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Koning%20minimaliseren.mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Marco%20Mares%20-%20Sin%20Puntos%20Ni%20Mayu%CC%81sculas%20(Audio).mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Benson%20Boone%20-%20Be%20Someone%20(Official%20Lyric%20Video).mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Benson%20Boone%20-%20Sorry%20I'm%20Here%20For%20Someone%20Else%20(Official%20Lyric%20Video).mp3",
];
let currentTrackIndex = 0;

// Volumen bajo para no asustar
if (audioPlayer) audioPlayer.volume = 0.4;

function getTrackTitleFromUrl(url) {
  if (!url) return "";
  try {
    const decoded = decodeURIComponent(url);
    const parts = decoded.split("/");
    const file = parts[parts.length - 1] || "";
    return file.replace(/\.mp3$/i, "").trim();
  } catch (error) {
    return url;
  }
}
function updateTrackTitle(index) {
  const titleEl = document.getElementById("track-title");
  if (!titleEl || !playlist.length) return;
  const title = getTrackTitleFromUrl(playlist[index]);
  titleEl.textContent = title || "Audio";
}
function updateTracklistActive() {
  const listEl = document.getElementById("tracklist");
  if (!listEl) return;
  const items = Array.from(listEl.querySelectorAll(".tracklist-item"));
  items.forEach((item, index) => {
    const isActive = index === currentTrackIndex;
    item.classList.toggle("is-active", isActive);
    const btn = item.querySelector("button");
    if (btn) btn.setAttribute("aria-current", isActive ? "true" : "false");
  });
}
function renderTracklist() {
  const listEl = document.getElementById("tracklist");
  if (!listEl || !playlist.length) return;
  listEl.innerHTML = playlist
    .map((url, index) => {
      const title = getTrackTitleFromUrl(url) || `Track ${index + 1}`;
      const activeClass = index === currentTrackIndex ? "is-active" : "";
      const ariaCurrent =
        index === currentTrackIndex ? ' aria-current="true"' : "";
      return `
        <li class="tracklist-item ${activeClass}">
          <button type="button" data-track-index="${index}"${ariaCurrent}>${title}</button>
        </li>
      `;
    })
    .join("");
  listEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.trackIndex);
      if (Number.isNaN(idx)) return;
      setTrack(idx);
      playCurrentTrack()
        .then(() => {
          isMusicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {
          isMusicPlaying = false;
          updateMusicUI(false);
        });
    });
  });
}
function setTrack(index) {
  if (!audioPlayer || !playlist.length) return;
  currentTrackIndex = (index + playlist.length) % playlist.length;
  const src = playlist[currentTrackIndex];
  if (audioPlayer.getAttribute("src") !== src) {
    audioPlayer.src = src;
  }
  updateTrackTitle(currentTrackIndex);
  updateTracklistActive();
}
function updateMusicUI(isPlaying) {
  const cdPlayer = document.querySelector(".cd-player");
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  if (!cdPlayer || !playIcon || !pauseIcon) return;
  if (isPlaying) {
    cdPlayer.classList.add("playing");
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    cdPlayer.classList.remove("playing");
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
}
function playCurrentTrack() {
  if (!audioPlayer || !playlist.length) return Promise.resolve();
  if (!audioPlayer.getAttribute("src")) setTrack(currentTrackIndex);
  return audioPlayer.play();
}
function advanceTrack() {
  if (!playlist.length) return;
  setTrack(currentTrackIndex + 1);
  if (isMusicPlaying) {
    audioPlayer.play().catch(() => {
      isMusicPlaying = false;
      updateMusicUI(false);
    });
  }
}
function changeTrackBy(delta) {
  if (!playlist.length) return;
  setTrack(currentTrackIndex + delta);
  if (isMusicPlaying) {
    audioPlayer.play().catch(() => {
      isMusicPlaying = false;
      updateMusicUI(false);
    });
  }
}
if (audioPlayer) {
  audioPlayer.addEventListener("ended", advanceTrack);
  audioPlayer.addEventListener("error", advanceTrack);
  updateTrackTitle(currentTrackIndex);
  renderTracklist();
}
window.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  const active = document.activeElement;
  if (
    active &&
    (active.tagName === "INPUT" ||
      active.tagName === "TEXTAREA" ||
      active.isContentEditable)
  ) {
    return;
  }
  changeTrackBy(event.key === "ArrowRight" ? 1 : -1);
});
const musicWidget = document.getElementById("music-widget");
const cdPlayer = musicWidget ? musicWidget.querySelector(".cd-player") : null;
const tracklistPanel = document.getElementById("tracklist-panel");
const langWidget = document.getElementById("lang-widget");
if (musicWidget) {
  const controls = musicWidget.querySelectorAll("[data-track-action]");
  controls.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.trackAction;
      if (action === "next") changeTrackBy(1);
      if (action === "prev") changeTrackBy(-1);
    });
  });
}
if (musicWidget && cdPlayer && tracklistPanel) {
  const setTracklistOpen = (isOpen) => {
    musicWidget.classList.toggle("tracklist-open", isOpen);
    tracklistPanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };
  setTracklistOpen(false);
  const openTracklist = () => setTracklistOpen(true);
  const closeTracklist = (event) => {
    const related = event.relatedTarget;
    if (
      related &&
      (cdPlayer.contains(related) || tracklistPanel.contains(related))
    ) {
      return;
    }
    setTracklistOpen(false);
  };
  cdPlayer.addEventListener("mouseenter", openTracklist);
  cdPlayer.addEventListener("mouseleave", closeTracklist);
  tracklistPanel.addEventListener("mouseenter", openTracklist);
  tracklistPanel.addEventListener("mouseleave", closeTracklist);
  musicWidget.addEventListener("focusin", (event) => {
    if (langWidget && langWidget.contains(event.target)) return;
    openTracklist();
  });
  musicWidget.addEventListener("focusout", (event) => {
    const related = event.relatedTarget;
    if (related && musicWidget.contains(related)) return;
    setTracklistOpen(false);
  });
}

function toggleMusic() {
  if (!audioPlayer) return;

  if (!isMusicPlaying) {
    // Reproducir
    playCurrentTrack()
      .then(() => {
        isMusicPlaying = true;
        updateMusicUI(true);
      })
      .catch(() => {
        console.log("Autoplay bloqueado. Haz clic de nuevo.");
      });
  } else {
    // Pausar
    audioPlayer.pause();
    isMusicPlaying = false;
    updateMusicUI(false);
  }
}
// --- MASCOT / STICKER ANIMATION ---
function initStickerAnimation() {
  if (prefersReducedMotion) return;
  // 1. Verificamos que el elemento exista para evitar errores
  const container = document.querySelector(".sticker-container");
  if (!container) return;
  // Preload images inside the sticker container before starting animation
  const imgs = Array.from(container.querySelectorAll("img")).map((i) =>
    i.getAttribute("src")
  );

  const preload = imgs.map(
    (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => {
          console.warn("Failed to preload", src);
          resolve(src);
        };
        img.src = src;
      })
  );

  Promise.all(preload).then(() => {
    console.log("sticker: preload complete", imgs);

    // Force inline stacking to avoid CSS stacking-context issues
    try {
      const baseEl = container.querySelector(".base");
      const openEl = container.querySelector(".eyes-open");
      const winkEl = container.querySelector(".eyes-wink");
      if (baseEl) baseEl.style.zIndex = "1";
      if (openEl) {
        openEl.style.zIndex = "10000";
        openEl.style.opacity = "1";
      }
      if (winkEl) {
        winkEl.style.zIndex = "10001";
        winkEl.style.opacity = "0";
      }
    } catch (e) {
      console.warn("sticker: inline style guard failed", e);
    }

    // 2. Animación de flotación (Levitación suave)
    gsap.to(".sticker-container", {
      y: 15, // Mueve 15px hacia arriba
      rotation: 2, // Rota ligeramente
      duration: 2.5,
      ease: "sine.inOut", // Movimiento muy fluido tipo ola
      yoyo: true, // Va y vuelve
      repeat: -1, // Infinito
    });

    // 3. Animación de parpadeo (Intercambio de imágenes)
    const eyesOpen = document.querySelectorAll(".eyes-open");
    const eyesWink = document.querySelectorAll(".eyes-wink");

    // Si no encuentra las capas de ojos, sale
    if (eyesOpen.length === 0 || eyesWink.length === 0) return;
    // Start with eyes open visible
    // AJUSTE FINO: Mueve los ojos independientemente de la cara
    // x: negativo es izquierda, positivo derecha
    // y: negativo es arriba, positivo abajo
    gsap.set(eyesOpen, { opacity: 1 });
    gsap.set(eyesWink, { opacity: 0 });
    const tlGuiño = gsap.timeline({ repeat: -1 });

    // Blink sequence: wait ~4s, close (swap to wink), hold 0.12s, open
    tlGuiño
      .set(eyesOpen, { opacity: 1 })
      .set(eyesWink, { opacity: 0 })
      .to({}, { duration: 4 })
      .set(eyesOpen, { opacity: 0 })
      .set(eyesWink, { opacity: 1 })
      .to({}, { duration: 0.12 })
      .set(eyesOpen, { opacity: 1 })
      .set(eyesWink, { opacity: 0 });
  });
}
