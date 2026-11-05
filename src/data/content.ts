import { Service, Project, Testimonial, TeamMember, Stat } from '../types';

export const STUDIO_INFO = {
  name: 'NEXUS',
  tagline: 'Engineering the next generation of digital excellence.',
  email: 'hello@nexus-studio.dev',
  location: 'Porto • Lisbon • London',
  availability: 'Accepting Q1/Q2 projects',
  established: 2021,
};

export const STATS: Stat[] = [
  { value: '140+', label: 'Products Delivered', caption: 'From zero-to-one to scalable enterprise' },
  { value: '$520M+', label: 'Client Capital Raised', caption: 'Empowered high-growth tech ventures' },
  { value: '99.4%', label: 'On-Time Milestones', caption: 'Iterative sprint discipline & rigor' },
  { value: '4.9/5', label: 'Client Satisfaction', caption: 'Over 60+ verified partnerships' },
];

export const SERVICES: Service[] = [
  {
    id: 'product-engineering',
    title: 'Full-Stack Web & Cloud',
    tagline: 'High-concurrency architectures and responsive frontends',
    description: 'We architect lightning-fast, secure, and accessible web experiences using modern React, Next.js, TypeScript, and cloud-native backends.',
    icon: 'Code2',
    deliverables: ['Custom Web Applications', 'Serverless APIs & Microservices', 'Performance & Core Web Vitals', 'CI/CD & Cloud Infrastructure'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'product-design',
    title: 'UI/UX & Product Design',
    tagline: 'User journeys transformed into intuitive, addictive products',
    description: 'Deep design systems and interactive prototypes backed by user research, behavioral ergonomics, and pixel-precise execution.',
    icon: 'Palette',
    deliverables: ['Design Systems & Component Libraries', 'Interactive Figma Prototypes', 'User Research & Wireframing', 'Motion & Micro-interactions'],
    technologies: ['Figma', 'Framer', 'Design Tokens', 'Tailwind', 'Storybook', 'Micro-animations'],
  },
  {
    id: 'mobile-native',
    title: 'Mobile Applications',
    tagline: 'Fluid iOS & Android apps with 60 FPS polish',
    description: 'Cross-platform and native mobile software engineering that delivers buttery-smooth mobile experiences with offline support and instant sync.',
    icon: 'Smartphone',
    deliverables: ['Cross-Platform Apps', 'Offline-First Data Sync', 'Push & Realtime WebSockets', 'App Store & Play Store Deployment'],
    technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'SQLite', 'RevenueCat'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Data Solutions',
    tagline: 'Pragmatic intelligence woven into your core workflows',
    description: 'Integrate custom LLM pipelines, autonomous agents, semantic search, and predictive models directly into customer-facing products.',
    icon: 'Sparkles',
    deliverables: ['Custom Agentic Workflows', 'Vector Embeddings & RAG', 'Real-time Streaming APIs', 'Cost & Latency Optimization'],
    technologies: ['Gemini API', 'OpenAI', 'LangChain', 'Pinecone', 'Python', 'FastAPI'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'strata-analytics',
    title: 'Strata Cloud Engine',
    client: 'Strata FinTech Inc.',
    category: 'Web App',
    summary: 'Next-generation quantitative asset platform streaming million-data-point charts in sub-10ms intervals.',
    impact: 'Increased analyst throughput by 340% and closed a $32M Series B fundraise.',
    tags: ['React', 'TypeScript', 'WebGL', 'WebSockets', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Latency', value: '< 12ms' },
      { label: 'Active Traders', value: '45,000+' },
    ],
    featured: true,
  },
  {
    id: 'aurora-health',
    title: 'Aurora BioTrack',
    client: 'Aurora Health Global',
    category: 'Mobile',
    summary: 'Preventative healthcare monitoring suite combining telemetry from wearables with clinical predictive modeling.',
    impact: 'Ranked #1 Health App in 6 countries with over 450,000 active subscribers.',
    tags: ['React Native', 'Expo', 'HealthKit', 'Node.js', 'Biometrics'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Monthly Active', value: '450k+' },
    ],
    featured: true,
  },
  {
    id: 'vertex-system',
    title: 'Vertex Design Infrastructure',
    client: 'Vertex Enterprise',
    category: 'Design System',
    summary: 'Comprehensive multi-brand design system with 200+ accessible components adopted across 14 global product teams.',
    impact: 'Cut frontend development cycle from 6 weeks to 8 business days across all squads.',
    tags: ['Figma Tokens', 'React', 'Storybook', 'Tailwind', 'Accessibility WCAG AAA'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Engineering Velocity', value: '+300%' },
      { label: 'Component Reusability', value: '94%' },
    ],
    featured: true,
  },
  {
    id: 'pulse-ai',
    title: 'Pulse Intelligence Suite',
    client: 'Pulse Logistics',
    category: 'AI Product',
    summary: 'Autonomous freight route optimization system saving thousands of metric tons in annual transit emissions.',
    impact: 'Saved $4.2M in annual fuel expenses across fleet operations in western Europe.',
    tags: ['Python', 'FastAPI', 'Gemini AI', 'React', 'MapLibre GL'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Cost Reduction', value: '18.4%' },
      { label: 'CO2 Saved', value: '1,200T' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'NEXUS didn’t just execute our specifications; they fundamentally challenged and elevated our product architecture. Our platform went from prototype to enterprise-ready in record time.',
    author: 'Diogo Ferreira',
    role: 'Chief Technology Officer',
    company: 'Strata Cloud Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '2',
    quote: 'The level of craftsmanship and design fidelity they provide is unmatched. They feel like an elite internal founding team with limitless bandwidth and deep aesthetic taste.',
    author: 'Clara Lindqvist',
    role: 'VP of Product',
    company: 'Aurora BioTrack',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Our enterprise design system transformed from an unmanageable spaghetti codebase into a unified, high-performing design infrastructure that all our squads love using.',
    author: 'Tiago Santos',
    role: 'Head of Engineering',
    company: 'Vertex Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'alex-m',
    name: 'Alexandre Martins',
    role: 'Founder & Technical Director',
    bio: 'Ex-Principal Engineer at high-scale European scaleups. Passionate about distributed systems, React performance, and modern web ergonomics.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    social: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  },
  {
    id: 'beatriz-c',
    name: 'Beatriz Costa',
    role: 'Head of Product Design',
    bio: 'Award-winning visual designer with 9+ years creating brand identities and multi-platform design languages for global technology products.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    social: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  },
  {
    id: 'miguel-r',
    name: 'Miguel Rocha',
    role: 'Lead Systems Architect',
    bio: 'Cloud architecture specialist, Docker/Kubernetes wizard, and database tuning geek obsessed with sub-50ms server responses.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    social: { github: 'https://github.com' },
  },
  {
    id: 'sofia-v',
    name: 'Sofia Valente',
    role: 'Mobile & AI Specialist',
    bio: 'Cross-platform engineer focusing on offline-first architectures, on-device ML workflows, and silky 120Hz native interactions.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    social: { github: 'https://github.com', linkedin: 'https://linkedin.com' },
  },
];

export const CLIENT_LOGOS = [
  'STRATA FINTECH',
  'AURORA HEALTH',
  'VERTEX GLOBAL',
  'PULSE LOGISTICS',
  'LUMEN ENERGY',
  'KINETIC AI'
];
