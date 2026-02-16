
import React, { useState } from 'react';
import rulebook from '../SHELEADS 2.0 RULEBOOK.docx';


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
                        SheLeads 2.0 is a 24-hour national-level women-centric hackathon designed to empower women innovators to build technology-driven solutions for real-world societal challenges.
                    </p>
                    <p>
                        The hackathon focuses on fostering leadership, creativity, collaboration, and rapid prototyping in an inclusive environment. Participants will work in teams to ideate, build, and present impactful solutions across multiple social-impact technology tracks, evaluated by expert mentors and jury members from industry and academia.
                    </p>
                </div>
            )
        },
        {
            id: '02',
            title: '02 — Team Composition',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Teams must consist of 2-4 members.</li>
                        <li>The hackathon is open for national-level participation, including Presidency University students.</li>
                        <li>Cross-institution and interdisciplinary teams are allowed and encouraged.</li>
                        <li>Each participant can be a part of only one team.</li>
                        <li>No changes to team members will be allowed after registration.</li>
                    </ul>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Mandatory Women Leadership Rule</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Every team must include at least one female participant.</li>
                            <li>The Team Leader must be a female participant (mandatory).</li>
                            <li>The female team leader will be the official point of contact for all communications.</li>
                            <li>Any team failing to comply with this rule will be disqualified.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: '03',
            title: '03 — Registration & Selection Process',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">A. Registration</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Teams must register exclusively through the Unstop platform.</li>
                            <li>Registration is open for national-level participation.</li>
                            <li>Each team must upload a project proposal using the official PPT template.</li>
                            <li>Only one submission per team is permitted.</li>
                            <li>Teams must select one track to submit their idea under.</li>
                            <li>Teams will not be allowed to change their track or idea after submission.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">B. Participation Limit</h4>
                        <p>The hackathon will host approximately 200 participants, which corresponds to around 50 teams.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">C. Selection & Shortlisting</h4>
                        <p className="mb-2">A total of 50 teams will be shortlisted, with 10 teams per track, based on:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Innovation & Originality</li>
                            <li>Relevance to the chosen track</li>
                            <li>Practical feasibility</li>
                            <li>Social or technological impact</li>
                            <li>Clarity of the proposal</li>
                        </ul>
                        <p className="mt-2 text-sm italic">All shortlisted teams will receive an email confirmation and will be invited for the offline 24-hour hackathon round. Teams who are not selected will also be notified accordingly.</p>
                    </div>
                </div>
            )
        },
        {
            id: '04',
            title: '04 — Tracks',
            content: (
                <div className="space-y-8">
                    <p className="font-medium">She Leads 2.0 includes the following 5 social-impact technology tracks:</p>

                    <div>
                        <h4 className="font-bold text-lg text-she-primary">I. EmpowerAbility</h4>
                        <p className="text-sm text-she-text/70 mb-2">Technology that empowers every ability.</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Assistive AI Systems</li>
                            <li>Speech, Vision & Multimodal Technologies</li>
                            <li>Inclusive UX/UI Design</li>
                            <li>EdTech & Language Accessibility Tools</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-she-primary">II. SheShield: Smart Safety & Empowerment</h4>
                        <p className="text-sm text-she-text/70 mb-2">Innovations that protect and empower women.</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Safety & SOS Applications</li>
                            <li>Emergency Response & Geo-Intelligence</li>
                            <li>Smart Wearables for Protection</li>
                            <li>Legal Awareness & Community Support Platforms</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-she-primary">III. AgriRise: Rural Intelligence Revolution</h4>
                        <p className="text-sm text-she-text/70 mb-2">Smart innovation for rural transformation.</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>AI-Powered Smart Farming</li>
                            <li>IoT & Crop Monitoring Systems</li>
                            <li>Supply Chain & Market Optimization</li>
                            <li>Farmer Advisory & Decision Support Systems</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-she-primary">IV. CreateX: AI for Digital Expression</h4>
                        <p className="text-sm text-she-text/70 mb-2">Reimagining media, storytelling & immersive experiences.</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>AR/VR & Immersive Platforms</li>
                            <li>AI-Driven Creative Media</li>
                            <li>Generative & Interactive Content</li>
                            <li>Next-Gen UX/UI & Experience Design</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-she-primary">V. LeadHer: FinTech & Social Impact Innovation</h4>
                        <p className="text-sm text-she-text/70 mb-2">Building financial power & leadership ecosystems.</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Women-Centric FinTech Solutions</li>
                            <li>Entrepreneurship & Startup Platforms</li>
                            <li>Skill Development & Career Tech</li>
                            <li>Policy, Governance & Impact Analytics</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: '05',
            title: '05 — Event Schedule & Logistics',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">A. Venue & Access</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>The hackathon will be conducted offline at Presidency University, Bengaluru.</li>
                            <li>Participants will not be allowed to leave the campus during the hackathon for safety and integrity reasons.</li>
                            <li>Movement outside designated hackathon zones is strictly prohibited unless authorized by organizers for emergencies.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">B. Facilities Provided</h4>
                        <ul className="list-none space-y-1">
                            <li>📶 Wi-Fi access for all participants</li>
                            <li>⚡ Power backup</li>
                            <li>🏢 Secure working spaces and designated rest zones</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">C. Food & Refreshments</h4>
                        <p className="mb-2">Organizers will provide:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Day 1: Snacks, Lunch, Dinner, Midnight snacks</li>
                            <li>Day 2: Breakfast, Lunch, Beverages/Snacks</li>
                        </ul>
                        <p className="mt-2 text-sm italic">Participants may carry small comfort items (blankets, cushions, eye masks, etc.) for the overnight stay.<br />All belongings may be checked upon entry, and the organizers will not be responsible for loss or damage to personal items.</p>
                    </div>
                </div>
            )
        },
        {
            id: '06',
            title: '06 — Project Development Rules',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Teams may brainstorm and plan before the event.</li>
                        <li>However, all implementation (coding, design, hardware assembly) must begin only after the hackathon officially starts.</li>
                        <li>Both software and hardware projects are allowed.</li>
                        <li>Use of open-source libraries, APIs, and public datasets is permitted with proper attribution.</li>
                        <li>Plagiarism, copying, or submitting previously completed work is strictly prohibited.</li>
                    </ul>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Items to Submit</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>A GitHub repository link (or equivalent)</li>
                            <li>A working prototype/demo</li>
                            <li>(Optional) a demo video or final presentation</li>
                        </ul>
                        <p className="mt-2 text-red-500 font-bold text-sm">Submissions must be completed before the deadline. Late submissions will not be accepted.</p>
                    </div>
                </div>
            )
        },
        {
            id: '07',
            title: '07 — Mentorship & Support',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Teams will receive on-site mentorship and technical assistance during the hackathon if and when needed.</li>
                    <li>Mentors will be available to provide guidance on design, architecture, strategy, or debugging.</li>
                    <li>Organizers will also assign support volunteers to assist with logistics and queries.</li>
                </ul>
            )
        },
        {
            id: '08',
            title: '08 — Judging Process',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>A panel of 5 expert judges (one per track) from industry will evaluate all the teams in the respective track in each of the evaluation rounds and during final submission.</li>
                        <li>A live pitching/demo round will be held after the build phase, where the top team from each track will present their solution to all the jury members.</li>
                        <li>Judges’ decisions are final and non-negotiable.</li>
                    </ul>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Judging Criteria</h4>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left">
                                <thead className="text-xs uppercase bg-she-navbar/10 text-she-text">
                                    <tr>
                                        <th scope="col" className="px-4 py-2">Evaluation Aspect</th>
                                        <th scope="col" className="px-4 py-2">Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-she-text/10">
                                        <td className="px-4 py-2 font-medium">Innovation & Creativity</td>
                                        <td className="px-4 py-2">25%</td>
                                    </tr>
                                    <tr className="border-b border-she-text/10">
                                        <td className="px-4 py-2 font-medium">Technical Complexity</td>
                                        <td className="px-4 py-2">25%</td>
                                    </tr>
                                    <tr className="border-b border-she-text/10">
                                        <td className="px-4 py-2 font-medium">Relevance to Track</td>
                                        <td className="px-4 py-2">10%</td>
                                    </tr>
                                    <tr className="border-b border-she-text/10">
                                        <td className="px-4 py-2 font-medium">Implementation & Functionality</td>
                                        <td className="px-4 py-2">30%</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 font-medium">Presentation & Communication</td>
                                        <td className="px-4 py-2">10%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: '09',
            title: '09 — Awards & Recognition',
            content: (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-black text-2xl text-she-primary mb-2">Total Cash Prize Pool: ₹60,000</h4>
                        <ul className="list-none space-y-2 font-bold text-lg">
                            <li className="flex items-center gap-2">🥇 1st Place: ₹30,000</li>
                            <li className="flex items-center gap-2">🥈 2nd Place: ₹20,000</li>
                            <li className="flex items-center gap-2">🥉 3rd Place: ₹10,000</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Additional Perks</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Winners will be announced during closing ceremony</li>
                            <li>Certificates will be provided for all participants</li>
                            <li>Opportunities to network with judges, mentors, and guests for potential incubation/follow-up support</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: '10',
            title: '10 — Code of Conduct & Disqualification',
            content: (
                <div className="space-y-6">
                    <p>SHELEADS 2.0 is committed to providing a respectful, safe, and fair environment for all.</p>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Expected Behaviour</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Maintain professionalism and respect with peers, mentors, and staff.</li>
                            <li>Follow all University and Hackathon rules.</li>
                            <li>Cooperate with volunteers and organizers at all times.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Prohibited Behaviour</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Harassment, discrimination, or inappropriate conduct</li>
                            <li>Use of alcohol, tobacco, or banned substances</li>
                            <li>Leaving the venue without approval</li>
                            <li>Plagiarism, cheating, or code misrepresentation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-red-500">Consequences</h4>
                        <ul className="list-disc pl-5 space-y-1 text-red-500">
                            <li>Immediate disqualification</li>
                            <li>Removal from campus</li>
                            <li>Notification to home institution (if required)</li>
                        </ul>
                        <p className="mt-2 text-sm italic">Organizers reserve the right to investigate and enforce action on any misconduct.</p>
                    </div>
                </div>
            )
        },
        {
            id: '11',
            title: '11 — Intellectual Property & Promotion',
            content: (
                <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>All participants retain full ownership of their projects and intellectual property.</li>
                        <li>Organizers will not claim any commercial rights or profits.</li>
                        <li>By participating, teams grant the organizers non-exclusive rights to publicly display winning projects, team names, or visuals for event promotion.</li>
                        <li>Only winning project titles will be published post-event. Project code/content will not be shared without explicit permission.</li>
                    </ul>

                    <div className="mt-6 p-4 bg-she-navbar/5 rounded-xl border border-she-navbar/10">
                        <h4 className="font-bold text-lg mb-2 text-she-primary">Final Notes & Compliance</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>The event schedule, rules, logistics are subject to change at discretion of organizers.</li>
                            <li>All official communication will be sent through email and WhatsApp only.</li>
                            <li>By registering, each participant agrees to abide by all terms listed in this handbook.</li>
                        </ul>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="font-bold">For Queries & Support:</p>
                        <a href="mailto:harvest-club@presidencyuniversity.in" className="text-she-primary hover:underline">harvest-club@presidencyuniversity.in</a>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="rules" className="py-24 md:py-32 transition-colors duration-700">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg className="w-8 h-8 text-she-primary animate-pulse drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-she-text mb-4 tracking-tighter uppercase">
                        RULES & GUIDELINES
                    </h2>
                    <p className="text-she-text/70 text-lg font-medium">Everything you need to know to participate in Nexovate 2026</p>
                </div>

                <div className="space-y-4">
                    {rulesData.map((rule, idx) => (
                        <div
                            key={rule.id}
                            className={`group bg-she-card border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx
                                ? 'border-she-primary shadow-lg ring-1 ring-she-primary/20'
                                : 'border-she-deepPurple/10 hover:border-she-primary'
                                }`}
                        >
                            <button
                                onClick={() => toggleRule(idx)}
                                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between transition-colors focus:outline-none"
                                aria-expanded={openIdx === idx}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${openIdx === idx ? 'text-she-primary' : 'text-she-text group-hover:text-she-primary'
                                        }`}>
                                        {rule.title}
                                    </span>
                                </div>

                                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'bg-she-primary/10 rotate-45' : 'bg-she-primary/5 group-hover:bg-she-primary/10'
                                    }`}>
                                    <svg
                                        className={`w-4 h-4 transition-colors duration-300 ${openIdx === idx ? 'text-she-primary' : 'text-she-secondaryText group-hover:text-she-primary'}`}
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
                                        <div className="h-px w-full bg-she-deepPurple/5 mb-6"></div>
                                        <div className="text-she-text/80 text-base md:text-lg font-medium leading-relaxed">
                                            {rule.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-12 flex justify-center">
                    <a
                        href={rulebook}
                        download="SheLeads_Rulebook.docx"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-she-primary hover:bg-she-primary/90 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-she-primary/25"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Official Rulebook
                    </a>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-she-text/60 text-sm">
                        Need Help? <br />
                        <span className="text-she-primary font-bold">Contact the organizing team via official website channels.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RulesAndGuidelines;
