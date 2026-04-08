export interface SectionCard {
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  youtubeLabel?: string;
  youtubeStat?: string;
  thumbnail?: string;
  videoUrl?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}

export interface NavLink {
  text: string;
  href: string;
}
