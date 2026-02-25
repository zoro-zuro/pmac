import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container container-large grid md-4">
        <div className="footer-brand">
          <img src="/assets/pmac_logo.png" alt="PMAC Logo" />
          <p>Engineering excellence through precision and automation.</p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">CNC Machining</a></li>
            <li><a href="#">Automation</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Industrial Way<br />Tech Valley, CA 94000</p>
          <div className="social-links">
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2026 Project PMAC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
