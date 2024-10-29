import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Emergency Response Training',
    description: 'Comprehensive training session for emergency response protocols and procedures.',
    startDate: '2024-03-20T09:00:00',
    endDate: '2024-03-20T17:00:00',
    location: 'Virtual Training Center',
    type: 'training',
    organizer: {
      id: '1',
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Emergency Management Expert'
    }
  },
  {
    id: '2',
    title: 'Community Preparedness Workshop',
    description: 'Learn essential skills for community disaster preparedness.',
    startDate: '2024-03-25T14:00:00',
    endDate: '2024-03-25T16:00:00',
    location: 'Community Center',
    type: 'community',
    organizer: {
      id: '2',
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Community Coordinator'
    }
  },
  {
    id: '3',
    title: 'Mental Health First Aid Course',
    description: 'Training for providing mental health support during crisis situations.',
    startDate: '2024-03-28T10:00:00',
    endDate: '2024-03-28T15:00:00',
    location: 'Online',
    type: 'training',
    organizer: {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Mental Health Specialist'
    }
  }
];