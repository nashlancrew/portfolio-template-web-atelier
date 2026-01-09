# Plan 02 - Proyecto ID 1 (embed, camara y media)

Planificacion:
- Reemplazar la miniatura por el logo del proyecto y anadir el embed de GitHub Pages.
- Solicitar acceso a camara solo al abrir el proyecto ID 1.
- Anadir una foto adicional con caption localizado y evitar que el embed cargue antes de abrir.

Prompt:
- "quiero añadir un embed del github pages del proyecto del id 1, en vez de una imagen"
- "el enlace es este: https://handicap-moreido.github.io/MoreIDo_AR_project/. Quiero reemplazar tambien la miniatura de la tarjeta"
- "quiero que la pagina web pueda pedir acceso a la camara cuando se haga click en el ID 1 de la galeria"
- "No quiero que el embed se empiece a cargar antes de abrir el item"
- "quiero añadir esta foto en ID 1, ademas del embed, con el caption de: 'Live Demonstration at Sfinks'25'"

Resultado:
- Ajustes: ID 1 usa logo como portada, embed con caption localizado, foto extra y acceso a camara al abrir el overlay.
- Codigo cambiado: `assets/js/main.js` (datos del proyecto, lazy load del embed, camara).

`assets/js/main.js`
```js
{
  id: 1,
  title: {
    es: "Animacion de Handicap International para el festival Sfinks 2024",
    en: "Handicap's International animation for Sfinks Festival 2024",
    nl: "Handicap International animatie voor Sfinks Festival 2024",
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
}
```

`assets/js/main.js`
```js
function openProject(id) {
  // ...
  if (id === 1) requestCameraAccess();
}

function closeProject() {
  // ...
  if (window.currentOpenProjectId === 1) stopCameraAccess();
  const embedEl = document.getElementById("detail-embed");
  if (embedEl) {
    embedEl.src = "";
    embedEl.hidden = true;
  }
}
```
