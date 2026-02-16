
import React, { useState, useEffect } from 'react';
import pptFile from '../assets/SheLeads_2.0_ppt_template.pdf';
import sheLeadsLogo from '../assets/logo_sheleads.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'tracks', 'timeline', 'sponsors', 'prizes', 'find-us', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId.toUpperCase().replace('-', ' '));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TRACKS', href: '#tracks' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'SPONSORS', href: '#sponsors' },

    { name: 'PRIZES', href: '#prizes' },
    { name: 'FIND US', href: '#find-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  const bgColorClass = scrolled
    ? 'bg-she-navbar/95 backdrop-blur-md shadow-2xl py-2'
    : 'bg-she-navbar py-4';

  const logoBgClass = 'bg-she-primary text-white';
  const hoverTextClass = 'hover:text-she-primary';
  const activeTextClass = 'text-she-primary bg-white/10';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${bgColorClass}`}>
        <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between relative">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src={sheLeadsLogo} alt="She Leads Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain bg-white rounded-full p-1 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-she-text tracking-wide leading-none transition-colors duration-700 uppercase">
                SHELEADS 2.0
              </span>
              <span className="font-mono text-sm tracking-widest mt-0.5 transition-colors duration-700 text-she-primary">
                2026
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-[12px] font-black transition-all duration-300 tracking-widest rounded-full uppercase ${hoverTextClass} ${activeSection === link.name ? activeTextClass : 'text-she-secondaryText'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">

            <a
              href={pptFile}
              download="SheLeads_2.0_ppt_Template.pdf"
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg uppercase tracking-tighter hover:scale-105 active:scale-95 bg-she-primary text-white shadow-she-primary/20`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PPT
            </a>
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 rounded-lg text-she-primary focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-500 xl:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Drawer Navigation */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-she-navbar z-[70] shadow-2xl transition-transform duration-500 ease-in-out xl:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-she-deepPurple/10">
          <div className="flex items-center gap-3">
            <img src={sheLeadsLogo} alt="She Leads Logo" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
            <span className="font-black text-she-deepPurple uppercase tracking-tighter">SheLeads 2.0</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-she-secondaryText hover:text-she-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-4 text-xs font-black transition-all rounded-xl uppercase tracking-widest ${activeSection === link.name ? activeTextClass : 'text-she-secondaryText'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-white/10">
          <a
            href={pptFile}
            download="SheLeads_2.0_ppt_Template.pdf"
            className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all shadow-lg uppercase tracking-tighter bg-she-primary text-white shadow-she-primary/20`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PPT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
