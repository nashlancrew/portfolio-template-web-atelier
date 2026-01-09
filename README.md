# Final project: Portfolio template

This project's objective is the creation of a web template for a creative portfolio. It focuses on a playful, editorial layout with an interactive canvas, horizontal archive gallery, and project detail overlays.

## Details
Project link: https://nashlancrew.github.io/portfolio-template-web-atelier/
Student: Maria Ignacia Dafonte Mas
Github user: @nashlancrew

Course: Web Layout with Style Sheets
Teacher: Ruben Vega Balbas
Project: Final

## Tech Stack
- HTML5 -- Semantic markup and document structure
- CSS3 -- Custom styling, layout, and responsive design
- JavaScript (Vanilla) -- DOM manipulation and interactivity without frameworks
- Bootstrap 5 -- Responsive grid system and utility classes
- GSAP + ScrollTrigger -- Animation and scroll effects
- Lenis -- Smooth scrolling
- Google Fonts -- Web typography loaded via CDN (Syne, Inter)
- Font Awesome -- Icon library via CDN
- Git & GitHub -- Version control and repository hosting

## Setup Instructions
This project is a static website built with HTML, CSS, and JavaScript. No build tools or package managers are required.

1. Clone or download the repository from GitHub.
2. Open the project folder in Visual Studio Code (or any code editor).
3. Ensure the project structure is preserved:
   - `index.html`
   - `404.html`
   - `assets/`
     - `images/`
     - `css/style.css`
     - `js/main.js`
   - `docs/`

Optional (recommended):
- Use the Live Server extension in Visual Studio Code to preview changes in real time.

## Customization Guide
- Replace images in `assets/images/` with your own.
- Update portfolio items in `assets/js/main.js` inside the `projects` array (titles, years, categories, images, embeds, and extra media).
- Adjust translations in `index.html` (the `translations` object and text labeled with `data-lang`).
- Update contact details in `index.html` (form dataset and footer links).
- Modify the audio playlist in `assets/js/main.js` (the `playlist` array).
- Change colors, typography, and layout in `assets/css/style.css`.

Checklist after customizing:
- Menu links and section anchors
- Project cards and overlays
- Footer social links
- Contact form mailto target and subject
- 404 page text and links

## Screenshots (Suggested)
Homepage:
- Hero section
- Archive gallery (horizontal swipe)
- Project overlay
- Footer/contact

Side-pages:
- 404 page

## AI Usage
Codex (GPT-5) was used during development to assist with implementation and debugging. Major implementations are documented in `docs/plan-*.md`.

## Credits and Acknowledgments
Creator: Maria Ignacia Dafonte Mas
