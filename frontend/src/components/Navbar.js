import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import { FaLanguage } from 'react-icons/fa';
import km from "./kisanmitra.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect Scroll
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Handle Language Change
  const handleLanguageChange = (langCode) => {
    const googleTranslateDropdown = document.querySelector('.goog-te-combo');
    if (googleTranslateDropdown) {
      googleTranslateDropdown.value = langCode;
      googleTranslateDropdown.dispatchEvent(new Event('change'));
    }
  };

  const handleClickD = () => {
    // Redirect to the Flask app for Plant Disease Detection
    window.location.href = 'http://localhost:8501'; // Replace with your Flask app URL
};

const handleClickC = () => {
  // Redirect to the crop recommendation form hosted by Flask
  window.location.href = 'http://localhost:5000';  // Flask app URL
};

  // Toggle Dark/Light Mode
  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply Dark/Light Theme
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={km} alt="Schemes" className="kisanmitra" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li>
          <a href="#resources">Resources</a>
          <ul className="dropdown">
            <li><a href="/article">Article</a></li>
            <li><a href="/cheatsheet">Cheatsheet</a></li>
          </ul>
        </li>
        <li><a href="#crop-recommendation" onClick={handleClickC}>Crop Recommendation</a></li>
        <li><a href="#disease-detection" onClick={handleClickD}>Detect Plant Disease</a></li>
        <li><a href="/aboutus">About Us</a></li>

        {/* Language Dropdown */}
        <li>
          <a href="#language">
            <FaLanguage style={{ fontSize: '2rem', marginRight: '10px' }} />
          </a>
          <ul className="dropdown">
            <li onClick={() => handleLanguageChange('en')}>English</li>
            <li onClick={() => handleLanguageChange('hi')}>Hindi</li>
            <li onClick={() => handleLanguageChange('gu')}>Gujarati</li>
          </ul>
        </li>

        {/* Dark/Light Mode Toggle Switch */}
        <li>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="theme-toggle"
              checked={isDarkMode}
              onChange={toggleMode}
            />
            <label htmlFor="theme-toggle"></label>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
