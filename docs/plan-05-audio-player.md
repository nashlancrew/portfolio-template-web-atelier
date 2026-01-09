# Plan 05 - Audio player y tracklist

Planificacion:
- Usar la carpeta de audio externa como playlist del reproductor.
- Mostrar el titulo del track activo y permitir cambio con flechas.
- Abrir el tracklist al hacer hover y mostrar controles con efecto glass.

Prompt:
- "quiero usar esta carpeta para el source del audio palyer"
- "Track 1: ... Track 9: ..."
- "quiero que el track title solo aparezca al hacer hover y que puedas cambiar de cancion con las flechas"
- "quiero que hacer hover sobre el disco se abra todo el tracklist y se puedan ver los botones de control"

Resultado:
- Ajustes: playlist con URLs externas, render del tracklist, titulo dinamico y control por flechas.
- Codigo cambiado: `assets/js/main.js` (playlist y eventos), `assets/css/style.css` (panel glass y hover).

`assets/js/main.js`
```js
const playlist = [
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/Pommelien%20Thijs%20-%20Erop%20Of%20Eronder%20(Official%20Lyric%20video).mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/MICO%20%E2%80%93%20glhf%E1%90%B83%20%5Bofficial%20visual%5D.mp3",
  "https://file.garden/aUloIK3Gbmwc6_yg/web_playlist/MICO%20%E2%80%93%20Senses%20%5Bofficial%20video%5D.mp3",
];

function renderTracklist() {
  const listEl = document.getElementById("tracklist");
  if (!listEl || !playlist.length) return;
  listEl.innerHTML = playlist
    .map((url, index) => {
      const title = getTrackTitleFromUrl(url) || `Track ${index + 1}`;
      const activeClass = index === currentTrackIndex ? "is-active" : "";
      return `
        <li class="tracklist-item ${activeClass}">
          <button type="button" data-track-index="${index}">${title}</button>
        </li>
      `;
    })
    .join("");
}
```

`assets/js/main.js`
```js
window.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  changeTrackBy(event.key === "ArrowRight" ? 1 : -1);
});

if (musicWidget && cdPlayer && tracklistPanel) {
  const setTracklistOpen = (isOpen) => {
    musicWidget.classList.toggle("tracklist-open", isOpen);
    tracklistPanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };
  tracklistPanel.addEventListener("mouseenter", () => setTracklistOpen(true));
  tracklistPanel.addEventListener("mouseleave", () => setTracklistOpen(false));
}
```
