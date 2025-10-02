import React, { useEffect } from 'react';
import './App.css';
import j from './assets/hi.jpg'
import i from './assets/i.jpg'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png';
import bootstrap from './assets/bootstrap.png'
import springboot from './assets/springboot.jpeg'
import java from './assets/java.jpeg'
import mysqls from './assets/mysqls.png'
import clone from './assets/clone.jpeg'
import homeimg from './assets/homeimg.jpg'
import portfolio from './assets/portfolio.jpg'
import ecommerce from './assets/ecom.jpeg'
import tasty from './assets/tasty.png'
import native from './assets/native.webp'
import vcard from './assets/vcard.jpeg'
import f from './assets/findyway.jpeg'
import mg from './assets/mongodb.png'
import e from './assets/express.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCode, faPlane, faFilm, faPaintBrush, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {

useEffect(() => {
  const aboutSection = document.querySelector('.about-section');
  const skillsCards = document.querySelectorAll('.skill-card');
  const projectCards = document.querySelectorAll('.project-card');
  const contactSection = document.querySelector('.contact-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe sections and cards
  if (aboutSection) observer.observe(aboutSection);
  skillsCards.forEach((card) => observer.observe(card));
  projectCards.forEach((card) => observer.observe(card));
  if (contactSection) observer.observe(contactSection);

  // Cleanup on unmount
  return () => {
    if (aboutSection) observer.unobserve(aboutSection);
    skillsCards.forEach((card) => observer.unobserve(card));
    projectCards.forEach((card) => observer.unobserve(card));
    if (contactSection) observer.unobserve(contactSection);
  };
}, []);



  return (
    <div>
      <nav className="navbar">
        <div className="logo">Jeniffer S</div>
        <input type="checkbox" id="menu-toggle" hidden />
        <label htmlFor="menu-toggle" className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div id="particles-js">
        <section className="hero">
          <div className="hero-left">
            <p className="tagline">I DESIGN & BUILD BRANDS</p>
            <h1>Hi, I am <span>Jeniffer S</span> <br />I create modern full-stack applications with Java and React, and also build cross-platform mobile apps using React Native.</h1>
            <div className="buttons">
              <a href="#contact" className="btns primary">Hire me</a>
              <a href="https://drive.google.com/file/d/19q1DmeJKMYe-yit2XtaoNlLNyRMo_dZ8/view?usp=sharing" className="btns outline" target="_blank" download>Download CV</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="bg-skew"></div>
            <img src={j} alt="jeniffer" />
          </div>
        </section>
      </div>

      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src={i} alt="Profile" />
            </div>
            <div className="about-content">
              <h5 className="section-subtitle">MY INTRODUCTION</h5>
              <h2>About Me</h2>
              <p>
                I'm Jeniffer S, a Java Full Stack Developer from Tamil Nadu with a passion for building responsive, scalable, and user-friendly web applications. I have hands-on experience working with Java, Spring Boot, HTML, CSS, JavaScript, React.js, and React Native.
              </p>
              <p>
                I’ve built projects like a fashion e-commerce website in web development, and in React Native I developed FindyWay, a job search app, along with a VCard app for creating digital visiting cards. My skill set also extends to Express.js for backend development and MongoDB for database management, enabling me to deliver complete end-to-end solutions.
              </p>
              <p>
                I enjoy working across both frontend and backend, bringing ideas to life through modern web and mobile applications. I'm always eager to learn new technologies, grow as a developer, and contribute to a collaborative, tech-driven team.
              </p>
              <p><em>"Design speaks, but full stack and React Native development make it functional and real."</em></p>

              <div className="about-details">
                <div className="about-row">
                  <p><strong>Name:</strong> Jeniffer S</p>
                  <p><strong>Date of Birth:</strong> December 31, 2003</p>
                </div>
                <div className="about-row">
                  <p><strong>Address:</strong> Kollemcode, Kanyakumari, Tamil Nadu, India</p>
                  <p>
                    <strong>Email:</strong>
                    jeniffer311v@gmail.com
                  </p>
                </div>
                <div className="about-row">
                  <p>
                    <strong>Phone:</strong>
                    +91 86085 27203
                  </p>
                </div>
              </div>

              <div className="interests">
                <span><FontAwesomeIcon icon={faCode} /> Coding</span>
                <span><FontAwesomeIcon icon={faPlane} /> Travel</span>
                <span><FontAwesomeIcon icon={faFilm} /> Movie</span>
                <span><FontAwesomeIcon icon={faPaintBrush} /> Mehandi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {[
            { src: html, title: 'HTML' },
            { src: css, title: 'CSS' },
            { src: javascript, title: 'JavaScript' },
            { src: bootstrap, title: 'Bootstrap' },
            { src: react, title: 'React' },
            { src: native, title: 'React Native' },
            { src: java, title: 'Java' },
            { src: springboot, title: 'Spring Boot' },
            { src: e, title: 'Express' },
            { src: mysqls, title: 'MySQL' },
            { src: mg, title: 'MongoDB' }
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.src} className="skill-icon" alt={skill.title} />
              <h4>{skill.title}</h4>
              <div className="level-label">{skill.level}</div>
            </div>
          ))}
        </div>
      </section>

<section id="projects" className="projects-section">
  <h2>My Projects</h2>
  <div className="projects-grid">
    {[
      { src: clone, title: 'Instagram Clone', tech: 'React.js', link: '#' },
      { src: homeimg, title: 'Restaurant Website', tech: 'HTML, CSS, JS', link: '#' },
      { src: portfolio, title: 'Portfolio Website', tech: 'React.js', link: '#' },
      { src: ecommerce, title: 'E-Commerce Website', tech: 'React.js, Spring Boot, MySQL', link: '#' },
      { src: tasty, title: 'The Tasty House Website', tech: 'React.js, Spring Boot, MySQL', link: '#' },
      { src: f, title: 'Findy Way App', tech: 'React Native, MongoDB, Express.js', link: '#' },
      { src: vcard, title: 'Visiting Card App', tech: 'React Native, MongoDB, Express.js', link: '#' },
    ].map((project, index) => (
      <div
        className="project-card"
        key={index}
        style={{ transitionDelay: `${index * 0.2}s` }}
      >
        <img src={project.src} alt={project.title} />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
        </div>
      </div>
    ))}
  </div>
</section>


<section id="contact" className="contact-section">
  <div className="container">
    <h2>Get In Touch</h2>
    <div className="contact-form">
      <button
        className="btn primary"
        onClick={() =>
          (window.location.href =
            "mailto:jeniffer311v@gmail.com?subject=Seen Your Portfolio&body=Hi, Hello, I’d like to connect with you!")
        }
      >
        <FontAwesomeIcon icon={faEnvelope} /> Send Email
      </button>
      <button
        className="btn primary"
        onClick={() => (window.location.href = "tel:+918608527203")}
      >
        <FontAwesomeIcon icon={faPhone} /> Call Me
      </button>
    </div>
  </div>
</section>


      <footer className="footer">
        <div className="footer-container">
          <h3>Jeniffer S</h3>
          <p>Transforming ideas into responsive, scalable full stack web and mobile applications ✨</p>
          <div className="social-icons">
            <a href="https://github.com/jeniffer311" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/jeniffer-s/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/?__pwa=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <p className="copyright">© 2025 Jeniffer S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
