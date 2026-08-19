/**
 * Frontend Design Engine - Router
 * Analiza el request del usuario, determina la fase actual y enruta a los skills correspondientes.
 */

export const PHASES = {
  DISCOVERY: 'discovery',
  DESIGN_SYSTEM: 'design-system',
  UX: 'ux',
  LAYOUT: 'layout',
  COMPONENTS: 'components',
  VISUAL_DESIGN: 'visual-design',
  TYPOGRAPHY: 'typography',
  COLOR: 'color',
  MOTION: 'motion',
  ACCESSIBILITY: 'accessibility',
  ENGINEERING: 'frontend-engineering',
  QA: 'visual-qa',
  CRITIC: 'design-critic'
};

export class DesignRouter {
  static route(prompt, context = {}) {
    const p = prompt.toLowerCase();
    const skillsToLoad = new Set();
    let primaryPhase = PHASES.UX;

    if (p.includes('init') || p.includes('nuevo proyecto') || p.includes('empezar')) {
      primaryPhase = PHASES.DISCOVERY;
      skillsToLoad.add('discovery/product-understanding');
      skillsToLoad.add('discovery/ux-goals');
    }
    if (p.includes('tokens') || p.includes('tema') || p.includes('color')) {
      primaryPhase = PHASES.DESIGN_SYSTEM;
      skillsToLoad.add('design-system/tokens');
      skillsToLoad.add('design-system/colors');
    }
    if (p.includes('layout') || p.includes('grid') || p.includes('espaciado')) {
      primaryPhase = PHASES.LAYOUT;
      skillsToLoad.add('layout/grid');
      skillsToLoad.add('layout/composition');
    }
    if (p.includes('boton') || p.includes('card') || p.includes('nav')) {
      primaryPhase = PHASES.COMPONENTS;
      skillsToLoad.add('components/buttons');
    }
    if (p.includes('auditar') || p.includes('revisar') || p.includes('qa')) {
      primaryPhase = PHASES.QA;
      skillsToLoad.add('visual-qa');
      skillsToLoad.add('anti-ai-design');
    }
    if (skillsToLoad.size === 0) {
      skillsToLoad.add('ux/flows');
      skillsToLoad.add('layout/hierarchy');
    }
    return {
      phase: primaryPhase,
      skills: Array.from(skillsToLoad)
    };
  }
}
