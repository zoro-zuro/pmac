import React from 'react';

function Solutions() {
  return (
    <section id="solutions" className="solutions-section">
      <div className="container text-center">
        <h2>Precision-Driven Manufacturing Solutions</h2>
        <div className="grid md-3">
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/solutions-1.png" alt="CNC Machining" />
            </div>
            <h3>High-Tolerance CNC Machining</h3>
            <p>Specializing in complex geometries with multi-axis capabilities for mission-critical parts.</p>
            <a href="#" className="text-link">Learn more &rarr;</a>
          </div>
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/solutions-2.jpg" alt="Automated Assembly" />
            </div>
            <h3>Automated Sub-Assembly</h3>
            <p>End-to-end assembly solutions utilizing robotic pick-and-place and vision inspection.</p>
            <a href="#" className="text-link">Learn more &rarr;</a>
          </div>
          <div className="solution-card">
            <div className="icon-box">
              <img src="/assets/soutions-3.png" alt="Surface Finishing" />
            </div>
            <h3>Surface Finishing & Coating</h3>
            <p>Proprietary finishing techniques that exceed industry standards for durability and aesthetics.</p>
            <a href="#" className="text-link">Learn more &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
