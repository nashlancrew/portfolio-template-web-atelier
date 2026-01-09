# Plan 07 - UI general, accesibilidad y redes

Planificacion:
- Habilitar navegacion por teclado y respetar prefers-reduced-motion.
- Anadir atributos accesibles (aria/alt) y enlaces reales a redes sociales.
- Incluir botones de descarga de CV/portfolio y ajustes visuales (espaciado de badge).

Prompt:
- "quiero que la web sea accesible, por lo tanto quiero activar la navegacion por teclas, que añadas todos los -prefer-reducedmotion necesarios y que tenga todos los alt necesarios"
- "quiero que los botones del footer de las redes sociales esten conectados a las cuentas correspondientes via href, y que añadas Linkedin"
- "Añade el de ko-fi tambien"
- "quiero que se abran en una nueva pestaña"
- "quiero que en el about... dos botones debajo que te permitan descargarte el cv y una version en pdf del portfolio"

Resultado:
- Ajustes: focus visible y trap de teclado en overlay, media query de reduced motion, enlaces sociales con target _blank, botones de descarga en about y separacion del badge del anio.
- Codigo cambiado: `assets/js/main.js` (focus y teclado), `assets/css/style.css` (reduced motion y layout), `index.html` (social links y descargas).

`assets/js/main.js`
```js
window.addEventListener("keydown", (event) => {
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
```

`assets/css/style.css`
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  #cursor {
    display: none;
  }
}

.gallery-meta {
  width: 100%;
  gap: 0.6rem;
}
```

`index.html`
```html
<div class="mt-5 social-links pt-5 border-top border-white-50">
  <a href="https://www.instagram.com/nshlncrw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i class="fa-brands fa-instagram fa-xl" aria-hidden="true"></i>
  </a>
  <a href="https://www.behance.net/nashlancrew" target="_blank" rel="noopener noreferrer" aria-label="Behance">
    <i class="fa-brands fa-behance fa-xl" aria-hidden="true"></i>
  </a>
  <a href="https://www.linkedin.com/in/mar%C3%ADa-ignacia-dafonte-mas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i class="fa-brands fa-linkedin-in fa-xl" aria-hidden="true"></i>
  </a>
  <a href="https://ko-fi.com/nashlancrew" target="_blank" rel="noopener noreferrer" aria-label="Ko-fi">
    <i class="fa-solid fa-mug-hot fa-xl" aria-hidden="true"></i>
  </a>
</div>
```
