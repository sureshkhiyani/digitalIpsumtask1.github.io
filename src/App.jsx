import React from 'react';
import './App.css';
import ipsum1Image from './images/ipsum1Image.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dimark.</div>
      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Pricing</li>
      </ul>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>We Help You <br /><span>Crush</span> Your<br /> Competition </h1>
        <p className="paraLight">Build trust to connect your brand to billions of <br />users and grow your revenue through SEO.</p>
        <br />
        <button className="hero-button">See our services</button>
        
      </div>
      <div className="hero-image">
        <img src={ipsum1Image} alt="Hero" />
      </div>
    </section>
  );
}

export default App;
