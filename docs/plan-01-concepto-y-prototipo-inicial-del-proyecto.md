# Fase 1: Concepto y Prototipo (Single File)

## 1. Inicio del Proyecto

Prompt:
"Quiero hacer una página web parecida a https://teateearu.com/. Quiero añadirle al portfolio la opción de dibujar... swipe gallery... formulario de contacto... paleta de azules y amarillos, letra Fraunces... hecho con Bootstrap y GSAP."

Respuesta/Solucion:
- Se creo un archivo unico `index.html` conteniendo HTML, CSS y JS.
- Implementacion de Canvas API para dibujar en toda la pantalla.
- Integracion de GSAP para animaciones.
- Diseno base con paleta Crema/Azul y tipografia Fraunces.

IA usada: Codex (GPT-5)

## 2. Ajuste de Cursor

Prompt:
"No me gusta el cursor, me gustaría que fuera una figurita o algo como lo de Tea que es un cuadradito que imita a un dead pixel o un visor."

Respuesta/Solucion:
- Se modifico el CSS del cursor para ser un cuadrado (14px) que se expande a un marco transparente (40px) al hacer hover.
- Uso de `mix-blend-mode` para invertir colores (luego eliminado por problemas de visibilidad).

IA usada: Codex (GPT-5)

## 3. Estructura de Vistas (Home/Archive)

Prompt:
"Quiero tener una página separada para el archive/portfolio donde pueda expandir las piezas..."

Respuesta/Solucion:
- Se implemento un sistema de "Vistas" (SPA - Single Page Application) usando clases `.hidden` para alternar entre la seccion Hero y el Archivo sin recargar.
- Creacion de un Overlay (Modal) para ver detalles de proyectos.

IA usada: Codex (GPT-5)

## 4. Animaciones Avanzadas

Prompt:
"Quiero tener animaciones parecidas a https://adrienlamy.fr/..."

Respuesta/Solucion:
- Integracion de Lenis para Smooth Scroll.
- Animaciones de "cortina" para transiciones de pagina.
- Efectos Parallax en imagenes.

IA usada: Codex (GPT-5)

# Fase 2: Refinamiento de Diseno

## 5. Restauracion de Elementos y Estilo Cuaderno

Prompt:
"Te has cargado el texto del principio y no has metido al personaje animado..."

Respuesta/Solucion:
- Se restauro el titulo gigante.
- Se intento un diseno de "cuaderno de espiral" (luego descartado).
- Se introdujo el Mascot Container (Fantasma).

IA usada: Codex (GPT-5)

## 6. Cambio a Estetica "Digital Premium"

Prompt:
"No me gusta para nada [el estilo cuaderno]..."

Respuesta/Solucion:
- Pivote de diseno: se elimino la espiral y texturas de papel sucio.
- Nuevo fondo limpio con reticula de puntos (`radial-gradient`).
- Cambio de tipografia principal a Syne (Titulos) e Inter (Cuerpo).
- Fantasma animado solo con CSS (sin imagenes externas).

IA usada: Codex (GPT-5)

## 7. Mejoras de UX (Playground y Archivo)

Prompt:
"El botón de Hide UI no funciona... crea una opción solo de visual playground... para los trabajos del 'Archivo' crea una página separada..."

Respuesta/Solucion:
- Creacion de la funcion `activatePlayground()`: scroll al inicio, limpia canvas y oculta textos.
- Restauracion de la galeria horizontal (Swipe) para el archivo en la home.
- Ajuste del Navbar a `navbar-expand-md` para mejor comportamiento en tablets.

IA usada: Codex (GPT-5)

## 8. Problemas de Espaciado y Scroll

Prompt:
"Creatividad sin limites y el hola soy tea... están demasiado pegadas... el scroll se queda atascado."

Respuesta/Solucion:
- CSS: se anadio `padding-top: 30vh` a la seccion `#about` para separar visualmente el texto del Hero.
- JS: se ajusto la configuracion de Lenis Scroll y se desactivo `pointer-events` en el canvas por defecto para liberar el scroll.

IA usada: Codex (GPT-5)

# Fase 3: Modularizacion y Funcionalidades Extra

## 9. Division de Archivos

Prompt:
"Me puedes dividir el código de este archivo en un html, css y js?"

Respuesta/Solucion:
- Separacion del proyecto en `index.html`, `assets/css/style.css` y `assets/js/main.js`.
- Correccion de rutas de importacion.

IA usada: Codex (GPT-5)

## 10. Problemas con Tipografias

Prompt:
"Ya no aparece Syne en ninguna parte..."

Respuesta/Solucion:
- Se movio la carga de Google Fonts (`<link>`) del CSS al HTML (`<head>`) para asegurar prioridad de carga.
- Uso de `!important` en CSS para forzar la familia tipografica.

IA usada: Codex (GPT-5)

## 11. Navbar Glassmorphism

Prompt:
"Quiero añadirle al navbar un efecto de glasmorfismo..."

Respuesta/Solucion:
- CSS: `backdrop-filter: blur(20px) saturate(180%);`
- Ajuste de opacidad del fondo (0.85) para legibilidad.
- Logica JS con ScrollTrigger para cambiar estilos al llegar al footer (Contacto).

IA usada: Codex (GPT-5)

## 12. Widget de Musica

Prompt:
"Quiero añadirle un pequeño cd que gira..."

Respuesta/Solucion:
- Creacion de widget con HTML/CSS (disco giratorio).
- Integracion de `<audio>` y control de Play/Pause.
- Enlace a Spotify.

IA usada: Codex (GPT-5)

## 13. Selector de Idioma (ES/EN/NL)

Prompt:
"Quiero que haya un botón... añadirle neerlandés... drop up menu con circulitos."

Respuesta/Solucion:
- Creacion de diccionario de traducciones (JSON) en `main.js`.
- Logica para cambiar textos estaticos (`data-lang`) y dinamicos (Galeria).
- Diseno CSS de menu desplegable hacia la derecha.

IA usada: Codex (GPT-5)

## 14. Pagina 404

Prompt:
"Quiero hacer una página 404... siga la estética... fantasma abajo."

Respuesta/Solucion:
- Creacion de `404.html`.
- Integracion del Canvas para dibujar en la pagina de error.
- Sincronizacion de Modo Oscuro mediante `localStorage`.
- Posicionamiento del fantasma en el borde inferior.

IA usada: Codex (GPT-5)
