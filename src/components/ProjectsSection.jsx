import React from 'react';
import arrow from '../assets/arrow.png';

const ProjectsSection = ({ pro1, pro2, weather1, goPrev, goNext }) => {
  return (
    <>
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="project-slider">
          {/* Project-1 */}
          <div className="details-container color-container slide">
            <div className="article-container">
              <img src={pro1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">BookUsNow</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                onClick={() => window.location.href='https://github.com/iamaltaf786/BookUsNow'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                onClick={() => window.location.href='https://iamaltaf786.github.io/BookUsNow/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Project-2 */}
          <div className="details-container color-container slide">
            <div className="article-container">
              <img src={pro2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Resume Maker</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                onClick={() => window.location.href='https://github.com/iamaltaf786/Resume_Maker_web'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                onClick={() => window.location.href='https://iamaltaf786.github.io/Resume_Maker_web/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Project-3 */}
          <div className="details-container color-container slide">
            <div className="article-container">
              <img src={weather1} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Weather App</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                onClick={() => window.location.href='https://github.com/iamaltaf786/Weather-App?tab=readme-ov-file'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                onClick={() => window.location.href='https://iamaltaf786.github.io/Weather-App/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="slider-box">
            <button className="slider-prev" onClick={goPrev}>
              &lt;
            </button>
            <button className="slider-next" onClick={goNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='./#projects'} />
    </section>
    </>
  );
};

export default ProjectsSection;
