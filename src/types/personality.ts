export interface Intro {
  greeting: string;
  roles: string[];
  mission: string;
}

export interface Trait {
  description: string;
  manifestation: string;
  quote: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  emerging: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface CurrentFocus {
  projects: Project[];
  learning: string[];
}

export interface InterestCategory {
  category: string;
  items: string[];
}

export interface Vibe {
  current: string[];
  emoji: string[];
}

export interface Values {
  impact: string;
  growth: string;
  quality: string;
  innovation: string;
  collaboration: string;
}

export interface Goals {
  short_term: string[];
  long_term: string[];
}

export interface Personality {
  intro: Intro;
  traits: {
    builder: Trait;
    explorer: Trait;
    innovator: Trait;
    collaborator: Trait;
  };
  tech_stack: TechStack;
  current_focus: CurrentFocus;
  interests: InterestCategory[];
  vibe: Vibe;
  values: Values;
  goals: Goals;
} 