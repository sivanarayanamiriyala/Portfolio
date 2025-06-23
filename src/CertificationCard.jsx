import React from 'react';

function CertificationCard({ name, issuer, src, alt }) {
  return (
    <div
      style={{
        textAlign: 'center',
        color: 'white',
        padding: '10px',
        border: '1px solid white', // Adds the green border
        borderRadius: '8px', // Optional: rounded corners for a nicer look
        transition: 'transform 0.3s ease', // Smooth hover effect
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Increase size on hover
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Reset size after hover
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <p>{name}</p>
      <p style={{ fontSize: '0.9em', color: '#ccc' }}>Issuer: {issuer}</p>
    </div>
  );
}

export default CertificationCard;
