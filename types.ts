import React from 'react';
export interface Track {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subTracks: string[];
  themeColor: string;
  iconName: 'accessibility' | 'shield-check' | 'sprout' | 'sparkles' | 'credit-card';
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
  tier: 'Platform Partner' | 'Platinum' | 'Gold' | 'Silver';
  description?: string;
}

export interface TimelineItem {
  id: number;
  time: string;
  date: string;
  event: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
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
