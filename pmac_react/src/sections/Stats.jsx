import React from 'react';

function Stats() {
  return (
    <section className="stats-section">
      <div className="container grid md-4">
        <div className="stat-item">
          <div className="stat-number">65%</div>
          <div className="stat-label">Reduced machining cycle time</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">30+</div>
          <div className="stat-label">Automation engineers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">150k</div>
          <div className="stat-label">Components produced monthly</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">0.01mm</div>
          <div className="stat-label">Precision tolerance standard</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
