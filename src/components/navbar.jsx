import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // import the hamburger icon from react-icons
import './navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-bg" />
      <div id="nav1" className="logo">
        <Link to="/">
          <img
            src="https://iamsandip01.github.io/test-grid/assets/logo_white.png"
            alt="Logo"
            height="20px"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <ul className="link-container">
          <li className="nav-link">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-link">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="nav-link">
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li className="nav-link">
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      )}

      {/* Mobile Navigation (Hamburger) */}
      {isMobile && (
        <>
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </div>
          {menuOpen && (
            <ul className="nav-links mobile">
              <li className="nav-link">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-link">
                <Link to="/projects" id="projects-link">PROJECTS</Link>
              </li>
              <li className="nav-link">
                <Link to="/gallery">GALLERY</Link>
              </li>
              <li className="nav-link">
                <Link to="/about-us">ABOUT US</Link>
              </li>
              <li className="nav-link">
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          )}
        </>
      )}
    </header>
  );
};

export default Navbar;
