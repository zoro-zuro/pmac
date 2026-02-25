import React from 'react';

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <div className="quote-icon">"</div>
        <blockquote>
          "PMAC significantly improved our component consistency while reducing lead times by 40%. Their
          automated integration is a game-changer for our supply chain."
        </blockquote>
        <div className="testimonial-author">
          <img src="/assets/testimony-person.jpg" alt="Mark Thompson" />
          <div className="author-info">
            <strong>Mark Thompson</strong>
            <span>Director of Engineering, Global Agri-Corp</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
