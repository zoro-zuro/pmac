import React from 'react';

function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-box card">
          <div className="grid md-2">
            <div>
              <h2>Ready to Elevate Your Production?</h2>
              <p>Contact our engineering team today for a comprehensive technical analysis of your project.</p>
              <a href="mailto:contact@pmac.tech" className="btn btn-primary">contact@pmac.tech</a>
            </div>
            <div className="cta-form">
              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="Project Details"></textarea>
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
