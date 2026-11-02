# Portfolio de Alberto Dávalos

Portfolio estático en español e inglés, construido con Astro y Tailwind CSS. Incluye cinco casos, 28 capturas reales seleccionadas y dos CV públicos en PDF. El código completo ya está guardado en esta carpeta; no hace falta pegar archivos desde el chat.

## Abrirlo en este PC

Abre una terminal de PowerShell en la carpeta del proyecto:

```powershell
npm run local
```

Abre `http://127.0.0.1:4321/`. La versión inglesa está en `/en/`. Para detenerlo, pulsa `Ctrl+C` en esa terminal.

Se necesita Node.js 22.23.4 o posterior; la validación se hizo con Node 24.19.0. La primera ejecución instala las dependencias fijadas en `package-lock.json` en una carpeta temporal propia. Las siguientes reutilizan esa instalación si no ha cambiado el archivo de versiones.

**Por qué existe `npm run local`:** en este equipo, Astro queda bloqueado al arrancar desde la carpeta de Documentos, incluso tras quitar la tilde y reinstalar las dependencias. La compilación funciona desde una copia temporal aislada. El comando sincroniza únicamente código, imágenes y configuración, compila, comprueba enlaces y abre la vista previa. No copia `.env` ni los documentos de investigación. Después de editar, detén la vista previa y vuelve a ejecutar el comando para actualizar la copia.

Para compilar y comprobar sin abrir un servidor:

```powershell
npm run local:build
```

Al terminar se muestra la ubicación de los archivos estáticos generados. El código editable sigue en esta carpeta.

En una carpeta o entorno donde Astro arranque normalmente, los comandos estándar son:

```sh
npm ci
npm run dev
```

Para comprobar la entrega de producción:

```sh
npm run build
npm run verify
npm run preview -- --host 127.0.0.1 --port 4321
```

## Dónde está cada parte

Todas las rutas siguientes son relativas a la carpeta del proyecto.

| Archivo o carpeta | Para qué sirve y qué editar |
| --- | --- |
| `package.json` | Comandos y dependencias de la web. |
| `package-lock.json` | Versiones exactas para repetir una instalación. No editar a mano. |
| `astro.config.mjs` | Generación estática y conexión de Tailwind con Astro. |
| `tsconfig.json` | Comprobación de tipos y exclusión de documentos de trabajo. |
| `.gitignore` | Excluye secretos, dependencias, salidas y la investigación local. |
| `.env.example` | Explica que esta web no necesita claves ni variables de entorno. |
| `src/env.d.ts` | Tipos base de Astro. |
| `src/content.config.ts` | Valida los campos obligatorios de los proyectos antes de compilar. |
| `src/data/profile.json` | Nombre, rol implícito en el contenido, ubicación general y enlaces profesionales. Nunca añadir teléfono ni dirección. |
| `src/data/site.ts` | Textos compartidos de navegación, contacto y pie en ES/EN. |
| `src/data/cv.json` | Contenido público del CV web en ambos idiomas y fuente de los PDF estándar regenerables. |
| `src/styles/global.css` | Colores, tipografía, botones, adaptación móvil, foco de teclado e impresión. |
| `src/layouts/BaseLayout.astro` | Estructura HTML, metadatos, navegación, selector de idioma y pie. |
| `src/components/HomePage.astro` | Presentación profesional, proyectos destacados, experiencia y perfil. |
| `src/components/HomeProject.astro` | Tarjeta de cada proyecto y galería desplegable en la portada. |
| `src/components/ProjectPage.astro` | Problema, solución, resultado, tecnología, papel personal y galería ampliable. |
| `src/components/PublicCV.astro` | CV legible en web y preparado para impresión. |
| `src/lib/images.ts` | Lee las dimensiones reales de las capturas durante la compilación. |
| `src/pages/index.astro` | Portada española `/`. |
| `src/pages/en/index.astro` | Portada inglesa `/en/`. |
| `src/pages/proyectos/[id].astro` | Genera una página ES por Markdown. |
| `src/pages/en/projects/[id].astro` | Genera la página EN equivalente. |
| `src/pages/cv/index.astro` | CV español `/cv/`. |
| `src/pages/en/cv/index.astro` | CV inglés `/en/cv/`. |
| `src/pages/privacidad/index.astro` | Aviso de privacidad español `/privacidad/`. |
| `src/pages/en/privacy/index.astro` | Aviso de privacidad inglés `/en/privacy/`. |
| `src/pages/404.astro` | Página de enlace inexistente. |
| `src/content/projects/propia.md` | Caso PropIA: seis capturas seleccionadas. |
| `src/content/projects/onchain-agent.md` | Caso Onchain Agent: ocho capturas y límites de la evaluación offline. |
| `src/content/projects/golfy-ai.md` | Caso Golfy.ai: seis capturas seleccionadas. |
| `src/content/projects/planificador-turnos.md` | Caso académico de turnos: cuatro capturas. |
| `src/content/projects/focusflow.md` | Caso FocusFlow: cuatro capturas. |
| `public/images/projects/` | Las 28 imágenes WebP publicadas, organizadas por proyecto. |
| `public/cv-luis-alberto-davalos-es.pdf` | CV público español orientado a desarrollo de aplicaciones e IA, dos páginas A4. |
| `public/cv-luis-alberto-davalos-en.pdf` | CV descargable inglés, una página A4. |
| `public/favicon.svg` | Icono AD del sitio. |
| `public/robots.txt` | Permite rastrear la web cuando esté publicada. |
| `vercel.json` | Fija Astro, la instalación reproducible y la carpeta estática `dist` para Vercel. |
| `scripts/local.mjs` | Preparación y ejecución local desde una copia temporal verificada. |
| `scripts/check-site.mjs` | Comprueba enlaces, anclas, imágenes, idiomas, títulos y PDF de la compilación. |
| `scripts/generate-cv.py` | Herramienta editorial opcional para regenerar los PDF desde los datos públicos. |
| `docs/plantilla-proyecto.md` | Ejemplo completo y válido para preparar un caso con el mismo esquema. |

## Editar un proyecto

Cada proyecto tiene **un único Markdown** con los bloques `es` y `en`. El nombre del archivo determina su URL. Editar `golfy-ai.md` modifica `/proyectos/golfy-ai/` y `/en/projects/golfy-ai/` a la vez.

El bloque situado entre `---` contiene los campos que usa la página:

| Campo | Significado |
| --- | --- |
| `order` | Posición en la portada. |
| `year` | Año respaldado por la documentación del proyecto. |
| `status` | `functional`, `prototype` o `academic`; es una etiqueta de alcance. |
| `cover` | Ruta de una captura real que también debe aparecer en la galería. |
| `accent` | `lime`, `violet`, `cyan`, `amber` o `rose`. |
| `repo` | Opcional. Solo se usa para repositorios públicos verificados. |
| `es` / `en` | Cada uno contiene `title`, `eyebrow`, `summary`, `problem`, `solution`, `result`, `stack`, `role` y `gallery`. |
| `gallery` | Lista con `src`, `alt` y `caption` por captura. El texto alternativo describe lo que se ve; el pie explica su interés. |

La [plantilla](docs/plantilla-proyecto.md) usa el caso real de FocusFlow para mostrar todos los campos sin valores de relleno. Está fuera de la colección y no genera una página duplicada. Para preparar otro caso, copia su estructura, cambia el nombre de archivo y sustituye los datos por evidencias verificables del proyecto.

Las imágenes se añaden a `public/images/projects/`. Su ruta pública empieza por `/images/projects/`, sin escribir `public`. Usa WebP, revisa datos sensibles y añade el mismo archivo a ambas galerías con traducciones de `alt` y `caption`. Las dimensiones se detectan automáticamente y un archivo ausente hace fallar la compilación.

## Decisiones técnicas

- **Astro estático:** convierte las páginas en HTML durante la compilación. El visitante no depende de un servidor de aplicación, una base de datos ni un framework JavaScript cargado en su navegador.
- **Tailwind CSS:** mantiene espaciados, colores y tamaños coherentes. `global.css` reúne las reglas compartidas; las clases de los componentes expresan sus variaciones.
- **Content collections:** el esquema revisa el Markdown al compilar. Así se detectan campos o traducciones que faltan antes de subir la web. [Documentación de Astro](https://docs.astro.build/en/guides/content-collections/).
- **ES/EN en rutas distintas:** cada idioma tiene URL propia y el selector conserva el proyecto abierto. No se necesita una librería de traducción en el navegador.
- **Contacto por email:** el enlace abre el correo del visitante sin añadir servidor, claves ni almacenamiento de mensajes; requiere que el visitante tenga un cliente de correo configurado.
- **Capturas WebP con carga diferida:** las galerías descargan las imágenes cuando se acercan a la pantalla. Se conservan las proporciones y se puede abrir el original. No se han generado interfaces ficticias con IA.
- **Tipografías alojadas en el propio sitio y menú HTML nativo:** evitan peticiones a servidores externos y JavaScript de navegación. El menú, los enlaces y el foco siguen funcionando con teclado.
- **Tecnologías desplegables:** cada tarjeta muestra su stack con el elemento HTML nativo `details`. Se puede abrir con ratón o teclado y no necesita JavaScript ni servicios externos.
- **Trayectoria personal:** la sección «Sobre mí» resume la carta de motivación y el CV aportados, incluida la experiencia previa en hostelería, consultoría y desarrollo de negocio. Los textos están en `src/components/HomePage.astro`, en español e inglés; no se incluyen el teléfono ni la dirección de los documentos originales.
- **CV público separado del original:** los PDF publicados son copias revisadas. La versión española de dos páginas elimina el teléfono y conserva solo los datos autorizados; el archivo original no entra en `public/` ni en el repositorio.
- **Sin dominio inventado:** los enlaces de idioma de navegación funcionan ya. Los metadatos absolutos de idiomas y URL canónica se activarán al configurar el dominio real en `astro.config.mjs`, durante la fase 5.

## Actualizar el CV

Edita `src/data/cv.json` y, si cambia el contacto, `src/data/profile.json`. Los PDF incluidos son archivos terminados; Python no es necesario para abrir, compilar ni desplegar la web. El PDF español publicado es una copia revisada del CV aportado para uso público; no debe sustituirse por el original privado.

Para regenerarlos con Python, ReportLab y pypdf instalados:

```powershell
python scripts/generate-cv.py
```

La herramienta genera las versiones estándar desde `src/data/cv.json`; no reconstruye la versión española importada de dos páginas. Necesita ReportLab y pypdf y utiliza Segoe UI de Windows. Comprueba que cada PDF contiene el email público y no incluye un teléfono español. Revisa visualmente ambos archivos después de cambiar el contenido. La comprobación automatizada no sustituye una revisión de privacidad.

## Privacidad y publicación

El sitio no usa claves, analítica, formularios con almacenamiento, cookies de seguimiento ni servicios de los proyectos mostrados. Solo sirve sus capturas y explicaciones. Golfy.ai y Onchain Agent siguen sin enlace a sus repositorios privados. PropIA y FocusFlow enlazan a sus repositorios públicos verificados.

`fase-1/`, `fase-2/`, `fase-3/` y los informes de QA locales quedan excluidos de Git. Las capturas finales que sí se distribuirán están únicamente en `public/`. No copies el CV original, bases de datos, `.env`, logs de clientes ni archivos internos a esa carpeta: todo lo que hay en `public/` será descargable.

El código se publica en `Kstor10/AlbertoPortofolio`. El despliegue del sitio, el dominio, HTTPS y la repetición de Lighthouse sobre la URL pública siguen pendientes de una autorización específica de publicación web.

## Carpeta anterior

El contenido fue trasladado desde `Portofolio Alberto Dávalos` a `Portofolio Alberto Davalos` a petición del usuario. Codex mantiene abierta la ruta antigua; solo conserva un directorio `.git` vacío, sin datos del proyecto. Para seguir trabajando en nuevas sesiones, abre la carpeta sin tilde en Codex. La antigua se podrá retirar cuando ya no esté en uso.
