import React from 'react';

const ScrollButton = () => {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToNextSection}
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        color: '#8B4513', // Brown color
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}
      aria-label="Scroll to next section"
    >
      ↓
    </button>
  );
};

export default ScrollButton;