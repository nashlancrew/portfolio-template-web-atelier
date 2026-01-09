# Plan 04 - Galerias IDs 2-4 (grids y HEIC)

Planificacion:
- Montar grids compactos para ID 2 (4x2) e ID 3, evitando scroll excesivo.
- Convertir los HEIC de ID 4 a JPG y mostrarlos en vertical.
- Permitir ampliar imagenes del grid con el mismo visor del resto de la galeria.

Prompt:
- "Quiero que me coloques las siguientes imágenes en un grid flexbox dentro de cada ID"
- "Para el id 2, como son 8 fotos, hazme un grid de 4x2, para el id 3 elimina la foto de unsplash, y para el id 4, convierteme los heic a jpg y ponlos"
- "Las fotos del ID 4 no se ven... Cambia el formato de las imagenes del ID 4 sin corromper el archivo"
- "quiero que si le haces click a las fotos de id 2 y id 3, puedas ampliarlas"

Resultado:
- Ajustes: grids dedicados por ID, layout vertical para ID 4 y conversion de HEIC a JPG.
- Codigo cambiado: `assets/js/main.js` (datos de proyectos y layout), `assets/css/style.css` (grid 4x2 y portrait), visor compartido para extraMedia.

`assets/js/main.js`
```js
{
  id: 2,
  img: "assets/images/mockup a-fin 1.jpg",
  mediaLayout: "grid",
  extraMediaLayout: "grid-4x2",
  extraMedia: [
    { type: "image", src: "assets/images/mockup a-fin 1.jpg" },
    { type: "image", src: "assets/images/mockup a-fin 2.jpg" },
    { type: "image", src: "assets/images/mockup a-fin 3.jpg" },
    { type: "image", src: "assets/images/mockup a-fin 4.jpg" },
  ],
}
```

`assets/js/main.js`
```js
{
  id: 4,
  img: "assets/images/IMG_5896.jpg",
  mediaLayout: "grid",
  extraMediaLayout: "grid-portrait",
  extraMedia: [
    { type: "image", src: "assets/images/IMG_5896.jpg" },
    { type: "image", src: "assets/images/IMG_5897.jpg" },
    { type: "image", src: "assets/images/IMG_5898.jpg" },
    { type: "image", src: "assets/images/IMG_5899.jpg" },
  ],
}
```

`assets/css/style.css`
```css
.project-extra-media.is-flex-grid.is-grid-4x2 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.project-extra-media.is-flex-grid.is-grid-portrait .project-extra-item {
  aspect-ratio: 3 / 4;
}
```
