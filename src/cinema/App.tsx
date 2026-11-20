import { SiteHeader } from './components/SiteHeader';
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AwardsSection } from './components/AwardsSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
}

export default App;