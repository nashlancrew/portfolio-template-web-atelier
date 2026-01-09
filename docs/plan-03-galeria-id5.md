# Plan 03 - Galeria ID 5 (collage y visor)

Planificacion:
- Mostrar la galeria como collage fijo dentro del proyecto ID 5 y como portada del archivo.
- Permitir arrastrar las imagenes dentro del collage y abrirlas a pantalla completa.
- Anadir flechas e indicador en el visor y ajustar el anio a "2022 - ongoing".

Prompt:
- "Para el ID 5, quiero hacer una galeria de imagenes que se vea asi"
- "quiero que se puedan arrastrar los elementos dentro de la galeria"
- "quiero que en el ID solo aparezca la propia galeria y el titulo"
- "quiero que parezca mucho mas 'cluttered'"
- "quiero que añadas flechas y un indicador para poder mover las imagenes dentro de los id cuando estan en pantalla completa"

Resultado:
- Ajustes: ID 5 se renderiza como collage, el overlay usa modo "gallery-only" y el visor permite navegar con flechas e indicador.
- Codigo cambiado: `assets/js/main.js` (datos del ID 5, render de collage y visor), `assets/css/style.css` (layout collage y visor).

`assets/js/main.js`
```js
{
  id: 5,
  title: { es: "Ilustraciones", en: "Illustrations", nl: "Illustraties" },
  year: "2022 - ongoing",
  mediaLayout: "collage",
  detailMode: "gallery-only",
  extraMedia: [
    { type: "image", src: "assets/images/5.png" },
    { type: "image", src: "assets/images/55.png" },
    { type: "image", src: "assets/images/64.png" },
    { type: "image", src: "assets/images/79.png" },
  ],
}
```

`assets/js/main.js`
```js
const markup = items
  .map((item, index) => {
    if (!item || item.type !== "image" || !item.src) return "";
    const alt = item.alt || `${title || "Project"} gallery image ${index + 1}`;
    const className = `collage-item collage-item-${index + 1}`;
    const safeSrc = encodeURI(item.src);
    return `<img class="${className}" src="${safeSrc}" alt="${alt}" loading="lazy" decoding="async" data-collage-src="${safeSrc}" data-collage-alt="${alt}" role="button" tabindex="0" />`;
  })
  .join("");
```

`assets/css/style.css`
```css
.project-extra-media.is-collage {
  position: relative;
  min-height: 480px;
  background: #f5f2ea;
  border-radius: 20px;
  overflow: hidden;
}
.collage-viewer-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
```
