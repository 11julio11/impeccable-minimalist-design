---
name: anti-ai-design
category: QA
description: "Detects and prevents generic, low-effort AI-generated UI patterns."
---

# ANTI-AI-DESIGN

## 🎯 Objetivo
Detects and prevents generic, low-effort AI-generated UI patterns.

## ⚡ Directivas Core
- **No Gratuitous Gradients**: Evita fondos degradados sin propósito semántico.
- **No Unjustified Glassmorphism**: El blur/backdrop-filter solo debe usarse en overlays, no en tarjetas regulares.
- **Strict Hierarchy**: Usa escalas tipográficas claras en lugar de simples cambios de color.

## 🛑 Anti-Patrones (Evitar)
- No aplicar estilos genéricos sin contexto.
- No usar librerías externas si se puede resolver con CSS moderno puro.
- Respetar siempre el `DESIGN.md` del proyecto.

## 🛠 Modo de Operación
1. **Analizar**: Revisa el componente o layout actual.
2. **Consultar**: Lee el `DESIGN.md` para obtener los design tokens.
3. **Ejecutar**: Aplica las reglas estrictas detalladas arriba.
