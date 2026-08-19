const fs = require('fs');
const filePath = 'c:/Mis_Proyectos(github)/impeccable-minimalist-design/skill/reference/design-frontend-design.md';
let content = fs.readFileSync(filePath, 'utf8');

const englishText = `
## Front-End Disaster Prevention Architecture & Specifications

Objective: Eliminate ambiguity, unify design with development, and guarantee 100% responsive, accessible, and high-performance interfaces.

### SECTION 1: CHRONOLOGICAL WORKFLOW

**Phase 1: Alignment and Design Tokens (Pre-production)**
- **Component Isolation**: Design each piece (buttons, inputs, cards) independently within a Design System before building complete pages.
- **Relative Spacing Tokens**: The use of pixels (px) for fonts and margins is strictly prohibited. Define a scale based entirely on rem or em units (e.g., 1rem = 16px base).
- **Device-Agnostic Design**: Do not base designs on specific phone brands (like "iPhone version"). The design adapts to the content, not the hardware.

**Phase 2: Mobile-First Development & Implementation**
- **Mobile Base Code**: Write CSS for small screens first without wrapping it in media queries. Desktop code is only added to expand the interface using \`@media (min-width: X)\`.
- **Strict Semantics**: Structure HTML using native tags (\`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<aside>\`, \`<footer>\`) to ensure the browser understands the hierarchy.
- **Modern Layouts**: Restrict the use of floats (\`float\`) or absolute positioning for structural layouts. Use CSS Grid exclusively for general distribution and Flexbox for internal components.

**Phase 3: Universal Accessibility & Optimization (WCAG)**
- **Elastic Multimedia**: Implement the \`<picture>\` tag with \`srcset\` attributes and specify CSS rules like \`max-width: 100%\` and \`height: auto\` to prevent image overflows.
- **Keyboard Navigation Accessibility**: Ensure the entire interface is operable via keyboard (Tab key) and that focus states (\`:focus-visible\`) are clearly visible.
- **Touch-Friendly Design**: Configure optimal physical sizes and spacing for touch screens, avoiding accidental clicks.

**Phase 4: QA & Stress Testing**
- **Extreme Content Testing**: Replace short placeholder texts with massive real data (e.g., 50-character usernames or titles translated to German).
- **Real Hardware Validation**: Mandatory testing on real touch screens (iOS and Android) to evaluate virtual keyboard behavior and mobile browser bars.
- **Automated Technical Audits**: Run performance, accessibility, and SEO tests using tools like Lighthouse or Axe DevTools before any deployment.

### SECTION 2: EXACT MATHEMATICAL SPECIFICATIONS DICTIONARY
*(Use these exact rules in your AI prompts or technical specs to prevent code failure)*

| Interface Element | Traditional Requirement (Incorrect) | Exact Technical Spec (Correct) |
|---|---|---|
| General Containers | "Make it fluid and adapt to screen width." | \`width: 90vw; max-width: 1200px; margin-inline: auto;\` (Ensures margins on mobile and prevents infinite stretching on massive monitors). |
| Title Scaling | "Make the font smaller on mobile and bigger on PC." | \`font-size: clamp(1.5rem, 4vw, 3rem);\` (Fluid typography auto-calculated mathematically by the browser without media queries). |
| Content Grids | "Three columns on desktop and one column on mobile." | \`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;\` (The browser calculates how many columns fit based on available space). |
| Text Treatment | "Don't break the design if the text is long." | \`overflow-wrap: break-word; hyphens: auto;\` for titles.<br>For secondary descriptions: \`-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;\` (Truncates to 3 lines with an ellipsis). |
| Buttons and Links | "Make the buttons big so they can be touched." | \`min-width: 48px; min-height: 48px; padding: 0.75rem 1.5rem; margin: 12px;\` (Complies with the international minimum touch target standard for the human finger). |
| Image Fitting | "Don't deform the photos in the cards." | \`width: 100%; height: 250px; object-fit: cover; object-position: center;\` (The image fills the assigned space by cropping itself, without stretching or squishing). |

### SECTION 3: LIST OF PROHIBITED ERRORS (ANTI-PATTERNS)
- ? **Prohibited**: Using static \`width\` in pixels (e.g., \`width: 450px;\`) on main elements. Always use elastic properties (\`max-width\`, \`min-width\`, or percentages).
- ? **Prohibited**: Abusing \`position: absolute;\` to visually position interface elements. This breaks the natural document flow on screen size changes.
- ? **Prohibited**: Using \`display: none;\` to "solve" spacing issues on mobile by hiding critical user information.
- ? **Prohibited**: Forcing fixed font sizes in pixels (\`px\`) that block the operating system's zoom accessibility tools.
`;

const splitMarker = '## Arquitectura y Especificación Front-End Antidesastres';
const parts = content.split(splitMarker);
if (parts.length > 1) {
    fs.writeFileSync(filePath, parts[0].trimEnd() + '\n\n' + englishText.trim(), 'utf8');
}
console.log('File translated to English successfully');
