
import React from 'react';
import { Track, TeamMember, Sponsor, TimelineItem, Prize, FAQItem } from './types';

export const TRACKS: Track[] = [
  { id: 1, title: 'Artificial Intelligence', description: 'Build models that solve real-world problems using machine learning and neural networks.', icon: '🤖' },
  { id: 2, title: 'FinTech', description: 'Revolutionize banking, payments, and blockchain technology for a secure future.', icon: '💰' },
  { id: 3, title: 'HealthTech', description: 'Innovative solutions for healthcare, mental health, and medical diagnostics.', icon: '🏥' },
  { id: 4, title: 'Sustainability', description: 'Create tools to combat climate change and promote eco-friendly living.', icon: '🌱' },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: 'Alex Rivera', role: 'Lead Organizer', image: 'https://picsum.photos/200/200?random=1' },
  { id: 2, name: 'Sarah Chen', role: 'Technical Lead', image: 'https://picsum.photos/200/200?random=2' },
  { id: 3, name: 'Michael Scott', role: 'Operations Manager', image: 'https://picsum.photos/200/200?random=3' },
  { id: 4, name: 'Jessica Wang', role: 'Marketing Head', image: 'https://picsum.photos/200/200?random=4' },
];

export const SPONSORS: Sponsor[] = [
  { id: 1, name: 'TechGiant', logo: 'https://picsum.photos/200/100?random=11', tier: 'Platinum' },
  { id: 2, name: 'CloudScale', logo: 'https://picsum.photos/200/100?random=12', tier: 'Gold' },
  { id: 3, name: 'DataStream', logo: 'https://picsum.photos/200/100?random=13', tier: 'Silver' },
  { id: 4, name: 'CodeHub', logo: 'https://picsum.photos/200/100?random=14', tier: 'Silver' },
];

export const TIMELINE: TimelineItem[] = [
  { id: 1, date: 'Oct 15', time: '09:00 AM', event: 'Registration & Breakfast', description: 'Check-in at the main hall and grab some fuel.' },
  { id: 2, date: 'Oct 15', time: '11:00 AM', event: 'Opening Ceremony', description: 'Kickoff with guest speakers and track reveal.' },
  { id: 3, date: 'Oct 15', time: '12:00 PM', event: 'Hacking Begins!', description: 'Clock starts. Let the innovation begin.' },
  { id: 4, date: 'Oct 16', time: '12:00 PM', event: 'Hacking Ends', description: 'Submit your projects to the portal.' },
  { id: 5, date: 'Oct 16', time: '03:00 PM', event: 'Judging & Demos', description: 'Present your work to our expert panel.' },
];

export const PRIZES: Prize[] = [
  { id: 1, rank: 'First Prize', amount: '$5,000', perks: ['Internship Opportunity', 'Mentorship Program', 'Exclusive Gear'], color: 'from-yellow-400 to-yellow-600' },
  { id: 2, rank: 'Second Prize', amount: '$2,500', perks: ['Productivity Suite Licenses', 'Swag Kit'], color: 'from-slate-300 to-slate-500' },
  { id: 3, rank: 'Third Prize', amount: '$1,000', perks: ['Voucher Bundle', 'Participation Certificate'], color: 'from-orange-400 to-orange-600' },
];

export const FAQS: FAQItem[] = [
  { id: 1, question: 'Who can participate?', answer: 'Any university student or recent graduate (within 1 year) can join.' },
  { id: 2, question: 'Is it free?', answer: 'Yes! Registration, food, and swag are all completely free for participants.' },
  { id: 3, question: 'Team size?', answer: 'You can work solo or in teams of up to 4 people.' },
];
