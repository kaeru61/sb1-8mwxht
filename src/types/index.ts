export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  coverImage: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Comment {
  id: string;
  content: string;
  author: Author;
  publishedAt: string;
}

export interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  type: 'full-time' | 'part-time' | 'volunteer' | 'temporary';
  urgency: 'immediate' | 'high' | 'normal';
  description: string;
  requirements: string[];
  salary?: string;
  contactEmail: string;
  postedAt: string;
  deadline?: string;
  logo: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  type: 'training' | 'emergency' | 'community' | 'other';
  organizer: Author;
}

export type Page = 'articles' | 'jobs' | 'calendar';