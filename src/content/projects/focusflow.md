---
order: 5
year: "2025"
status: functional
cover: /images/projects/focusflow/focusflow-01-sesion-prioridades.webp
accent: rose
repo: https://github.com/Kstor10/FocusFlow
es:
  title: FocusFlow
  eyebrow: Extensión Chrome · productividad
  summary: "Extensión de productividad que une Pomodoro, bloqueo de distracciones y una matriz de Eisenhower, con datos guardados localmente."
  problem: "Usar varias herramientas para tiempo, foco y prioridades añade fricción justo cuando el usuario intenta concentrarse."
  solution:
    - "Temporizador configurable cuyo estado se recupera después de suspender el worker o reiniciar el navegador."
    - "Bloqueo por dominio durante las sesiones, permisos solicitados solo cuando son necesarios y pases temporales de cinco minutos."
    - "Matriz de Eisenhower con edición, drag and drop, movimiento por teclado y recuperación de tareas eliminadas."
    - "Temas claro y oscuro, exportación JSON y CSV e importación segura sin sobrescribir los datos existentes."
  result: "La versión local 1.1.0 reúne extensión y experiencia web responsive. Ocho pruebas de lógica y doce escenarios de navegador validan temporizador, persistencia, bloqueo, copias de seguridad y accesibilidad; el repositorio público todavía muestra la versión anterior."
  stack:
    - JavaScript
    - HTML
    - CSS
    - Chrome Extension APIs
    - chrome.storage.local
    - declarativeNetRequest
    - Node Test Runner
    - Playwright
    - axe-core
  role:
    - Definición del problema de foco y priorización
    - Rediseño responsive del temporizador, la matriz y la gestión de distracciones
    - Implementación de la extensión, permisos por dominio y pantalla de bloqueo
    - Persistencia local, migración y exportación de datos
    - Pruebas unitarias, de navegador y de accesibilidad
  gallery:
    - src: /images/projects/focusflow/focusflow-01-sesion-prioridades.webp
      alt: "Nueva interfaz oscura de FocusFlow con temporizador y matriz de prioridades"
      caption: "Sesión, distracciones y prioridades comparten un único espacio de trabajo."
    - src: /images/projects/focusflow/focusflow-02-vista-completa.webp
      alt: "Vista completa de FocusFlow con datos locales y exportación"
      caption: "La extensión guarda los datos en el dispositivo y permite exportarlos o recuperarlos."
    - src: /images/projects/focusflow/focusflow-03-bloqueo-activo.webp
      alt: "Pantalla de bloqueo de FocusFlow para el dominio de ejemplo"
      caption: "Durante una sesión activa, el usuario puede volver a sus tareas o utilizar un pase temporal."
    - src: /images/projects/focusflow/focusflow-04-movil-claro.webp
      alt: "Versión web de FocusFlow en móvil con tema claro"
      caption: "La experiencia responsive conserva el temporizador y la matriz; el bloqueo de pestañas requiere la extensión."
en:
  title: FocusFlow
  eyebrow: Chrome extension · productivity
  summary: "A productivity extension combining Pomodoro, distraction blocking and an Eisenhower matrix, with locally stored data."
  problem: "Using separate tools for time, focus and priorities creates friction at the exact moment a user is trying to concentrate."
  solution:
    - "A configurable timer whose state recovers after worker suspension or a browser restart."
    - "Per-domain blocking during sessions, permissions requested only when needed and five-minute temporary passes."
    - "An Eisenhower matrix with editing, drag and drop, keyboard movement and deleted-task recovery."
    - "Light and dark themes, JSON and CSV export and safe imports that preserve existing data."
  result: "The local 1.1.0 version combines a Chrome extension with a responsive web experience. Eight logic tests and twelve browser scenarios validate the timer, persistence, blocking, backups and accessibility; the public repository still shows the previous version."
  stack:
    - JavaScript
    - HTML
    - CSS
    - Chrome Extension APIs
    - chrome.storage.local
    - declarativeNetRequest
    - Node Test Runner
    - Playwright
    - axe-core
  role:
    - Focus and prioritisation problem definition
    - Responsive redesign of the timer, matrix and distraction management
    - Extension, per-domain permissions and block-page implementation
    - Local persistence, migration and data export
    - Unit, browser and accessibility testing
  gallery:
    - src: /images/projects/focusflow/focusflow-01-sesion-prioridades.webp
      alt: "New dark FocusFlow interface with a timer and priority matrix"
      caption: "Sessions, distractions and priorities share one workspace."
    - src: /images/projects/focusflow/focusflow-02-vista-completa.webp
      alt: "Complete FocusFlow view with local data and export controls"
      caption: "The extension stores data on the device and lets the user export or recover it."
    - src: /images/projects/focusflow/focusflow-03-bloqueo-activo.webp
      alt: "FocusFlow block page for the example domain"
      caption: "During an active session, the user can return to their tasks or use a temporary pass."
    - src: /images/projects/focusflow/focusflow-04-movil-claro.webp
      alt: "FocusFlow web experience on mobile in the light theme"
      caption: "The responsive experience keeps the timer and matrix; tab blocking requires the extension."
---

FocusFlow reúne gestión del tiempo, control de distracciones y priorización en una experiencia local, responsive y probada en navegador.
