import React from 'react';

const NavbarHamburger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav id="hamburger-nav">
      <div className="logo">Altaf Hussain</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHamburger;
