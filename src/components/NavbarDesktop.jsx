import React from 'react';

const NavbarDesktop = ({ navVisible }) => {
  return (
    <nav id="desktop-nav" style={{ top: navVisible ? '0' : '-75px' }}>
      <div className="logo">Altaf Hussain</div>
      <div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
