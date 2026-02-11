
import React, { useState, useEffect } from 'react';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import ChiefGuestProfile from './components/ChiefGuestProfile';
import Tracks from './components/Tracks';
import RulesSection from './components/RulesSection';
import Team from './components/Team';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Results from './components/Results';
import Sponsors from './components/Sponsors';
import CollegeMap from './components/CollegeMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-700`}>
      <TechBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Vision />
      <Tracks />
      <div id="timeline">
        <Timeline />
      </div>
      <div id="results">
        <Results />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="team">
        <Team />
      </div>
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
