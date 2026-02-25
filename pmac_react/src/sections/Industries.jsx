import React from 'react';

function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header">
          <h2>Industries Reimagined</h2>
          <p>Providing specialized manufacturing solutions for high-stakes global sectors.</p>
        </div>
        <div className="grid md-4">
          <div className="industry-card" style={{ backgroundImage: "url('/assets/industries-1.jpg')" }}>
            <div className="industry-overlay">
              <h3>Agriculture</h3>
            </div>
          </div>
          <div className="industry-card" style={{ backgroundImage: "url('/assets/industries-2.png')" }}>
            <div className="industry-overlay">
              <h3>Oil and Gas</h3>
            </div>
          </div>
          <div className="industry-card" style={{ backgroundImage: "url('/assets/industries-3.png')" }}>
            <div className="industry-overlay">
              <h3>Locomotive</h3>
            </div>
          </div>
          <div className="industry-card" style={{ backgroundImage: "url('/assets/industries-4.png')" }}>
            <div className="industry-overlay">
              <h3>Medical</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
