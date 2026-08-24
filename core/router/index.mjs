/**
 * Frontend Design Engine - Router
 * Analiza el request del usuario, determina la fase actual y enruta a los skills correspondientes.
 */

export const PHASES = {
  DISCOVERY: 'discovery',
  RESEARCH: 'research',
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
  CRITIC: 'design-critic',
  YOUTUBE: 'youtube',
  SKILL_AUTHORING: 'skill-authoring',
  PROMPT_ENGINEERING: 'prompt-engineering'
};

export class DesignRouter {
  static route(prompt, context = {}) {
    const p = prompt.toLowerCase();
    const skillsToLoad = new Set();
    let primaryPhase = PHASES.UX;

    // Discovery phase triggers
    if (p.includes('init') || p.includes('nuevo proyecto') || p.includes('empezar')) {
      primaryPhase = PHASES.DISCOVERY;
      skillsToLoad.add('discovery/product-understanding');
      skillsToLoad.add('discovery/ux-goals');
    }
    
    // Design System triggers
    if (p.includes('tokens') || p.includes('tema') || p.includes('color')) {
      primaryPhase = PHASES.DESIGN_SYSTEM;
      skillsToLoad.add('design-system/tokens');
      skillsToLoad.add('design-system/colors');
    }
    
    // Layout triggers
    if (p.includes('layout') || p.includes('grid') || p.includes('espaciado')) {
      primaryPhase = PHASES.LAYOUT;
      skillsToLoad.add('layout/grid');
      skillsToLoad.add('layout/composition');
    }
    
    // Components triggers
    if (p.includes('boton') || p.includes('card') || p.includes('nav')) {
      primaryPhase = PHASES.COMPONENTS;
      skillsToLoad.add('components/buttons');
    }
    
    // QA triggers
    if (p.includes('auditar') || p.includes('revisar') || p.includes('qa')) {
      primaryPhase = PHASES.QA;
      skillsToLoad.add('visual-qa');
      skillsToLoad.add('anti-ai-design');
    }

    // --- NEW SKILLS INTEGRATION ---

    // YouTube triggers
    if (p.includes('youtube') || p.includes('video') || p.includes('transcript') || p.includes('screenshot') || p.includes('captura')) {
      primaryPhase = PHASES.YOUTUBE;
      if (p.includes('buscar') || p.includes('search')) skillsToLoad.add('youtube-search');
      if (p.includes('transcript') || p.includes('subtitulos')) skillsToLoad.add('youtube-transcript');
      if (p.includes('screenshot') || p.includes('captura') || p.includes('frame')) skillsToLoad.add('youtube-screenshot');
      if (skillsToLoad.size === 0) {
        skillsToLoad.add('youtube-search');
        skillsToLoad.add('youtube-transcript');
      }
    }

    // UX Benchmark triggers
    if (p.includes('benchmark') || p.includes('competencia') || p.includes('comparar') || p.includes('referencia')) {
      primaryPhase = PHASES.RESEARCH;
      skillsToLoad.add('ux-benchmark');
    }

    // Skill Authoring triggers
    if (p.includes('crear skill') || p.includes('nuevo skill') || p.includes('author') || p.includes('empaquetar')) {
      primaryPhase = PHASES.SKILL_AUTHORING;
      skillsToLoad.add('skill-author');
    }

    // Prompt Review triggers
    if (p.includes('prompt') || p.includes('revisar prompt') || p.includes('mejorar prompt')) {
      primaryPhase = PHASES.PROMPT_ENGINEERING;
      skillsToLoad.add('prompt-review');
    }

    // Default UX
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
