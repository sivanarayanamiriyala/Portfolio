import React from 'react';

function ProjectFrame({ title, src, alt, about,link,projectlink, index, technologies }) {
  return (
    <div
      className="project-frame"
      style={{
        display: 'flex',
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Alternate between left and right
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '30%', // Reduce image size
          height: 'auto',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ color: 'white', marginBottom: '15px' }}>{title}</h3>
        <p style={{ color: '#ccc', marginBottom: '15px' }}>{about}</p>
        <p style={{ color: 'white', marginBottom: '15px' }}>link: <a href="{link}" style={{ color: 'green', marginBottom: '15px' }}>{link}</a></p>
       { projectlink&&<p style={{ color: 'white', marginBottom: '15px' }}>Project link: <a href="{projectlink}" style={{ color: 'green', marginBottom: '15px' }}>{projectlink}</a></p>}

        <div>
          {technologies.map((tech, idx) => (
            <button
              key={idx}
              style={{
                backgroundColor: '#3c3',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                padding: '8px 12px',
                marginRight: '10px',
                marginBottom: '10px',
                cursor: 'pointer',
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectFrame;
