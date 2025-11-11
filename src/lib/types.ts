export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
  role: 'creator' | 'client';
}

export interface Creator extends User {
  role: 'creator';
  bio: string;
  profilePictureUrl: string;
  socials: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  isVerified: boolean;
  categories: string[];
  services: Service[];
  availability: Availability;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: 15 | 30 | 60;
  price: number;
}

export interface Availability {
  workingHours: {
    [day: string]: { start: string; end: string }[]; // e.g., 'monday': [{ start: '09:00', end: '17:00' }]
  };
  daysOff: string[]; // e.g., ['2024-12-25']
}

export interface Booking {
  id: string;
  clientId: string;
  creatorId: string;
  serviceId: string;
  startTime: Date;
  endTime: Date;
  status: 'confirmed' | 'cancelled';
}
