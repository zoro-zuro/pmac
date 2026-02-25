import React from 'react';

function BeastTestimonial() {
  return (
    <section className="beast-testimonial-section">
      <div className="container">
        <div className="beast-quote-icon">"</div>
        <blockquote>
          "PMAC significantly improved our component consistency while reducing lead times by 40%. Their
          automated integration is a game-changer for our supply chain."
        </blockquote>
        <div className="beast-testimonial-author">
          <img src="/assets/testimony-person.jpg" alt="Mark Thompson" />
          <div className="beast-author-info">
            <strong>Mark Thompson</strong>
            <span>Director of Engineering, Global Agri-Corp</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeastTestimonial;
