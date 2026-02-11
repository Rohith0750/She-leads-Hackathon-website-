
import React from 'react';

const CollegeMap = () => {

  // College details - Update these with your actual college information
  const collegeInfo = {
    name: "Presidency University, Bengaluru",
    address: "Presidency University, Itgalpur, Rajanakunte, Yelahanka, Bengaluru, Karnataka 560064",
    coordinates: "13.1718° N, 77.5362° E", // Presidency University / Yelahanka coordinates
  };


  return (
    <section id="location" className="py-20 px-6 bg-white dark:bg-gradient-to-br dark:from-[#0a0f1a] dark:via-[#111827] dark:to-[#0a0f1a] min-h-screen transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-she-blue to-she-blue dark:to-she-neon bg-clip-text text-transparent font-mono tracking-wider">
              FIND US
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-she-blue to-she-blue dark:to-she-neon rounded-full mb-8"></div>
          </div>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700">
            Located in the heart of Yelahanka, easily accessible from all parts of Bengaluru
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="space-y-6">
            {/* Interactive Map Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-she-blue/20 to-she-blue/20 dark:to-she-neon/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white dark:bg-[#111827]/80 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-2xl p-6 hover:border-she-blue/30 transition-all duration-300 shadow-xl dark:shadow-none">

                {/* Map Placeholder with embedded Google Maps */}
                <div className="w-full h-80 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-gray-700 hover:border-she-blue/50 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4234567890123!2d77.5339595!3d13.1717796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21be4ad63a55%3A0x1008adb771c3d236!2sPresidency%20University!5e0!3m2!1sen!2sin!4v1692875432109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="College Location Map - Interactive map showing the location of our college campus"
                  ></iframe>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href="https://www.google.com/maps/dir//Itgalpur+Rajanakunte,+Yelahanka,+Bengaluru,+Karnataka+560064/@13.1717665,77.4537576,27135m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae21be4ad63a55:0x1008adb771c3d236!2m2!1d77.5361595!2d13.1717796?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-she-blue/10 hover:bg-she-blue/20 border border-she-blue/30 text-she-blue px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>📍</span>
                    <span>Open in Maps</span>
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(collegeInfo.address)}
                    className="flex items-center space-x-2 bg-she-blue/10 dark:bg-she-neon/10 hover:bg-she-blue/20 dark:hover:bg-she-neon/20 border border-she-blue/30 dark:border-she-neon/30 text-she-blue dark:text-she-neon px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <span>📋</span>
                    <span>Copy Address</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            {/* College Details */}
            <div className="bg-white dark:bg-[#111827]/80 backdrop-blur-sm border border-slate-200 dark:border-gray-800 rounded-2xl p-8 hover:border-she-blue/30 transition-all duration-300 shadow-xl dark:shadow-none">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-she-blue to-she-blue dark:to-she-neon rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white dark:text-black font-bold text-xl">🏫</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-700">{collegeInfo.name}</h3>
                  <p className="text-slate-500 dark:text-gray-400 transition-colors duration-700">Yelahanka, Bengaluru</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-she-blue mt-1">📍</span>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium transition-colors duration-700">Address</p>
                    <p className="text-slate-600 dark:text-gray-300 text-sm transition-colors duration-700">{collegeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-she-blue dark:text-she-neon mt-1 transition-colors duration-700">🌐</span>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium transition-colors duration-700">Coordinates</p>
                    <p className="text-slate-600 dark:text-gray-300 text-sm font-mono transition-colors duration-700">{collegeInfo.coordinates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-slate-400 dark:text-gray-400 text-sm transition-colors duration-700">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-she-blue to-transparent"></div>
            <span className="font-mono tracking-wider">SEE YOU THERE!</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-she-blue dark:via-she-neon to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeMap;
