// Esperar a que el DOM cargue para iniciar las animaciones
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainer = document.querySelector("#app");
  const nav = document.querySelector(".navbar");

  // Inicializar desplazamiento suave con Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.1,
  });

  // Actualizar ScrollTrigger en cada scroll de Locomotive
  locoScroll.on("scroll", ScrollTrigger.update);

  // Configurar ScrollTrigger para usar Locomotive Scroll como scroller
  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  // Mostrar u ocultar la barra de navegación según la dirección del scroll
  locoScroll.on("scroll", (obj) => {
    if (obj.scroll.y > 100) {
      if (obj.direction === "up") {
        nav.classList.add("visible");
      } else {
        nav.classList.remove("visible");
      }
    } else {
      nav.classList.remove("visible");
    }
  });

  // Desplazamiento suave al hacer clic en enlaces de navegación (anclas)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        locoScroll.scrollTo(target);
      }
    });
  });

  // Animaciones GSAP
  // Animación de entrada para el texto del Hero
  gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  gsap.from(".hero-subtitle", { opacity: 0, y: -30, duration: 1, delay: 0.8 });
  // Indicador de scroll con animación de rebote constante
  gsap.fromTo(
    ".scroll-indicator",
    { y: 0 },
    { y: 10, duration: 1, yoyo: true, repeat: -1, ease: "power1.inOut" }
  );

  // Animación al entrar sección Sobre Mí (slide in desde la izquierda)
  gsap.from(".about p", {
    scrollTrigger: {
      trigger: ".about",
      scroller: scrollContainer,
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
  });

  // Animación de aparición para items de Proyectos (fade-in con desplazamiento)
  gsap.from(".projects-grid .project-item", {
    scrollTrigger: {
      trigger: ".projects-grid",
      scroller: scrollContainer,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });

  // Animación en hover para títulos de proyectos (leve desplazamiento)
  document.querySelectorAll(".project-item").forEach((item) => {
    const title = item.querySelector(".project-title");
    item.addEventListener("mouseenter", () => {
      gsap.to(title, { y: -5, duration: 0.3, ease: "power1.out" });
    });
    item.addEventListener("mouseleave", () => {
      gsap.to(title, { y: 0, duration: 0.3, ease: "power1.out" });
    });
  });

  // Indicador de sección activa en el menú (resalta enlace correspondiente)
  document.querySelectorAll("section[id]").forEach((section) => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (link) {
      ScrollTrigger.create({
        trigger: section,
        scroller: scrollContainer,
        start: "top 60%",
        end: "bottom 60%",
        toggleClass: { targets: link, className: "active" },
      });
    }
  });

  // Refrescar ScrollTrigger una vez que todo esté configurado
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
});
