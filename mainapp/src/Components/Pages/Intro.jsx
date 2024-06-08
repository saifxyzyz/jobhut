import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundColor: '#ececec',
  },
  button: {
    padding: '15px 30px',
    margin: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#e8491d',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#c43710',
  },
};

const Intro = () => {
  const navigate = useNavigate();
  const [hoverJob, setHoverJob] = React.useState(false);
  const [hoverHire, setHoverHire] = React.useState(false);

  return (
    <div style={styles.bg}>
      <button
        style={hoverJob ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHoverJob(true)}
        onMouseLeave={() => setHoverJob(false)}
        onClick={() => navigate("/Signupworker")}
      >
        I'm Looking for a Job
      </button>
      <button
        style={hoverHire ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHoverHire(true)}
        onMouseLeave={() => setHoverHire(false)}
        onClick={() => navigate("/Signup")}
      >
        I'm Looking to Hire
      </button>
    </div>
  );
};

export default Intro;

