import React from 'react';
import './App.css';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCode, faPlane, faFilm, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
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
            <p className="tagline">WE DESIGN & BUILD BRANDS</p>
            <h1>Hi, I am <span>Jeniffer S</span> <br />I create modern full stack applications with Java and React.</h1>
            <div className="buttons">
              <a href="#contact" className="btn primary">Hire me</a>
              <a href="https://drive.google.com/file/d/19q1DmeJKMYe-yit2XtaoNlLNyRMo_dZ8/view?usp=sharing" className="btn outline" target="_blank" download>Download CV</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="bg-skew"></div>
            <img src={i} alt="Ramesh" />
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
                I'm Jeniffer S, a Java Full Stack Developer from Tamil Nadu with a passion for building responsive, scalable, and user-friendly web applications. I have hands-on experience working with Java, Spring Boot, HTML, CSS, JavaScript, and React.js.
              </p>
              <p>I’ve built projects like a fashion e-commerce website and a personal portfolio, focusing on clean UI, efficient backend logic, and mobile-first design. I enjoy working across both frontend and backend, bringing ideas to life through complete web solutions.</p>
              <p>I'm always eager to learn new technologies, grow as a developer, and contribute to a collaborative, tech-driven team.</p>
              <p><em>"Design speaks, but full stack development makes it functional and real."</em></p>
              <div className="about-details">
                <p><strong>Name:</strong> Jeniffer S</p>
                <p><strong>Date of birth:</strong> December 31, 2003</p>
                <p><strong>Address:</strong> Kollemcode, Kannyakumari, Tamil Nadu, India</p>
                <p><strong>Email:</strong> jeniffer311v@gmail.com</p>
                <p><strong>Phone:</strong> +91 8608527203</p>
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
            { src: html, title: 'HTML'},
            { src: css, title: 'CSS'},
            { src: javascript, title: 'JavaScript'},
            { src: bootstrap, title: 'Bootstrap'},
            { src: react, title: 'React'},
            { src: java, title: 'Java'},
            { src: springboot, title: 'Spring Boot'},
            { src: mysqls, title: 'MySQL'},
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
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {[
            { src: clone, title: 'Instagram Clone', tech: 'React.js', link: '#' },
            { src: homeimg, title: 'Restaurant Website', tech: 'HTML, CSS, JS', link: '#' },
            { src: portfolio, title: 'Portfolio Website', tech: 'React.js', link: '#' },
            { src: ecommerce, title: 'E-Commerce Website', tech: 'React.js, Spring Boot, MySQL', link: '#' }
          ].map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.src} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <h3>Jeniffer S</h3>
          <p>Transforming ideas into responsive and scalable full stack applications ✨</p>
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