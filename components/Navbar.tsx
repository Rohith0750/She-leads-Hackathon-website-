
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'tracks', 'timeline', 'sponsors', 'team', 'prizes', 'find-us', 'faq'];
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
    { name: 'TEAM', href: '#team' },
    { name: 'PRIZES', href: '#prizes' },
    { name: 'FIND US', href: '#find-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  const bgColorClass = scrolled 
    ? 'bg-white/95 dark:bg-[#0a0f1a]/95 backdrop-blur-md shadow-2xl py-2' 
    : 'bg-white dark:bg-[#0a0f1a] py-4';

  const logoBgClass = darkMode ? 'bg-she-neon text-black' : 'bg-she-blue text-white';
  const hoverTextClass = darkMode ? 'hover:text-she-neon' : 'hover:text-she-blue';
  const activeTextClass = darkMode ? 'text-she-neon bg-white/5' : 'text-she-blue bg-blue-50';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${bgColorClass}`}>
        <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl transition-colors duration-700 shadow-lg ${logoBgClass}`}>
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-wide leading-none transition-colors duration-700 uppercase">
                She Leads
              </span>
              <span className={`font-mono text-sm tracking-widest mt-0.5 transition-colors duration-700 ${darkMode ? 'text-she-neon' : 'text-she-blue'}`}>
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
                className={`px-3 py-2 text-[12px] font-black transition-all duration-300 tracking-widest rounded-md uppercase ${hoverTextClass} ${
                  activeSection === link.name ? activeTextClass : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-all duration-700"
              title="Toggle Theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg uppercase tracking-tighter hover:scale-105 active:scale-95 ${darkMode ? 'bg-she-neon text-black shadow-she-neon/20' : 'bg-she-blue text-white shadow-she-blue/20'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PPT
            </button>

            {/* Hamburger Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 rounded-lg text-slate-900 dark:text-white focus:outline-none"
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
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white dark:bg-[#0a0f1a] z-[70] shadow-2xl transition-transform duration-500 ease-in-out xl:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b dark:border-white/5">
          <div className="flex items-center gap-3">
             <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${logoBgClass}`}>S</div>
             <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">She Leads</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
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
              className={`block px-4 py-4 text-xs font-black transition-all rounded-xl uppercase tracking-widest ${
                activeSection === link.name ? activeTextClass : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="p-6 border-t dark:border-white/5">
          <button className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all shadow-lg uppercase tracking-tighter ${darkMode ? 'bg-she-neon text-black shadow-she-neon/20' : 'bg-she-blue text-white shadow-she-blue/20'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PPT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
