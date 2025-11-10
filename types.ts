export type Language = 'es' | 'en' | 'pt';

export type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

export interface POI {
  name: string;
  address: string;
  category: 'food' | 'shopping' | 'culture' | 'health' | 'education';
  lat: number;
  lon: number;
  link?: string;
  distance?: number;
}

export interface Referral {
  name: string;
  specialty: string;
  whatsapp: string;
  qr: string;
  emoji: string;
  rating?: number;
  referralsCount?: number;
  testimonialKey?: string; 
}

export interface ReferralsData {
  [key: string]: Referral[];
}

export interface Testimonial {
    id: string;
    name: string;
    deal: string;
    quote: string;
}
