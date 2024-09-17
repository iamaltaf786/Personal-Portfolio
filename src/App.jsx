import { useState, useEffect } from 'react'
import './css/App.css'

import profileImage from './assets/Altaf_Hussain_1_1.jpeg'
import arrow from './assets/arrow.png'
import checkmark from './assets/checkmark.png'
import education from './assets/education.png'
import email from './assets/email.png'
import experience from './assets/experience.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import pro1 from './assets/pro-1.png'
import pro2 from './assets/pro-2.png'
import pro3 from './assets/pro-3.png'
import pro4 from './assets/pro-4.png'
import profileImage2 from './assets/Untitled Project.png'
import weather1 from './assets/weather-1.png'


function App() {
// Use state to control whether the menu and icon are open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle between true/false
  };

// function to go-right and left in projects section
const [counter, setCounter] = useState(0);

const goPrev = () => {
  setCounter((prev) => (prev === 0 ? 2 : prev - 1));
};

const goNext = () => {
  setCounter((prev) => (prev === 2 ? 0 : prev + 1));
};

useEffect(() => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}, []);

useEffect(() => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}, [counter]);

// scroll effect in Navbar
const [scrollPosition, setScrollPosition] = useState(0);
const [navVisible, setNavVisible] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > scrollPosition) {
      setNavVisible(false); // Hide navbar on scroll down
    } else {
      setNavVisible(true); // Show navbar on scroll up
    }

    setScrollPosition(currentScroll);
  };
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, [scrollPosition]);

  return (
    <>
  {/* Dextop-Nabar Section */}
  <nav id="desktop-nav" style={{ top: navVisible ? '0' : '-75px' }}>
      <div className="logo">Altaf Hussain</div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>


  {/* Hamburger-Navbar Section */}
  <nav id="hamburger-nav">
    <div className="logo">Altaf Hussain</div>
    <div className="hamburger-menu">
      <div className= {`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={toggleMenu}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </div>
    </div>
  </nav>
  {/* Home Section */}
  <section id="home" className="home">
    <div className="home_profile_img">
      <img
        id="myImage"
        src={profileImage}
        alt="Altaf Hussain profile picture"
        // data-aos="fade-right"
      />
    </div>
    <div className="section__text">
      <p 
      className="section__text__p1" 
      // data-aos="fade-left"
      >
        Hello, I'm
      </p>
      <h1 className="title" 
      // data-aos="fade-left"
      >
        Altaf Hussain
      </h1>
      <p className="section__text__p2" 
      // data-aos="fade-left"
      >
        Frontend Developer
      </p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          // data-aos="fade-left"
          onClick={() => window.open('./assets/Altaf_Hussain_Resume.pdf')} //------------WILL HAVE TO FIX -------------
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1"
          // data-aos="fade-left"
          onClick={() => window.location.href = './#contact'}
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={linkedin}
          alt="My LinkedIn profile"
          className="icon"
          // data-aos="fade-left"
          onClick={() => window.location.href='https://www.linkedin.com/in/altaf-hussain-10640a203/'}
        />
        <img
          src={github}
          alt="My Github profile"
          className="icon"
          // data-aos="fade-left"
          onClick={() => window.location.href='https://github.com/iamaltaf786'}
        />
      </div>
    </div>
  </section>
  {/* About Section */}
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title" 
    // data-aos="fade-up"
    >
      About Me
    </h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          id="myImage-2"
          src={profileImage2}
          alt="Profile picture"
          className="about-pic"
          // data-aos="fade-right"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container" 
          // data-aos="fade-down"
          >
            <img
              src={experience}
              alt="Experience icon"
              className="icon"
            />
            <h3>Developer since</h3>
            <p>2+ years</p>
          </div>
          <div className="details-container" 
          // data-aos="fade-down"
          >
            <img
              src={education}
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>B.Tech in ECE</p>
          </div>
        </div>
        <div className="text-container" 
        // data-aos="fade-up"
        >
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
    <img
      src={arrow}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => window.location.href='./#about'}
    />
  </section>
  {/* Experience Section */}
  <section className="experience">
    <p className="para">Explore My Skills</p>
    <div className="listing_start">
      <h1 
      // data-aos="zoom-in"
      >Tech Skills</h1>
      <div className="listOf">
        <ul>
          <li>
            <div className="skills" 
            // data-aos="fade-right"
            >
              <div className="skill_topics">
                <p>Languages</p>
              </div>
              <div className="skill-topics-list">
                <ul>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=html"
                      alt="html"
                      title="html"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=css"
                      alt="css"
                      title="css"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="javascript"
                      title="javascript"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=c"
                      alt="c"
                      title="c"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=cpp"
                      alt="cpp"
                      title="cpp"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=java"
                      alt="java"
                      title="java"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=sqlite"
                      alt="sql"
                      title="sql"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="skills" 
            // data-aos="fade-right"
            >
              <div className="skill_topics">
                <p>Developer Tools</p>
              </div>
              <div className="skill-topics-list">
                <ul>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=vscode"
                      alt="vscode"
                      title="vscode"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=git"
                      alt="git"
                      title="git"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="github"
                      title="github"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=mysql"
                      alt="mysql"
                      title="mysql"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="skills" 
            // data-aos="fade-right"
            >
              <div className="skill_topics">
                <p>Library</p>
              </div>
              <div className="skill-topics-list">
                <ul>
                  <li>
                    <img
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="bootstrap"
                      title="bootstrap"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <img
      src={arrow}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => window.location.href='./#projects'}
    />
  </section>

  {/* PROJECT-SECTION */}
  <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title" /* data-aos="fade-up" */>Projects</h1>
      <div className="experience-details-container">
        <div className="project-slider">
          {/* Project-1 */}
          <div className="details-container color-container slide">
            <div className="article-container">
              <img src={pro1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title" /* data-aos="fade-down" */>
              BookUsNow
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                /* data-aos="zoom-in" */
                onClick={() => window.location.href='https://github.com/iamaltaf786/BookUsNow'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                /* data-aos="zoom-in" */
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
            <h2 className="experience-sub-title project-title" /* data-aos="fade-down" */>
              Resume Maker
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                /* data-aos="zoom-in" */
                onClick={() => window.location.href='https://github.com/iamaltaf786/Resume_Maker_web'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                /* data-aos="zoom-in" */
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
            <h2 className="experience-sub-title project-title" /* data-aos="fade-down" */>
              Weather App
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn btnHov-1"
                /* data-aos="zoom-in" */
                onClick={() => window.location.href='https://github.com/iamaltaf786/Weather-App?tab=readme-ov-file'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn btnHov-2"
                /* data-aos="zoom-in" */
                onClick={() => window.location.href='https://iamaltaf786.github.io/Weather-App/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="slider-box">
            <button
              className="slider-prev"
              /* data-aos="fade-right" */
              onClick={goPrev}
            >
              &lt;
            </button>
            <button
              className="slider-next"
              /* data-aos="fade-left" */
              onClick={goNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#projects'}
      />
    </section>


  {/* Contact Section */}
  <section id="contact">
    <div className="contact-col">
      <h1 
      // data-aos="fade-up"
      >Interested in collaborating with me?</h1>
      <h2 
      // data-aos="fade-up"
      >Click Below</h2>
      <a href="./contact.html" 
      // data-aos="fade-up"
      >
        Start a conversation
      </a>
    </div>
  </section>
  {/* Footer Section */}
  <footer>
    <h3>
      Made With
      <i className="fa fa-heart" style={{ fontSize: 20, color: "red" }} />
      Altaf Hussain
    </h3>
  </footer>
  {/* Script */}
  {/* Animation OnScroll Library */}
</>

  )
}

export default App
