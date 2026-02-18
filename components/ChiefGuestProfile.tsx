
import React from 'react';
import chiefGuestImage from '../assets/chief-guest/dr-nafeesa-ahmed.jpeg';

const ChiefGuestProfile: React.FC = () => {
  return (
    <section className="py-24" id="chief-guest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-she-deepPurple tracking-tight uppercase">Inaugural Speaker</h2>
        </div>

        <div className="bg-she-card rounded-[2rem] p-6 md:p-8 border border-she-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-4 bg-white/40 rounded-3xl p-6 md:p-8 border border-white/40">
              <div className="rounded-2xl overflow-hidden border border-white/50 mb-6">
                <img
                  src={chiefGuestImage}
                  alt="Dr. Nafeesa Ahmed"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-she-deepPurple uppercase tracking-tight">Dr. Nafeesa Ahmed</h2>
              <p className="mt-2 text-she-text text-base md:text-xl leading-tight">Director, Presidency Group of Institutions</p>
            </div>

            <div className="lg:col-span-8 bg-white/35 rounded-3xl p-6 md:p-8 border border-white/50">
              <div className="text-she-text/90 text-lg md:text-2xl leading-loose space-y-10">
                <p>
                 Dr. Nafeesa Ahmed is the Director of the Presidency Group of Institutions, Bengaluru, and a recognized leader in education management. 
                 She holds a Master’s degree in International Management from Royal Holloway, University of London, 
                 and has completed the School Leadership and Management program from Harvard Business School Online.
                </p>
                <p>
                  With over a decade of experience in institutional leadership, she has championed innovation, inclusive education, and forward-looking academic models.
                  She has been recognized for her contributions to education with national awards, including the Economic Times Power Icon Award.
                </p>
                <p>
                  She will inaugurate SheLeads 2.0 and deliver the opening address
                </p>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestProfile;
