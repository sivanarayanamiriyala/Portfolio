import React, { useState } from 'react';
import contactimage from './images/contactimage.png';
import Button from './Button';
import './Contact.css'; // Separate styles in a CSS file for better structure

function Contact() {
  // State hooks to manage form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const inputstyle = {
    width: '100%', // Make the input take full width
    backgroundColor: '#3c3c3d',
    border: 'none',
    outline: 'none',
    color: 'white',
    height: '5vh',
    fontSize: '19px',
    borderBottom: '2px solid white'
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate form data
    if (!fullName || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare data to send to API
    const data = {
      name: fullName,
      email: email,
      message: message
    };

    try {
      const response = await fetch('https://x85fvduwbj.execute-api.ap-south-1.amazonaws.com/mystage/senddetails', { // Use your API Gateway URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="contact-container">
      <img src={contactimage} className="contact-image" alt="Contact" />
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact ME</h1>
          <div className="input-group">
            Full Name
            <input
              type="text"
              style={inputstyle}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input-group">
            E-mail
            <input
              type="email"
              style={inputstyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            Message
            <input
              type="text"
              style={inputstyle}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <br />
          <Button name="Contact ME" className="hover-button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
