import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/assets/pmac_logo.png" alt="PMAC Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About us</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">Contact now</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
