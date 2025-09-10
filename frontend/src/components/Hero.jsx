import React from 'react';
import backgroundVideo from '../assets/backgroundvideo.mp4';

const Hero = () => {
  const heroStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end', // Align content towards the bottom
    justifyContent: 'flex-start', // Align content towards the left
    height: '100vh',
    padding: '20px', // Add some padding from the edges
    color: 'white',
    textAlign: 'left',
  };

  const videoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const contentStyles = {
    zIndex: 1,
    maxWidth: '600px',
  };

  const headingStyles = {
    fontSize: '4rem',
    color: '#ff4c4c',
    marginBottom: '0.5rem',
  };

  const subheadingStyles = {
    fontSize: '2rem',
    color: 'pink',
    marginBottom: '1rem',
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    color: '#ffb3b3',
    margin: 0,
  };

  const buttonStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#ff4c4c',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyles = {
    backgroundColor: '#ff3333',
  };

  return (
    <section style={heroStyles}>
      <video autoPlay muted loop style={videoStyles}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={contentStyles}>
        <h1 style={headingStyles}>Aura</h1>
        <h3 style={subheadingStyles}>Shades of You</h3>
        <p style={paragraphStyles}>Discover your perfect shade</p>
        <p style={paragraphStyles}>and embrace your unique beauty</p>
        <a
          href="#"
          style={buttonStyles}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
