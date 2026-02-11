
import React from 'react';

const CollegeMap: React.FC = () => {
  return (
    <section id="find-us" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white">Find Your Way</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              SheLeads 2026 is hosted at the state-of-the-art <b>Innovation & Tech Center</b>. From modern lab facilities to quiet relaxation zones, we've prepared everything for a comfortable stay.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-she-blue/20 text-she-blue flex items-center justify-center flex-shrink-0 font-bold">📍</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Main Hall</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Registration and Opening Ceremony.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-she-blue/20 text-she-blue flex items-center justify-center flex-shrink-0 font-bold">☕</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Innovation Cafe</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">24/7 snacks, drinks, and networking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-she-blue/20 text-she-blue flex items-center justify-center flex-shrink-0 font-bold">💤</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Quiet Zone</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Rest areas for quick recharges.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-white/10 dark:to-white/5 shadow-2xl">
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592733333!2d-73.9774!3d40.7831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb11f23862660d2b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1715000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMap;
