import type { Creator } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const creators: Creator[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    username: 'alicej',
    email: 'alice@example.com',
    avatarUrl: getImage('creator-1'),
    profilePictureUrl: getImage('creator-1'),
    role: 'creator',
    bio: 'Digital artist and content creator sharing my journey. I offer personalized art critiques and tutorials.',
    socials: {
      instagram: 'alicej.art',
      twitter: 'alicej_tweets',
      tiktok: 'alice.creates',
    },
    isVerified: true,
    categories: ['Art', 'Design', 'Education'],
    services: [
      { id: 's1', name: 'Portfolio Review', description: 'A 30-minute detailed review of your art portfolio.', duration: 30, price: 75 },
      { id: 's2', name: '1-on-1 Tutorial', description: 'A 60-minute personalized tutorial on digital painting techniques.', duration: 60, price: 150 },
    ],
    availability: {
      workingHours: {
        monday: [{ start: '10:00', end: '18:00' }],
        tuesday: [{ start: '10:00', end: '18:00' }],
        wednesday: [{ start: '10:00', end: '14:00' }],
      },
      daysOff: ['2024-12-25', '2025-01-01'],
    },
  },
  {
    id: '2',
    name: 'Bob Smith',
    username: 'bobsmith',
    email: 'bob@example.com',
    avatarUrl: getImage('creator-2'),
    profilePictureUrl: getImage('creator-2'),
    role: 'creator',
    bio: 'Fitness coach and YouTuber. Let\'s work together to achieve your fitness goals.',
    socials: {
      instagram: 'fitwithbob',
      twitter: 'bobsmithfit',
    },
    isVerified: true,
    categories: ['Fitness', 'Health', 'Lifestyle'],
    services: [
      { id: 's3', name: 'Quick Fitness Consult', description: 'A 15-minute chat to discuss your fitness goals.', duration: 15, price: 30 },
      { id: 's4', name: 'Personalized Workout Plan', description: 'A 60-minute session to create a workout plan tailored to you.', duration: 60, price: 120 },
    ],
    availability: {
      workingHours: {
        monday: [{ start: '08:00', end: '12:00' }],
        wednesday: [{ start: '08:00', end: '12:00' }],
        friday: [{ start: '08:00', end: '12:00' }],
      },
      daysOff: [],
    },
  },
  {
    id: '3',
    name: 'Charlie Brown',
    username: 'charlieb',
    email: 'charlie@example.com',
    avatarUrl: getImage('creator-3'),
    profilePictureUrl: getImage('creator-3'),
    role: 'creator',
    bio: 'Tech reviewer and startup advisor. I help founders navigate the startup world.',
    socials: {
      twitter: 'charlieb_tech',
    },
    isVerified: false,
    categories: ['Tech', 'Business', 'Startups'],
    services: [
      { id: 's5', name: 'Startup Pitch Deck Review', description: '30-minute review of your pitch deck with actionable feedback.', duration: 30, price: 250 },
      { id: 's6', name: 'Tech Career Advice', description: '30 minutes to discuss your career path in the tech industry.', duration: 30, price: 100 },
    ],
    availability: {
      workingHours: {
        tuesday: [{ start: '14:00', end: '19:00' }],
        thursday: [{ start: '14:00', end: '19:00' }],
      },
      daysOff: [],
    },
  },
    {
    id: '4',
    name: 'Diana Prince',
    username: 'dianaprince',
    email: 'diana@example.com',
    avatarUrl: getImage('creator-4'),
    profilePictureUrl: getImage('creator-4'),
    role: 'creator',
    bio: 'Travel blogger and photographer. Let me help you plan your next adventure.',
    socials: {
      instagram: 'diana.travels',
      tiktok: 'diana.explores'
    },
    isVerified: true,
    categories: ['Travel', 'Photography'],
    services: [
      { id: 's7', name: 'Itinerary Planning Session', description: 'A 30-minute call to help plan your next trip.', duration: 30, price: 80 },
    ],
    availability: {
      workingHours: {
        saturday: [{ start: '10:00', end: '16:00' }],
        sunday: [{ start: '10:00', end: '16:00' }],
      },
      daysOff: [],
    },
  },
];
