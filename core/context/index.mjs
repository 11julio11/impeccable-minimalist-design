import fs from 'fs';
import path from 'path';

/**
 * Frontend Design Engine - Context Parser
 * Lee y parsea el archivo DESIGN.md (El Contrato de Diseño) de un proyecto.
 */

export class DesignContext {
  static getDesignFilePath(projectRoot) {
    return path.join(projectRoot, 'DESIGN.md');
  }

  static exists(projectRoot) {
    return fs.existsSync(this.getDesignFilePath(projectRoot));
  }

  static parse(projectRoot) {
    if (!this.exists(projectRoot)) {
      return null;
    }

    const content = fs.readFileSync(this.getDesignFilePath(projectRoot), 'utf8');
    
    // Extracción básica por expresiones regulares (se puede evolucionar a AST de Markdown)
    const tokens = {
      brand: this.extractSection(content, 'Brand'),
      colors: this.extractSection(content, 'Colors'),
      typography: this.extractSection(content, 'Typography'),
      spacing: this.extractSection(content, 'Spacing'),
      radius: this.extractSection(content, 'Radius'),
      shadows: this.extractSection(content, 'Shadows'),
      breakpoints: this.extractSection(content, 'Breakpoints'),
      motion: this.extractSection(content, 'Motion')
    };

    return tokens;
  }

  static extractSection(content, sectionName) {
    const regex = new RegExp(`##\\s+${sectionName}\\s*\\n([^#]+)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : null;
  }

  static generateTemplate(projectRoot) {
    const template = `# Design Contract

## Brand
- Identity: Minimalist, clean, Google-like aesthetic.
- Emotion: Professional, trustworthy.

## Colors
- Primary: #000000
- Background: #FFFFFF
- Surface: #F8F9FA
- Error: #D32F2F

## Typography
- Font Family: 'Inter', sans-serif
- Base Size: 16px

## Spacing
- Base Unit: 4px
- Scale: 4, 8, 16, 24, 32, 48, 64

## Radius
- Base: 8px (Cards, Buttons)
- Pill: 9999px (Badges)

## Shadows
- Low: 0 1px 3px rgba(0,0,0,0.12)
- High: 0 8px 24px rgba(0,0,0,0.12)

## Breakpoints
- Mobile: 0 - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Motion
- Standard: 200ms ease-in-out
`;
    fs.writeFileSync(this.getDesignFilePath(projectRoot), template, 'utf8');
    return true;
  }
}
