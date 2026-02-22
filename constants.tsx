
import React from 'react';
import { Track, TeamMember, Sponsor, TimelineItem, Prize, FAQItem } from './types';

export const TRACKS: Track[] = [
  {
    id: 1,
    title: 'EmpowerAbility',
    shortDescription: 'Build inclusive technologies using AI and accessible design to empower people of all abilities.',
    fullDescription: 'EmpowerAbility focuses on building assistive and inclusive technologies using artificial intelligence, multimodal systems, and accessibility-first design to empower individuals with disabilities.',
    subTracks: [
      'Assistive AI Systems',
      'Speech, Vision & Multimodal Technologies',
      'Inclusive UX/UI Design',
      'EdTech & Language Accessibility Tools'
    ],
    themeColor: 'cyan',
    iconName: 'accessibility'
  },
  {
    id: 2,
    title: 'SheShield',
    shortDescription: 'Develop intelligent safety and protection solutions for women.',
    fullDescription: 'SheShield focuses on creating smart safety systems, emergency response tools, and platforms that enhance personal security and empowerment.',
    subTracks: [
      'Safety & SOS Applications',
      'Emergency Response & Geo-Intelligence',
      'Smart Wearables for Protection',
      'Legal Awareness & Community Support Platforms'
    ],
    themeColor: 'purple',
    iconName: 'shield-check'
  },
  {
    id: 3,
    title: 'AgriRise',
    shortDescription: 'Use AI and smart technology to transform agriculture and rural communities.',
    fullDescription: 'AgriRise promotes innovation in smart farming, crop monitoring, and rural intelligence using AI, IoT, and data-driven systems.',
    subTracks: [
      'AI-Powered Smart Farming',
      'IoT & Crop Monitoring Systems',
      'Supply Chain & Market Optimization',
      'Farmer Advisory & Decision Support Systems'
    ],
    themeColor: 'green',
    iconName: 'sprout'
  },
  {
    id: 4,
    title: 'CreateX',
    shortDescription: 'Build next-generation AI media, creative, and immersive experiences.',
    fullDescription: 'CreateX focuses on generative AI, immersive platforms, and digital storytelling experiences powered by modern AI technologies.',
    subTracks: [
      'AR/VR & Immersive Platforms',
      'AI-Driven Creative Media',
      'Generative & Interactive Content',
      'Next-Gen UX/UI & Experience Design'
    ],
    themeColor: 'pink',
    iconName: 'sparkles'
  },
  {
    id: 5,
    title: 'LeadHer',
    shortDescription: 'Create fintech and leadership platforms that empower women.',
    fullDescription: 'LeadHer focuses on financial empowerment, entrepreneurship tools, and social impact platforms for women.',
    subTracks: [
      'Women-Centric FinTech Solutions',
      'Entrepreneurship & Startup Platforms',
      'Skill Development & Career Tech',
      'Policy, Governance & Impact Analytics'
    ],
    themeColor: 'yellow',
    iconName: 'credit-card'
  }
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

import { UserPlus, FileText, Megaphone, Rocket, Trophy } from 'lucide-react';

export const TIMELINE: TimelineItem[] = [
  { id: 1, date: '18 Feb 26', time: '06:00 PM IST', event: 'Registration Starts', description: 'Registrations open on Unstop online platform.', icon: <UserPlus className="w-8 h-8 text-she-primary" />, status: 'LIVE NOW' },
  { id: 2, date: '27 Feb 26', time: '11:59 PM IST', event: 'Registration Deadline', description: 'PPT submissions deadline globally.', icon: <FileText className="w-8 h-8 text-she-primary" /> },
  { id: 3, date: '28 Feb 26', time: '06:00 PM IST', event: 'Shortlisted Teams Announcement', description: 'Announcement of teams for the offline round.', icon: <Megaphone className="w-8 h-8 text-she-primary" /> },
  { id: 4, date: '05 Mar 26', time: '10:00 AM IST', event: 'Offline Hackathon Starts', description: 'The 24-hour hackathon begins at venue.', icon: <Rocket className="w-8 h-8 text-she-primary" /> },
  { id: 5, date: '06 Mar 26', time: '02:00 PM IST', event: 'Winners Announcement', description: 'Grand finale and award ceremony.', icon: <Trophy className="w-8 h-8 text-she-primary" /> },
];

export const PRIZES: Prize[] = [
  { id: 1, rank: 'First Prize', amount: '₹30,000', perks: ['Certificates'], color: 'from-yellow-400 to-yellow-600' },
  { id: 2, rank: 'Second Prize', amount: '₹20,000', perks: ['Certificates'], color: 'from-slate-300 to-slate-500' },
  { id: 3, rank: 'Third Prize', amount: '₹10,000', perks: ['Certificates'], color: 'from-orange-400 to-orange-600' },
];

export const FAQS: FAQItem[] = [
  { id: 1, question: 'Who can participate?', answer: 'Only UG (Undergraduate) students are eligible to participate.' },
  { id: 2, question: 'Is there any fee?', answer: 'Yes, the fee is ₹800 per team for shortlisted teams only.' },
  { id: 3, question: 'How do teams work?', answer: 'Teams must consist of exactly 4 members. Each team must be led by a woman, while the remaining members may be of any gender. Interdisciplinary and cross-institutional teams are allowed.' },
  { id: 4, question: 'What is the event format?', answer: 'It is a 24-hour offline hackathon.' },
  { id: 5, question: 'Where is the venue?', answer: 'Venue details: Presidency University.' },
];
