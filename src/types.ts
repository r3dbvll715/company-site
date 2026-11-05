export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Web App' | 'Mobile' | 'Design System' | 'AI Product';
  summary: string;
  impact: string;
  tags: string[];
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Stat {
  value: string;
  label: string;
  caption: string;
}
