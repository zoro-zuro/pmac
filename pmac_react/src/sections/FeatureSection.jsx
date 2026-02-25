import React from 'react';

function FeatureSection() {
  return (
    <section id="about" className="feature-section">
      <div className="container grid md-2">
        <div className="feature-image">
          <img src="/assets/progress_png.png" alt="Engineering Progress" />
        </div>
        <div className="feature-content">
          <span className="badge">Innovation</span>
          <h2>Engineering Progress Through Automation</h2>
          <p>We combine cutting-edge robotic integration with deep manufacturing expertise to optimize every
            cycle time and ensure zero-defect quality.</p>
          <ul className="check-list">
            <li>Precision CNC Machining</li>
            <li>Automated Assembly Lines</li>
            <li>Digital Production Tracking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
