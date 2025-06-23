import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Button from './Button';
import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Router>
        <nav className="navbar">
          <p className="para">Siva Narayana Miriyala</p>

          {/* Hamburger for mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation buttons, controlled by isMenuOpen for mobile */}
          <div className={`nav-buttons ${isMenuOpen ? "open" : ""}`}>
            <Button className="hover-button" path="/" name="Home" />
            <Button className="hover-button" path="/about" name="About" />
            <Button className="hover-button" path="/projects" name="Projects" />
            <Button className="hover-button" path="/contact" name="Contact" />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
