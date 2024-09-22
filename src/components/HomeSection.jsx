import React from 'react';

const HomeSection = ({ profileImage, linkedin, github }) => {
  return (
    <section id="home" className="home">
      <div className="home_profile_img">
        <img id="myImage" src={profileImage} alt="Altaf Hussain profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Altaf Hussain</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/Resume_Altaf-Hussain.pdf')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>Contact Info</button>
        </div>
        <div id="socials-container">
          <img src={linkedin} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href='https://www.linkedin.com/in/altaf-hussain-10640a203/'} />
          <img src={github} alt="My Github profile" className="icon" onClick={() => window.location.href='https://github.com/iamaltaf786'} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
