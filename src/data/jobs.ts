import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Emergency Response Coordinator',
    organization: 'Global Relief Initiative',
    location: 'New York, NY (Remote Available)',
    type: 'full-time',
    urgency: 'immediate',
    description: 'Seeking an experienced coordinator to manage emergency response teams during natural disasters and humanitarian crises. Lead international relief efforts and coordinate with local authorities.',
    requirements: [
      '5+ years of emergency management experience',
      'Strong leadership and communication skills',
      'Experience with disaster response protocols',
      'Available for immediate deployment',
      'Multilingual preferred (English, Spanish)'
    ],
    salary: '$75,000 - $95,000',
    contactEmail: 'careers@globalrelief.org',
    postedAt: '2024-03-15',
    deadline: '2024-03-30',
    logo: 'https://images.unsplash.com/photo-1494172892981-ce47ca685ecd?auto=format&fit=crop&q=80&w=150&h=150',
    tags: ['Emergency Response', 'Management', 'Humanitarian']
  },
  {
    id: '2',
    title: 'Community Support Volunteer',
    organization: 'Local Aid Network',
    location: 'Multiple Locations',
    type: 'volunteer',
    urgency: 'high',
    description: 'Join our network of volunteers providing essential support to communities affected by recent natural disasters. Help with distribution of supplies and community outreach.',
    requirements: [
      'No prior experience required',
      'Must be 18 years or older',
      'Valid driver\'s license',
      'Commitment of at least 10 hours per week',
      'Completion of provided training'
    ],
    contactEmail: 'volunteer@localaid.org',
    postedAt: '2024-03-14',
    logo: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=150&h=150',
    tags: ['Volunteer', 'Community', 'Disaster Relief']
  },
  {
    id: '3',
    title: 'Disaster Mental Health Specialist',
    organization: 'Crisis Care International',
    location: 'Remote',
    type: 'full-time',
    urgency: 'high',
    description: 'Provide mental health support and counseling to individuals and communities affected by natural disasters. Develop and implement crisis intervention programs.',
    requirements: [
      'Licensed Mental Health Professional',
      'Experience in trauma counseling',
      'Crisis intervention certification',
      'Excellent communication skills',
      'Willing to travel when needed'
    ],
    salary: '$65,000 - $85,000',
    contactEmail: 'careers@crisiscare.org',
    postedAt: '2024-03-13',
    deadline: '2024-04-15',
    logo: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=150&h=150',
    tags: ['Mental Health', 'Healthcare', 'Crisis Support']
  },
  {
    id: '4',
    title: 'Emergency Logistics Coordinator',
    organization: 'Rapid Response Team',
    location: 'Miami, FL',
    type: 'full-time',
    urgency: 'immediate',
    description: 'Coordinate the distribution of emergency supplies and manage logistics for disaster response operations. Ensure efficient delivery of aid to affected areas.',
    requirements: [
      'Bachelor\'s degree in logistics or related field',
      '3+ years experience in emergency logistics',
      'Strong organizational skills',
      'Experience with supply chain management',
      'Available for immediate start'
    ],
    salary: '$60,000 - $80,000',
    contactEmail: 'hr@rapidresponse.org',
    postedAt: '2024-03-12',
    deadline: '2024-03-26',
    logo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=150&h=150',
    tags: ['Logistics', 'Emergency Response', 'Supply Chain']
  },
  {
    id: '5',
    title: 'Disaster Recovery Specialist',
    organization: 'Community Rebuild Foundation',
    location: 'Houston, TX',
    type: 'part-time',
    urgency: 'normal',
    description: 'Help communities rebuild after natural disasters. Assess damage, coordinate with contractors, and manage recovery projects.',
    requirements: [
      'Construction or project management experience',
      'Knowledge of building codes and regulations',
      'Strong problem-solving skills',
      'Experience with disaster recovery preferred',
      'Flexible schedule'
    ],
    salary: '$30 - $40 per hour',
    contactEmail: 'jobs@rebuildfoundation.org',
    postedAt: '2024-03-11',
    logo: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=150&h=150',
    tags: ['Construction', 'Recovery', 'Project Management']
  }
];