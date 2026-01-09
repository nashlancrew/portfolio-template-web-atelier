# Plan 06 - Contacto (mailto y confirmacion)

Planificacion:
- Usar el formulario existente con mailto hacia el email final.
- Traducir el asunto automaticamente segun idioma.
- Mostrar un popup/aviso de envio al mandar.

Prompt:
- "quiero que en la parte de contacto se manden las cosas a mi email"
- "el email destino es nachadafonte@gmail.com. El asunto es: Propuesta de proyecto - Desde Portfolio"
- "quiero que salga un popup de enviado cuando se haya enviado el email desde el formulario de contacto"
- "quiero que cambie segun el idioma"

Resultado:
- Ajustes: el formulario usa dataset para mailto y asunto, y se muestra un toast tras enviar.
- Codigo cambiado: `index.html` (formulario y toast), `assets/js/main.js` (mailto y feedback).

`index.html`
```html
<form
  id="contact-form"
  data-mailto="nachadafonte@gmail.com"
  data-mail-subject="Propuesta de proyecto - Desde Portfolio"
>
  <!-- campos -->
</form>

<div id="form-toast" class="form-toast" role="status" aria-live="polite" hidden>
  <div class="form-toast-inner">
    <span id="form-toast-message" data-lang="form-toast-message">Mensaje enviado.</span>
    <button id="form-toast-close" type="button" class="form-toast-close">Cerrar</button>
  </div>
</div>
```

`assets/js/main.js`
```js
function setupContactFormFeedback() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("form-toast");
  if (!form || !toast) return;

  const buildMailtoHref = () => {
    const recipient = form.dataset.mailto || "nachadafonte@gmail.com";
    const subject = form.dataset.mailSubject || "";
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    const body = buildMailBody();
    if (body) params.set("body", body);
    const queryString = params.toString();
    return queryString ? `mailto:${recipient}?${queryString}` : `mailto:${recipient}`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = buildMailtoHref();
    showToast();
  });
}
```
