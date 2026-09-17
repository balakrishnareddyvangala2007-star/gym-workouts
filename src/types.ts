export interface Program {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  intensity: 'Medium' | 'High' | 'Extreme';
  duration: string;
  image: string;
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  highlightTag: 'Trainers' | 'Equipment' | 'Atmosphere' | 'Results';
  avatar?: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  period: string;
  price: number;
  originalPrice: number;
  popular?: boolean;
  savings?: string;
  features: string[];
  highlight: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  experienceYears: number;
  specialty: string;
  bio: string;
  image: string;
}

export interface GymGalleryItem {
  id: string;
  title: string;
  category: 'Machines' | 'Free Weights' | 'Cardio' | 'Functional';
  image: string;
  description: string;
}

export interface FreeTrialForm {
  name: string;
  phone: string;
  email: string;
  goal: string;
  preferredTime: string;
  slotDate: string;
}
