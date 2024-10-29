import { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Emergency Preparedness: Essential Steps for Natural Disasters',
    excerpt: 'Learn the crucial steps to prepare yourself and your community for potential natural disasters.',
    content: 'Natural disasters can strike at any moment, making preparation essential. This comprehensive guide covers emergency kits, evacuation plans, and community coordination strategies...',
    author: {
      id: '1',
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Emergency Management Expert | PhD in Disaster Response'
    },
    coverImage: 'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-03-15',
    readTime: 8,
    tags: ['Emergency', 'Preparedness', 'Safety']
  },
  {
    id: '2',
    title: 'Community Response: Coordinating Local Aid During Crisis',
    excerpt: 'Effective strategies for organizing community-based disaster response and support networks.',
    content: 'When disaster strikes, local communities are often the first line of response. This article explores proven methods for organizing neighborhood support systems...',
    author: {
      id: '2',
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Community Organizer | Crisis Response Coordinator'
    },
    coverImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-03-14',
    readTime: 6,
    tags: ['Community', 'Crisis Response', 'Organization']
  },
  {
    id: '3',
    title: 'Mental Health Support During Natural Disasters',
    excerpt: 'Understanding and addressing psychological impacts of disasters on communities.',
    content: 'Natural disasters affect not just physical infrastructure but also mental well-being. Learn about coping mechanisms and support systems...',
    author: {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Clinical Psychologist | Trauma Specialist'
    },
    coverImage: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-03-13',
    readTime: 10,
    tags: ['Mental Health', 'Support', 'Psychology']
  }
];