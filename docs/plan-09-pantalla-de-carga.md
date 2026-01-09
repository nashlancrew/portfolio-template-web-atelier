# Plan 09 - Pantalla de carga

Planificacion:

- Crear un overlay de carga con spinner y texto traducible.
- Ocultar la pantalla tras el load y respetar prefers-reduced-motion.
- Dejar constancia en la documentacion con fragmentos de codigo.

Prompt:

- "quiero que crees una pantalla de carga y lo metas en la documentacion correspondiente"

Resultado:

- Se anadio el overlay de carga en `index.html` con texto localizado.
- Se incorporaron estilos para overlay, spinner y sticker en `assets/css/style.css`.
- Se agrego la logica en `assets/js/main.js` para ocultar y retirar el overlay tras la carga.

`index.html`

```html
<div id="loading-screen" role="status" aria-live="polite">
  <div class="loading-content">
    <div class="loading-sticker" aria-hidden="true">
      <img src="assets/images/sticker-base.png" alt="" />
    </div>
    <div class="loading-spinner" aria-hidden="true"></div>
    <p class="loading-text" data-lang="loading-text">Cargando...</p>
  </div>
</div>
```

`assets/css/style.css`

```css
#loading-screen {
  position: fixed;
  inset: 0;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
#loading-screen.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.loading-sticker {
  width: clamp(160px, 22vw, 260px);
  animation: float 4s ease-in-out infinite;
}
.loading-spinner {
  width: 36px;
  height: 36px;
  border: 2px solid var(--text-main);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

`assets/js/main.js`

```js
function hideLoadingScreen() {
  const screen = document.getElementById("loading-screen");
  if (!screen) return;
  if (prefersReducedMotion) {
    screen.remove();
    return;
  }
  screen.classList.add("is-hidden");
  const removeScreen = () => {
    if (screen.isConnected) screen.remove();
  };
  screen.addEventListener("transitionend", removeScreen, { once: true });
  setTimeout(removeScreen, 800);
}

window.addEventListener("load", () => {
  if (hasInitialized) return;
  hasInitialized = true;
  init();
  hideLoadingScreen();
});
```
