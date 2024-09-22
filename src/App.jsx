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


import NavbarDesktop from './components/NavbarDesktop';
import NavbarHamburger from './components/NavbarHamburger';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


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
      <NavbarDesktop navVisible={navVisible} />
      <NavbarHamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HomeSection profileImage={profileImage} linkedin={linkedin} github={github} />
      <AboutSection profileImage2={profileImage2} experience={experience} education={education} arrow={arrow} />
      <ExperienceSection />
      <ProjectsSection pro1={pro1} pro2={pro2} weather1={weather1} goPrev={goPrev} goNext={goNext} />
      <ContactSection />
      <Footer />
    </>

  )
}

export default App
