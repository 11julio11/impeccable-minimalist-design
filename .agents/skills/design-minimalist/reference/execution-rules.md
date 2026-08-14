# Strict Execution Rules: Incremental Styling

When applying any style modifier (e.g. "make it futuristic", "neon", "quieter", "bolder"), you MUST follow these absolute rules:

1. **NO DELETION OF USER DATA**: You must preserve the existing component structure, props, arrays, strings, and textual content. Never flatten a mapped list of items into a generic template.
2. **NO ARCHITECTURE REPLACEMENT**: Do not delete the user's React components, HTML structure, or logical files just to replace them with a generic UI pattern unless explicitly instructed by the user to completely rewrite the component from scratch.
3. **CSS-ONLY OR CLASS-ONLY STYLING**: Achieve the requested visual effect exclusively by modifying CSS (`.css` files, inline styles) or adding CSS classes (`className`). 
4. **INCREMENTAL IMPROVEMENT**: Your role is to take the user's *existing* UI and elevate it, not to throw away their hard work and substitute it with a pre-built template.

**Failure to follow these rules will result in catastrophic data loss for the user.**
If a design instruction conflicts with these execution rules, these execution rules ALWAYS win.
