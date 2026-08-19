# Frontend Design Engine (FDE)

El **Frontend Design Engine** es un motor de calidad automatizado y un ecosistema de skills de diseño para agentes de IA. Transforma peticiones ambiguas ("haz una interfaz bonita") en un pipeline riguroso y determinista que abarca desde la conceptualización UX hasta la auditoría visual.

La meta es construir un sistema de skills especializados para que un agente de IA pueda entender el producto, definir el lenguaje visual, diseñar la interfaz, implementarla, revisar su calidad técnica, detectar problemas visuales y repetir el ciclo hasta obtener un frontend profesional, consistente y altamente usable.

---

## 🏗 Architecture

La arquitectura separa estrictamente el conocimiento de diseño, la orquestación del agente y la validación determinista.

\`\`\`text
                             USER
                               │
                               ▼
                       ANTIGRAVITY
                               │
                               ▼
                        DESIGN ROUTER
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
         DISCOVERY       DESIGN SYSTEM          UX
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                            LAYOUT
                               │
                               ▼
                           COMPONENTS
                               │
                               ▼
                         VISUAL DESIGN
                               │
                               ▼
                           TYPOGRAPHY
                               │
                               ▼
                             COLOR
                               │
                               ▼
                            MOTION
                               │
                               ▼
                        ACCESSIBILITY
                               │
                               ▼
                      FRONTEND ENGINEERING
                               │
                               ▼
                         PERFORMANCE
                               │
                               ▼
                         IMPLEMENTATION
                               │
                               ▼
                      DETERMINISTIC DETECTOR
                               │
                               ▼
                         BROWSER RENDER
                               │
                               ▼
                           VISUAL QA
                               │
                               ▼
                        ANTI-AI DESIGN
                               │
                               ▼
                         DESIGN CRITIC
                               │
                    ┌──────────┴──────────┐
                    ▼                     ▼
                  PASS                   FAIL
                    │                     │
                    ▼                     ▼
                  DONE                   FIX
\`\`\`

---

## 🚀 Skills Taxonomy

El motor se descompone en un árbol exhaustivo de skills cargados dinámicamente según el contexto:

* **Discovery**: product-understanding, user-personas, ux-goals, information-priority
* **Design System**: tokens, colors, typography, spacing, radius, breakpoints
* **Layout**: composition, grid, density, hierarchy, alignment
* **Responsive**: mobile-first, adaptive-layout, touch
* **Components**: cards, forms, navigation, feedback
* **UX**: flows, empty-states, loading, errors, onboarding
* **Visual Design**: visual-hierarchy, contrast, branding
* **Typography**: scale, readability, line-height
* **Color**: semantic, contrast, dark-mode
* **Motion**: transitions, micro-interactions, reduced-motion
* **Accessibility**: a11y standards
* **Frontend Engineering**: architecture, performance
* **Anti-AI Design**: Prevención de interfaces genéricas.

---

## 🛠 Commands & Modes

El Router expone comandos de alto nivel para gestionar la sesión de diseño:

* \`/design init\`: Inicia el pipeline.
* \`/design create\`: Flujo completo desde cero.
* \`/design redesign\`: Audita la UI actual y propone mejoras.
* \`/design critique\`: Evaluación rigurosa (Puntuación 0-10).
* \`/design audit\`: Chequeo profundo (Performance, A11y, Anti-AI).
* \`/design visual-qa\`: Inicia la captura del navegador y validación visual.

---

## 📜 Design Contract (DESIGN.md)

El archivo \`DESIGN.md\` no es simple documentación; es el **Contrato de Diseño**.
Es leído por la IA para generar código, parseado por el \`Deterministic Detector\` para validar componentes, y referenciado en el \`Visual QA\`.

Debe definir los design tokens (\`brand\`, \`spacing\`, \`radius\`, \`shadows\`, \`breakpoints\`, \`motion\`) y sus directivas semánticas.

---

## 🛡 Deterministic Detector & Anti-AI

La IA nunca debe ser la única fuente de la verdad técnica.
FDE incluye un motor determinista (\`core/detector/\`) que corre análisis estático sobre el código generado para encontrar desviaciones del \`DESIGN.md\`, problemas de accesibilidad severos, o patrones repetitivos ("Anti-AI") que delatan una interfaz generada automáticamente sin criterio humano (exceso de gradients sin propósito, over-use de glassmorphism, falta de jerarquía).

---

## 📦 Installation & Usage

**Requisitos**: Node.js v22+

\`\`\`bash
# Instalar dependencias
pnpm install

# Compilar skills y el motor
npm run build
\`\`\`
