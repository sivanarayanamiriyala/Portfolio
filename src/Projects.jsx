import React from 'react';
import ProjectFrame from './ProjectFrame';
import CertificationCard from './CertificationCard';
import SkillCard from './SkillCard'; // Import SkillCard component
import kusalava from './images/kusalava.png';
import diabetes from './images/diabetes.png';
import react from './images/react.png';
import movies from './images/movies.png';
import awscloud from './images/awscloudpractitioner.png';
import flask from './images/flask.png';
import awsai from './images/awsaipractitioner.png';
import javascript from './images/javascript.png';
import wipro from './images/wipro.png';
import pythonLogo from './images/python.png'; // Example skill logos
import javaLogo from './images/java.png';
import awsLogo from './images/aws.png';
import mysql from './images/mysql.png';
import './Projects.css'; // Ensure the styles are separated for easier updates

function Projects() {
const data = {
  1: {
    title: 'Production Data Management System',
    src: kusalava,
    alt: 'Production Data Management Application',
    about: `Developed a Data Management Application for Kusalava Pvt. Ltd. that helps manage production-related data efficiently. Integrated features like data entry, reporting, and analytics to help the company make data-driven decisions.`,
github:`https://github.com/sivanarayanamiriyala/Project-K`,
projectlink:`http://sivanarayana.pythonanywhere.com/`,
    technologies: ['Python', 'Flask', 'MySQL', 'JavaScript']
  },
  2: {
    title: 'Diabetes Care Tracker',
    src: diabetes,
    alt: 'Diabetes Care Tracker Application',
    about: `Designed and implemented a web-based application using Flask and MySQL to help individuals with diabetes track their daily blood sugar levels, diet, and medication. The app provides insights into trends and helps manage diabetes better.`,
github:`https://github.com/sivanarayanamiriyala/Diabetes-care-taker`,
    technologies: ['Python', 'Flask', 'MySQL', 'JavaScript', 'Matplotlib']
  },
  3: {
    title: 'Movie Streaming Web Application',
    src: movies,
    alt: 'Movie Streaming Web Application',
    about: `Developed a feature-rich movie streaming platform that allows users to watch movies and TV shows online. Integrated user authentication, search functionality, and a movie recommendation engine.`,
github:`https://github.com/sivanarayanamiriyala/watch`,
    technologies: ['Java', 'Spring', 'JavaScript', 'MySQL']
  },
};

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      src: awscloud,
      alt: 'AWS certification logo'
    },
    {
      name: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      src: awsai,
      alt: 'AWS certification logo'
    },
    {
      name: 'Wipro Java Full Stack Certified',
      issuer: 'Wipro',
      src: wipro,
      alt: 'Wipro certification logo'
    }
  ];

  const skills = [
    {
      name: 'Python',
      logo: pythonLogo,
      alt: 'Python Logo'
    },
    {
      name: 'Java',
      logo: javaLogo,
      alt: 'Java Logo'
    },
    {
      name: 'JavaScript',
      logo: javascript,
      alt: 'JS Logo'
    },
    {
      name: 'React.JS',
      logo: react,
      alt: 'JS Logo'
    },
{
      name: 'Flask',
      logo: flask,
      alt: 'JS Logo'
    },

{
      name: 'MySql',
      logo: mysql,
      alt: 'JS Logo'
    },

    {
      name: 'AWS',
      logo: awsLogo,
      alt: 'AWS Logo'
    },

    // Add more skills here
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">
        <u>
          <span className="highlight">M</span>y P
        </u>
        rojects
      </h2>

      <div className="projects-grid">
        {Object.values(data).map((elem, index) => (
          <React.Fragment key={index}>
            <ProjectFrame title={elem.title} src={elem.src} alt={elem.alt} about={elem.about} link={elem.github} projectlink={elem.projectlink} index={index}               technologies={elem.technologies}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="projects-title">
        <u>
          <span className="highlight">M</span>y T
        </u>
        ech Stack
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            logo={skill.logo}
            alt={skill.alt}
          />
        ))}
      </div>

      {/* Certifications Section */}
      <h2 className="projects-title">
        <u>
          <span className="highlight">M</span>y C
        </u>
        ertifications
      </h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            name={cert.name}
            issuer={cert.issuer}
            src={cert.src}
            alt={cert.alt}
          />
        ))}
      </div>

      {/* Download Resume Section */}
      <div className="download-resume" style={{marginBottom:"100px",marginTop:"50px"}}>
        <a href="https://resume-03-03-25.s3.ap-south-1.amazonaws.com/Resume_SN.pdf" download>
          <button className="resume-button">Download My Resume</button>
        </a>
      </div>

    </div>
  );
}

export default Projects;