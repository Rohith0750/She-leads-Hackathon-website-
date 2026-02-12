
import React, { useState } from 'react';

const RulesAndGuidelines: React.FC = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const toggleRule = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    const rulesData = [
        {
            id: '01',
            title: '01 — About the Hackathon',
            content: (
                <div className="space-y-4">
                    <p>
                        Nexovate'25 is a 24-hour national-level cross-domain hackathon aimed at empowering students to solve real-world challenges through innovation, creativity, and rapid prototyping.
                    </p>
                    <p>
                        The event focuses on technology-driven problem-solving across diverse tracks such as Sustainability, Healthcare, Cybersecurity, and Social Impact. Participants work in teams to develop functional prototypes or impactful ideas evaluated by industry experts and researchers.
                    </p>
                </div>
            )
        },
        {
            id: '02',
            title: '02 — Team Composition',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Teams must consist of exactly 4 undergraduate students</li>
                    <li>Interdisciplinary and cross-institutional teams are encouraged</li>
                    <li>Each student can participate in only one team</li>
                    <li>No changes to team members are allowed after registration</li>
                </ul>
            )
        },
        {
            id: '03',
            title: '03 — Registration & Selection Process',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Registration</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Teams must register exclusively via Unstop</li>
                            <li>Registration is free for all applicants</li>
                            <li>Each team must upload a project proposal using the official PPT template</li>
                            <li>Only one submission per team is allowed</li>
                            <li>All shortlisted teams will receive an email and will be invited to attend the in-person hackathon.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Selection</h4>
                        <p className="mb-2">A total of 25 teams will be shortlisted (5 teams per track) based on:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Innovation & Originality</li>
                            <li>Relevance to Chosen Theme</li>
                            <li>Practical Feasibility</li>
                            <li>Social or Technological Impact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Post-Shortlisting Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Join the official WhatsApp group</li>
                            <li>Pay a non-refundable fee of ₹800 per team</li>
                            <li>Submit a signed Parental Consent Form (mandatory for all team members)</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-500/30">
                        <p className="font-bold text-red-600 dark:text-red-400">⚠️ Failure to complete any of these steps by the deadline will result in automatic disqualification</p>
                    </div>
                </div>
            )
        },
        {
            id: '04',
            title: '04 — Event Schedule & Logistics',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Venue & Access</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>The hackathon will take place in-person at Presidency University, Bengaluru</li>
                            <li>Participants will not be allowed to leave campus during the hackathon</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Facilities Provided</h4>
                        <ul className="list-none space-y-1">
                            <li>📶 Wi-Fi access</li>
                            <li>⚡ 24-hour power backup</li>
                            <li>🏢 Secure working spaces and rest zones</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Food & Refreshments</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Day 1 → Snacks, Lunch, Dinner, Midnight Snacks</li>
                            <li>Day 2 → Breakfast, Lunch, Beverages/Snacks</li>
                        </ul>
                        <p className="mt-2 italic">Participants can bring comfort items (blankets, cushions, eye masks etc).</p>
                    </div>
                </div>
            )
        },
        {
            id: '05',
            title: '05 — Project Development Rules',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Brainstorming allowed before event</li>
                        <li>Coding/design only after hackathon start</li>
                        <li>Only software projects allowed</li>
                        <li>Open-source libraries/APIs allowed with attribution</li>
                        <li>No plagiarism or pre-built project submissions</li>
                    </ul>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Submission</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Source code must be submitted via GitHub or equivalent</li>
                            <li>Optional demo video or presentation allowed</li>
                            <li>Must submit before 24-hour deadline ends</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: '06',
            title: '06 — Mentorship & Support',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>On-site mentors available during hackathon</li>
                    <li>Guidance on design, architecture, debugging, strategy</li>
                    <li>Volunteers available for logistics support</li>
                </ul>
            )
        },
        {
            id: '07',
            title: '07 — Judging Process',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>5 Industry Judges (one per track)</li>
                        <li>Final live demo round → Top team from each track presents</li>
                    </ul>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Judging Criteria</h4>
                        <ul className="list-none space-y-1">
                            <li>Innovation & Creativity — 25%</li>
                            <li>Technical Complexity — 25%</li>
                            <li>Relevance to Track — 10%</li>
                            <li>Implementation & Functionality — 30%</li>
                            <li>Presentation & Communication — 10%</li>
                        </ul>
                    </div>
                    <p className="font-bold italic">Judges decision is final.</p>
                </div>
            )
        },
        {
            id: '08',
            title: '08 — Awards & Recognition',
            content: (
                <div className="space-y-4">
                    <h4 className="font-black text-2xl text-she-blue dark:text-[#39ff14]">₹1,00,000 Total Prize Pool</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Certificates for all participants</li>
                        <li>Networking opportunities with judges and mentors</li>
                        <li>Winners announced during closing ceremony</li>
                    </ul>
                </div>
            )
        },
        {
            id: '09',
            title: '09 — Code of Conduct & Disqualification',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Expected Behaviour</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Professional behaviour required</li>
                            <li>Follow campus and event rules</li>
                            <li>Cooperate with volunteers and organizers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Prohibited Behaviour</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Harassment or discrimination</li>
                            <li>Alcohol / Tobacco / Banned substances</li>
                            <li>Leaving venue without permission</li>
                            <li>Plagiarism or cheating</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-red-500">Consequences</h4>
                        <ul className="list-disc pl-5 space-y-1 text-red-500">
                            <li>Immediate disqualification</li>
                            <li>Removal from campus</li>
                            <li>Institution notification (if needed)</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: '10',
            title: '10 — Intellectual Property & Promotion',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Ownership</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Teams retain full ownership of projects</li>
                            <li>Organizers claim no commercial rights</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Promotion Rights</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Organizers may display winning projects for promotion</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-blue dark:text-[#39ff14]">Privacy</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Only winning project titles published</li>
                            <li>Code/content never shared without permission</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="rules" className="py-24 md:py-32 bg-slate-50 dark:bg-[#020617] transition-colors duration-700">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg className="w-8 h-8 text-she-blue dark:text-[#39ff14] animate-pulse drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
                        RULES & GUIDELINES
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Everything you need to know to participate in Nexovate 2025</p>
                </div>

                <div className="space-y-4">
                    {rulesData.map((rule, idx) => (
                        <div
                            key={rule.id}
                            className={`group bg-white dark:bg-[#0a0f1a] border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx
                                ? 'border-she-blue dark:border-[#39ff14] shadow-lg dark:shadow-[0_0_15px_rgba(57,255,20,0.15)] ring-1 ring-she-blue/20 dark:ring-[#39ff14]/20'
                                : 'border-slate-200 dark:border-white/10 hover:border-she-blue dark:hover:border-[#39ff14]/50'
                                }`}
                        >
                            <button
                                onClick={() => toggleRule(idx)}
                                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between transition-colors focus:outline-none"
                                aria-expanded={openIdx === idx}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIdx === idx ? 'text-she-blue dark:text-[#39ff14]' : 'text-slate-800 dark:text-slate-200 group-hover:text-she-blue dark:group-hover:text-[#39ff14]'
                                        }`}>
                                        {rule.title}
                                    </span>
                                </div>

                                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'bg-blue-100 dark:bg-[#39ff14]/20 rotate-45' : 'bg-slate-100 dark:bg-white/5 group-hover:bg-blue-50 dark:group-hover:bg-[#39ff14]/10'
                                    }`}>
                                    <svg
                                        className={`w-4 h-4 transition-colors duration-300 ${openIdx === idx ? 'text-she-blue dark:text-[#39ff14]' : 'text-slate-400 group-hover:text-she-blue dark:group-hover:text-[#39ff14]'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                                        <div className="h-px w-full bg-slate-100 dark:bg-white/5 mb-6"></div>
                                        <div className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                                            {rule.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Need Help? <br />
                        <span className="text-she-blue dark:text-[#39ff14] font-bold">Contact the organizing team via official website channels.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RulesAndGuidelines;
