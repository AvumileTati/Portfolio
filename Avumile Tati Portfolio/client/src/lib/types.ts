export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  proficiency: number;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'design' | 'cloud' | 'tools';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
