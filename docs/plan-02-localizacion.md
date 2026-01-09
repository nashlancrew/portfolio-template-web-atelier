# Plan 01 - Localizacion y contenidos

Planificacion:
- Centralizar textos multi-idioma (ES/EN/NL) para navegacion, about, contacto y tracklist.
- Asegurar que el selector de idioma refresca el archivo y el proyecto abierto.
- Mantener tildes y actualizar asuntos de email y captions localizados.

Prompt:
- "quiero que corrijas el texto en ingles y que le añadas la traduccion al español y el neerlandes"
- "el ID 1 no cambia de idioma cuando cambas los idiomas en el selector"
- "los instrucciones del tracklist no cambian de idioma con los botones"
- "quiero añadir bajo el el embed del ID 1 el caption: Demo de realidad aumentada, en los 3 idiomas correspondientes"
- "si, traduce tambien el asunto"
- "quiero actualizar las traducciones"

Resultado:
- Ajustes: se amplio el diccionario de traducciones, se sincronizo el asunto del mailto con el idioma y se refresco el contenido del archivo/proyecto al cambiar idioma.
- Codigo cambiado: `index.html` (diccionario y setLanguage), `assets/js/main.js` (getLocalizedValue para textos del proyecto).

`index.html`
```html
<script>
  const translations = {
    es: {
      "tracklist-hint": "Flechas &larr; &rarr; para cambiar pista",
      "copyright-rights":
        "&copy; 2026 María Ignacia Dafonte Mas. Todos los derechos reservados.",
    },
    en: {
      "tracklist-hint": "Use &larr; &rarr; to change track",
      "copyright-rights": "&copy; 2026 María Ignacia Dafonte Mas. All rights reserved.",
    },
    nl: {
      "tracklist-hint": "Gebruik &larr; &rarr; om van nummer te wisselen",
      "copyright-rights":
        "&copy; 2026 María Ignacia Dafonte Mas. Alle rechten voorbehouden.",
    },
  };

  const mailSubjects = {
    es: "Propuesta de proyecto - Desde Portfolio",
    en: "Project proposal - From Portfolio",
    nl: "Projectvoorstel - Vanuit Portfolio",
  };

  function setLanguage(lang) {
    currentLang = lang;
    window.currentLang = lang;
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
    updateMailtoSubject();
    if (typeof window.renderArchive === "function") window.renderArchive();
    if (typeof window.updateOpenProjectContent === "function")
      window.updateOpenProjectContent();
  }
</script>
```

`assets/js/main.js`
```js
function getLocalizedValue(value, lang) {
  if (value == null) return "";
  if (typeof value === "object") return value[lang] || value.es || "";
  return value;
}
```
