import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/assets/hero_png.jpg" alt="Industrial Manufacturing" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Tech-Driven Precision Manufacturing</h1>
          <p>From CNC machining to automated sub-assembly lines, we deliver engineering excellence with scale
            and precision.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Request a Quote</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
