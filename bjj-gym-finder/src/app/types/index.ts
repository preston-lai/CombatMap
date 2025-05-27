export interface Gym {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  priceRange: {
    monthly: {
      min: number;
      max: number;
    };
    annual?: {
      min: number;
      max: number;
    };
  };
  schedule: {
    [key: string]: string[]; // e.g., "Monday": ["9:00 AM - 10:30 AM", "6:00 PM - 7:30 PM"]
  };
  trialClassAvailable: boolean;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  amenities: string[];
  beltSystem: string;
  description: string;
}

export interface TrialClassBooking {
  gymId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  notes?: string;
}

export interface WaitlistEntry {
  name: string;
  email: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredLocation: string;
  interests: string[];
  createdAt: Date;
} 