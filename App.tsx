
import React from 'react';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import ChiefGuestProfile from './components/ChiefGuestProfile';
import Tracks from './components/Tracks';
import RulesAndGuidelines from './components/RulesAndGuidelines';
import RulesSection from './components/RulesSection';
import Team from './components/Team';
import Prizes from './components/Prizes';
import EventJourney from './components/EventJourney';

import Sponsors from './components/Sponsors';
import CollegeMap from './components/CollegeMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className={`min-h-screen bg-she-background text-she-text`}>
      <TechBackground />
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Tracks />
      <RulesAndGuidelines />
      <div id="timeline">
        <EventJourney />
      </div>

      <div id="sponsors">
        <Sponsors />
      </div>
      {/* <div id="team">
        <Team />
      </div> */}
      <div id="prizes">
        <Prizes />
      </div>
      <CollegeMap />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
