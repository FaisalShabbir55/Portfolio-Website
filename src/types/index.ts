export interface Owner {
  name: string;
  title: string;
  taglines: string[];
  bio: string;
  story: string;
  profile_image: string;
  location: string;
  timezone: string;
  availability: {
    status: string;
    response_time: string;
    preferred_contact: string;
  };
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp?: string;
  location: string;
  form_enabled: boolean;
  form_service: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  codepen?: string;
}

export interface CTA {
  primary: {
    text: string;
    link: string;
    style: string;
  };
  secondary: {
    text: string;
    link: string;
    style: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  long_description?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: string;
  tags: string[];
  live_url?: string;
  github_url?: string;
  featured: boolean;
  year: number;
  status: string;
  features?: string[];
  challenges?: string;
  solutions?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  company_url?: string;
  company_logo?: string;
  location: string;
  type: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  skills_developed?: string[];
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  institution_url?: string;
  institution_logo?: string;
  location: string;
  start_date: string;
  end_date: string;
  gpa?: string;
  honors?: string[];
  relevant_coursework?: string[];
  description?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issuer_logo?: string;
  issue_date: string;
  expiry_date: string | null;
  credential_id?: string;
  credential_url?: string;
  icon?: string;
}

export interface Skill {
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years: number;
  projects_count: number;
  icon?: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  design: Skill[];
}

export interface Interest {
  id: number;
  name: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface TimelineItem {
  id: number;
  type: 'education' | 'career';
  title: string;
  institution?: string;
  company?: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  achievements?: string[];
  icon?: string;
}

export interface OwnerData {
  owner: Owner;
  contact: Contact;
  social_links: SocialLinks;
  cta: CTA;
  background_style: {
    type: string;
    colors: string[];
    animation: string;
  };
  timeline: TimelineItem[];
  skills: Skills;
  skill_categories: {
    frontend: string;
    backend: string;
    tools: string;
    design: string;
  };
  learning_path: {
    currently_learning: string[];
    future_goals: string[];
  };
  projects: Project[];
  featured_projects: number[];
  project_categories: string[];
  experience: Experience[];
  achievements?: Array<{
    id: number;
    title: string;
    description: string;
    year: number;
    icon?: string;
  }>;
  education: Education[];
  certifications: Certification[];
  courses?: Array<{
    id: number;
    title: string;
    platform: string;
    completion_date: string;
    status: string;
    url?: string;
  }>;
  interests: Interest[];
  blog_articles?: Array<{
    id: number;
    title: string;
    excerpt: string;
    content?: string;
    image: string;
    publish_date: string;
    reading_time: number;
    tags: string[];
    category: string;
    featured: boolean;
  }>;
  blog_categories?: string[];
  seo: {
    site_name: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    og_image: string;
    twitter_handle?: string;
  };
  theme: {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    text_color: string;
    background_color: string;
    dark_mode: {
      enabled: boolean;
      text_color: string;
      background_color: string;
    };
  };
  settings: {
    enable_blog: boolean;
    enable_dark_mode: boolean;
    enable_animations: boolean;
    animation_speed: string;
    language: string;
  };
}

