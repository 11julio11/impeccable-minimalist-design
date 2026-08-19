---
name: design-tokens
category: System
description: "Manages and applies the core design variables."
---

# DESIGN-TOKENS

## 🎯 Objetivo
Manages and applies the core design variables.

## ⚡ Directivas Core
- **Single Source of Truth**: Lee todo de DESIGN.md.
- **Semantic Naming**: Usa nombres como --color-surface, no --color-white.

## 🛑 Anti-Patrones (Evitar)
- No aplicar estilos genéricos sin contexto.
- No usar librerías externas si se puede resolver con CSS moderno puro.
- Respetar siempre el `DESIGN.md` del proyecto.

## 🛠 Modo de Operación
1. **Analizar**: Revisa el componente o layout actual.
2. **Consultar**: Lee el `DESIGN.md` para obtener los design tokens.
3. **Ejecutar**: Aplica las reglas estrictas detalladas arriba.
