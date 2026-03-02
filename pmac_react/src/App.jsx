import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import AdminPortal from './components/AdminPortal';

const HomePage = () => (
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
);

const AppContent = () => {
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin-portal';

  return (
    <>
      {!isAdminPath && <BeastNavbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-portal" element={<AdminPortal />} />
      </Routes>
      {!isAdminPath && <BeastFooter />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
