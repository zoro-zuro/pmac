import React from 'react';

function DigitalSection() {
  return (
    <section className="digital-section">
      <div className="container grid md-2 flex-reverse">
        <div className="feature-content">
          <h2>Digitally Enabled Production Systems</h2>
          <p>Our facility operates on a real-time MES (Manufacturing Execution System), providing full
            transparency from raw material to final delivery.</p>
          <div className="stat-small">
            <div className="stat-row">
              <strong>Real-time Monitoring</strong>
              <span>Live data from 50+ machines.</span>
            </div>
            <div className="stat-row">
              <strong>Predictive Maintenance</strong>
              <span>AI-driven equipment health checks.</span>
            </div>
          </div>
        </div>
        <div className="feature-image">
          <img src="/assets/systems_png.png" alt="Digital Systems" />
        </div>
      </div>
    </section>
  );
}

export default DigitalSection;
