
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
  { id: 0, name: 'UNSTOP', logo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/logos/unstop-logo-color.png', tier: 'Platform Partner', description: "India's Largest Platform for Competitions & Hackathons" },
];

export const TIMELINE: TimelineItem[] = [
  { id: 1, date: '15th Feb', time: 'REGISTRATION', event: 'REGISTRATIONS OPEN', description: 'Registrations open on Unstop online platform.', icon: '📝' },
  { id: 2, date: '15th – 22nd Feb', time: 'SUBMISSION', event: 'ROUND 1 — PPT SUBMISSIONS', description: 'PPT submissions open for 10 days, allowing participants across the country to submit their ideas.', icon: '💡' },
  { id: 3, date: '27th Feb', time: 'ANNOUNCEMENT', event: 'ROUND 1 RESULTS ANNOUNCEMENT', description: 'Announcement of selected teams who will participate in the 24-hour offline round.', icon: '📢' },
  { id: 4, date: '5th March', time: 'KICKOFF', event: '24-HOUR HACKATHON BEGINS', description: 'The 24-hour She-Fight begins.', icon: '🚀' },
  { id: 5, date: '6th March', time: 'CLOSING', event: 'WINNERS ANNOUNCEMENT', description: 'Winners will be announced on the final day of the event.', icon: '🏆' },
];

export const PRIZES: Prize[] = [
  { id: 1, rank: 'First Prize', amount: '$5,000', perks: ['Internship Opportunity', 'Mentorship Program', 'Exclusive Gear'], color: 'from-yellow-400 to-yellow-600' },
  { id: 2, rank: 'Second Prize', amount: '$2,500', perks: ['Productivity Suite Licenses', 'Swag Kit'], color: 'from-slate-300 to-slate-500' },
  { id: 3, rank: 'Third Prize', amount: '$1,000', perks: ['Voucher Bundle', 'Participation Certificate'], color: 'from-orange-400 to-orange-600' },
];

export const FAQS: FAQItem[] = [
  { id: 1, question: 'Who can participate?', answer: 'Only UG (Undergraduate) students are eligible to participate.' },
  { id: 2, question: 'Is there any fee?', answer: 'Yes, the fee is ₹800 per team for shortlisted teams only.' },
  { id: 3, question: 'How do teams work?', answer: 'Teams must consist of 4 members. Interdisciplinary and cross-institutional teams are encouraged.' },
  { id: 4, question: 'What is the event format?', answer: 'It is a 24-hour offline hackathon.' },
  { id: 5, question: 'Where is the venue?', answer: 'Venue details: Presidency University.' },
];
