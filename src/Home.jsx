import logo from './images/profilepic.jpeg';
import Typed from 'typed.js';
import { useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faHackerrank, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email

function Home() {
  useEffect(() => {
    const options = {
      strings: ['<u>Programmer</u>', '<u>Web Developer</u>'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };
    const typed = new Typed('.element', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="profile-pic-container">
          <img
            src={logo}
            alt="ProfilePhoto"
            className="profile-pic"
          />
        </div>

        <div className="text-container">
          <h1 className="intro-text">
            <div>Hello world!!!</div>
            I am <span className="elem">SIVA NARAYANA MIRIYALA<br /></span>
            The <span className="elem element"></span> ..<br />
            Typing Speed 70 wpm ...
          </h1>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sivanarayanamiriyala/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://leetcode.com/u/SivaNarayanaMiriyala/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faHackerrank} />
            </a>
            <a href="https://github.com/sivanarayanamiriyala" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:sivanarayanamiriyala007@gmail.com" className="icon-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
