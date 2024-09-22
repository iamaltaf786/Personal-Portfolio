import React from 'react';

const AboutSection = ({ profileImage2, experience, education, arrow }) => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img id="myImage-2" src={profileImage2} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Developer since</h3>
              <p>2+ years</p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Tech in ECE</p>
            </div>
          </div>
          <div className="text-container">
          <p>
            <strong>I</strong> am a B.Tech Electronics and Communication
            Engineering student. I am also a Cloud Enthusiast and a learner, and
            deeply passionate about Software Development.
            <br />
            <strong>I</strong> enjoy turning complex problems into simple,
            beautiful and intuitive designs. I also love the logic and structure
            of coding and always strive to write elegant and efficient code.
          </p>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#about'} />
    </section>
  );
};

export default AboutSection;
