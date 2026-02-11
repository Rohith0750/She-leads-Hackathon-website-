
export interface Track {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
}

export interface TimelineItem {
  id: number;
  time: string;
  date: string;
  event: string;
  description: string;
}

export interface Prize {
  id: number;
  rank: string;
  amount: string;
  perks: string[];
  color: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
