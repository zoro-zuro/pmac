import React from 'react';
import {
  BeastNavbar,
  BeastHero,
  BeastFeatureSection,
  BeastStats,
  BeastSolutions,
  BeastDigitalSection,
  BeastIndustries,
  BeastSocialProof,
  BeastApproach,
  BeastCaseStudy,
  BeastBlogs,
  BeastCTA,
  BeastFooter,
  BeastWhyUs
} from './beast_sections';

function App() {
  return (
    <>
      <main>
        <BeastHero />
        <BeastFeatureSection />
        <BeastStats />
        <BeastSolutions />
        <BeastDigitalSection />
        <BeastWhyUs />
        <BeastIndustries />
        <BeastSocialProof />
        <BeastApproach />
        <BeastCaseStudy />
        <BeastBlogs />
        <BeastCTA />
      </main>
      <BeastFooter />
    </>
  );
}

export default App;
