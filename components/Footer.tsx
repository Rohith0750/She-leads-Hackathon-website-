import React from 'react';
import sheLeadsLogo from '../assets/logo_sheleads.png';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-12 bg-she-footer border-t border-white/10 transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4">

        {/* Need Help? Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-she-card rounded-3xl p-8 md:p-12 text-center border border-she-deepPurple/10 shadow-2xl relative overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-she-accent/5 blur-3xl pointer-events-none group-hover:bg-she-accent/10 transition-colors duration-500"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-she-deepPurple mb-4">Need Help?</h2>
              <p className="text-she-text mb-8 text-lg">For any queries or support, reach out to us:</p>

              <a
                href="mailto:harvest-club@presidencyuniversity.in"
                className="inline-flex items-center gap-3 bg-she-primary hover:bg-she-primaryHover text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-she-primary/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                harvest-club@presidencyuniversity.in
              </a>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center border-t border-white/10 pt-12">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={sheLeadsLogo} alt="She Leads Logo" className="w-20 h-20 object-contain" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                She Leads <span className="text-she-accent">2.0</span>
              </span>
            </div>
            <p className="text-she-secondaryText text-xs font-bold uppercase tracking-widest">Presidency University</p>
          </div>

          {/* Socials */}
          {/* Socials & Actions */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <a
              href="https://unstop.com/hackathons/sheleads-20-presideny-university-bangalore-1642567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-base transition-all shadow-lg uppercase tracking-tighter hover:scale-105 active:scale-95 bg-she-primary text-white shadow-she-primary/20"
            >
              APPLY NOW
            </a>

            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.linkedin.com/company/officialharvestclub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-xl text-she-secondaryText">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://www.instagram.com/harvest_club_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all text-xl text-she-secondaryText">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="mailto:harvest-club@presidencyuniversity.in" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-xl text-she-secondaryText">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10 text-she-secondaryText text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; 2026 She Leads Hackathon. Organized by Harvest Club.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
