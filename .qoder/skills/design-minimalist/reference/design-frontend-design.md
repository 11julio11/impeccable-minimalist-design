<!-- This file was adapted for Minimalist Design -->

# Minimalist Design

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

## Ground it in the subject

If the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. If there's any information in your memory about the human's preferences, context about what they're building, or designs you've made before - use that as a hint. The subject's own world, its materials, instruments, artifacts, and vernacular, is where distinctive choices come from. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is a thesis. Open with the most characteristic thing in the subject's world, in whatever form makes sense for it: a headline, an image, an animation, a live demo, an interactive moment. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the template answer, only use if that's truly the best option.

Typography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project, and set a clear type scale with intentional weights, widths, and spacing. Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle for the content.

Structure is information. Structural devices, numbering, eyebrows, dividers, labels, should encode something true about the content, not decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence - like a real process or a typed timeline where order carries information the reader needs. Question if choices like numbered markers actually make sense before incorporating them.

Leverage motion deliberately. Think about where and if animation can serve the subject: a page-load sequence, a scroll-triggered reveal, hover micro-interactions, ambient atmosphere. An orchestrated moment usually lands harder than scattered effects; choose what the direction calls for. However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated.

Match complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail. Elegance is executing the chosen vision well.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: brainstorm, explore, plan, critique, build, critique again

For calibration: AI-generated design right now clusters around three looks: (1) a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta accent; (2) a near-black background with a single bright acid-green or vermilion accent; (3) a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns. All three are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly , the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. Just like a human designer who's hired, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

Work in two passes. First, brainstorm a short design plan based on the human's design brief: create a compact token system with color, type, layout, and signature. Color: describe the palette as 4-6 named hex values. Type: the typefaces for 2+ roles (a characterful display face that's used with restraint, a complementary body face, and a utility face for captions or data if needed). Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Signature: the single unique element this page will be remembered by that embodies the brief in an appropriate way.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief , revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan exactly and deriving every color and type decision from it.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and a element-based selector like .cta). This can happen often with paddings/margins between sections.

Try to do a lot of this planning and iteration in your thinking, and only show ideas to the user when you have higher confidence it'll delight them.

## Restraint and self-critique

Spend your boldness in one place. Let the signature element be the one memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Not taking a risk can be a risk itself! Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected. Critique your own work as you build, taking screenshots if your environment supports it - a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creators have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand, and therefore easier to use. They are design material, not decoration. Bring the same intentionality to copy that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's side of the screen. Name things by what people control and recognize, never by how the system is built. A person manages notifications, not webhook config. Describe what something does in plain terms rather than selling it. Being specific is always better than being clever.

Use active voice as default. A control should say exactly what happens when it's used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the register conversational and tuned: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each element do exactly one job. A label labels, an example demonstrates, and nothing quietly does double duty.

## Arquitectura y Especificación Front-End Antidesastres

Objetivo: Eliminar la ambigüedad, unificar el diseño con el desarrollo y garantizar interfaces 100% responsivas, accesibles y de alto rendimiento.

### SECCIÓN 1: EL PLAN DE TRABAJO CRONOLÓGICO

**Fase 1: Alineación y Tokens de Diseño (Pre-producción)**
- **Aislamiento de Componentes**: Diseñar cada pieza (botones, inputs, tarjetas) de forma independiente dentro de un Sistema de Diseño antes de maquetar páginas completas.
- **Tokens de Espaciado Relativo**: Prohibir el uso de píxeles (px) para fuentes y márgenes. Definir una escala basada estrictamente en unidades rem o em (ej. 1rem = 16px de base).
- **Diseño Agnóstico al Dispositivo**: Prohibir el diseño basado en marcas de teléfonos (como "versión iPhone"). El diseño se adapta al contenido, no al hardware.

**Fase 2: Desarrollo e Implementación "Mobile-First"**
- **Código Base Móvil**: Escribir primero el CSS para pantallas pequeñas sin envolverlo en consultas de medios (media queries). El código de escritorio solo se añade para expandir la interfaz mediante @media (min-width: X).
- **Semántica Estricta**: Estructurar el HTML usando etiquetas nativas (<header>, <nav>, <main>, <article>, <aside>, <footer>) para garantizar que el navegador comprenda la jerarquía.
- **Layouts Modernos**: Restringir el uso de flotantes (loat) o posiciones absolutas para el diseño estructural. Usar exclusivamente CSS Grid para la distribución general y Flexbox para componentes internos.

**Fase 3: Optimización y Accesibilidad Universal (WCAG)**
- **Multimedia Elástica**: Implementar la etiqueta <picture> con atributos srcset y especificar reglas de CSS como max-width: 100% y height: auto para evitar desbordamientos de imágenes.
- **Accesibilidad de Navegación**: Asegurar que toda la interfaz sea operable mediante teclado (tecla Tab) y que los estados de enfoque (:focus-visible) sean claramente visibles.
- **Diseño para Dedos**: Configurar tamaños y separaciones físicas óptimas para pantallas táctiles, evitando clics accidentales.

**Fase 4: Control de Estrés y Calidad (QA)**
- **Prueba del Contenido Extremo**: Reemplazar textos simulados cortos por datos reales masivos (ej. nombres de usuarios de 50 caracteres o títulos traducidos al alemán).
- **Validación de Hardware Real**: Probar obligatoriamente en pantallas táctiles reales (iOS y Android) para evaluar el comportamiento del teclado virtual y las barras del navegador móvil.
- **Auditorías Técnicas Automatizadas**: Correr pruebas de rendimiento, accesibilidad y SEO usando herramientas como Lighthouse o Axe DevTools antes de cualquier despliegue.

### SECCIÓN 2: DICCIONARIO DE ESPECIFICACIONES MATEMÁTICAS EXACTAS
*(Usa estas reglas exactas en tus prompts de IA o especificaciones técnicas para evitar que el código falle)*

| Elemento de Interfaz | Requerimiento Tradicional (Erróneo) | Especificación Técnica Exacta (Correcta) |
|---|---|---|
| Contenedores Generales | "Que sea fluido y se adapte al ancho de la pantalla." | width: 90vw; max-width: 1200px; margin-inline: auto; (Garantiza márgenes en móvil y no se estira infinitamente en monitores gigantes). |
| Escalado de Títulos | "Haz la letra más chica en celulares y grande en PC." | ont-size: clamp(1.5rem, 4vw, 3rem); (Tipografía fluida autocalculada matemáticamente por el navegador sin usar media queries). |
| Cuadrículas de Contenido | "Tres columnas en escritorio y una columna en móvil." | display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; (El navegador calcula cuántas columnas caben según el espacio disponible). |
| Tratamiento de Textos | "Que no se rompa el diseño si el texto es largo." | overflow-wrap: break-word; hyphens: auto; para títulos.<br>Para descripciones secundarias: -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; (Trunca a 3 líneas con puntos suspensivos). |
| Botones y Enlaces | "Haz los botones grandes para que se puedan tocar." | min-width: 48px; min-height: 48px; padding: 0.75rem 1.5rem; margin: 12px; (Cumple con la norma internacional de área táctil mínima para el dedo humano). |
| Ajuste de Imágenes | "Que las fotos no se deformen en las tarjetas." | width: 100%; height: 250px; object-fit: cover; object-position: center; (La imagen llena el espacio asignado reencuadrándose sola, sin estirarse ni aplastarse). |

### SECCIÓN 3: LISTA DE ERRORES PROHIBIDOS (ANTI-PATRONES)
- ⛔ **Prohibido** usar width estático en píxeles (ej. width: 450px;) en elementos principales. Usar siempre propiedades elásticas (max-width, min-width, o porcentajes).
- ⛔ **Prohibido** abusar de position: absolute; para posicionar elementos de la interfaz de forma visual. Rompe el flujo natural del documento en cambios de pantalla.
- ⛔ **Prohibido** el uso de display: none; para "solucionar" problemas de espacio en móviles ocultando información crítica del usuario.
- ⛔ **Prohibido** forzar tamaños de fuente fijos en píxeles (px) que bloqueen las herramientas de accesibilidad de zoom del sistema operativo del usuario.


## Front-End Modernization & Code Sanitization Plan

This plan is designed to be executed in 4 consecutive stages to clean up the past and secure the future of your interface.

### Stage 1: Technological Archeology Audit (Diagnostics)
The goal is to track and list the historical vices that are damaging your current platform.
- **Identify "Divitis" and obsolete code:** Search for structures where nested `<div>` tags are abused and mentally replace them with semantic HTML. Track down if any float-based or table-based layouts still remain.
- **Measure JS Bloat:** Run an initial performance analysis to see how many megabytes of unnecessary libraries or duplicated components are being sent to the browser.
- **Detect colliding styles:** Search for massive CSS files with repeated global selectors that compete with each other and generate intermittent visual bugs.

### Stage 2: Debugging and Fat Removal (Cleanup)
Eliminate the dead weight accumulated from the evolution of tools and changing criteria.
- **Dead code elimination (Tree Shaking):** Delete obsolete component libraries (like Bootstrap remnants or old plugins) that are no longer used in production.
- **Remove rigid values (De-pixelation):** Track down and destroy fixed widths (`width: 960px`) and hardcoded font sizes in pixels (`px`) in the main CSS.
- **Clean non-viable "Figma Effect":** Simplify excessive blur filters, heavy shadows, or unnecessary animations that slow down mobile phone processors.

### Stage 3: Strict Refactoring to Modern Standards
Rebuild the interface exclusively using current native browser capabilities.
- **Migrate to Elastic Layouts:** Replace old layouts with CSS Grid for auto-adaptable global structure and Flexbox for small internal components.
- **Inject Native Semantics:** Transform generic blocks into accessible tags like `<main>`, `<article>`, `<header>`, and `<nav>`.
- **Implement Resource Automation:** Configure the backend or bundler to automatically compress images into modern formats (WebP or AVIF) and serve different sizes depending on the screen.

### Stage 4: Shielding and Quality Automation (Prevention)
Install technical barriers so that past mistakes do not slip back into your workflow.
- **Configure Linters and Formatters:** Implement tools in your code editor (like ESLint and Stylelint) that automatically block the use of bad practices before they are pushed to the server.
- **Establish a Performance Budget:** Define a strict weight limit (e.g., "the page cannot weigh more than 1.5MB in total"). If a change exceeds that weight, the system prevents it from being published.
- **Visual Regression Testing:** Implement tools that take automatic screenshots of the interface on different devices after each change, immediately alerting if anything is misaligned.
