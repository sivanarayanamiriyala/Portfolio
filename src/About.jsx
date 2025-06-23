import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './About.css'; // External CSS file for better organization

function About() {
  var aboutme = `Hello! I'm Siva Narayana Miriyala, a dedicated software developer intern at BizCloudExperts and currently pursuing my final year of B.Tech in Computer Science and Engineering. I'm skilled in Python, Java, and AWS. With a passion for innovation and a commitment to excellence, I specialize in front-end and back-end web development using technologies like HTML, CSS, JavaScript, React.js, and Flask, Django. My problem-solving skills and attention to detail allow me to deliver high-quality solutions, and I continually seek opportunities to expand my knowledge through online courses, hackathons, and personal projects.`;

  var code = `
      var siva = {
          name: "Siva Narayana Miriyala",
          age: 22,
          college: "Nri Institute of Technology",
          place: "Vijayawada",
          domain: "Computer Science Engineering",
          skills: ["Python", "Java", "JavaScript", "Django", "C", "MongoDB", "Spring Boot", "MySQL", "React.js"],
          isAlive: true,
          startCoding: function() {
          startCoding();
          }
      };
      if (siva.isAlive) {
          siva.startCoding();
      } else {
        throw new Error("User Not Found 404");
      }`;

  return (
    <>
      <div className="about-container">
        <div className="about-text">
          <p>{aboutme}</p>
        </div>
        <div className="about-code">
          <SyntaxHighlighter language="javascript" style={tomorrow} customStyle={{ borderRadius: '20px' }}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default About;
