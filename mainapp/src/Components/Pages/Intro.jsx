import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
    backgroundSize: 'cover',
  },
  button: {
    padding: '20px 40px',
    margin: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#e8491d',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#c43710',
    transform: 'scale(1.05)',
  },
};

const Intro = () => {
  const navigate = useNavigate();
  const [hoverJob, setHoverJob] = useState(false);
  const [hoverHire, setHoverHire] = useState(false);

  return (
    <div style={styles.bg}>
      <button
        style={hoverJob ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHoverJob(true)}
        onMouseLeave={() => setHoverJob(false)}
        onClick={() => navigate("/Listing")}
      >
        I'm Looking for a Job
      </button>
      <button
        style={hoverHire ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHoverHire(true)}
        onMouseLeave={() => setHoverHire(false)}
        onClick={() => navigate("/Posting")}
      >
        I'm Looking to Hire
      </button>
    </div>
  );
};

export default Intro;
