import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const styles = {
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundColor: '#ececec',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '98vh',
  },
  box: {
    width: '400px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  signupButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#e8491d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  signupButtonHover: {
    backgroundColor: '#c43710',
  },
  loginText: {
    marginTop: '20px',
    color: '#333',
  },
  loginLink: {
    color: '#e8491d',
    textDecoration: 'none',
  },
  loginLinkHover: {
    textDecoration: 'underline',
  },
};

const Signup = () => {
  const [hover, setHover] = useState(false);
  const Navigate = useNavigate();


  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <form style={styles.box}>
          <h2 style={styles.title}>Sign Up</h2>
          <input type="text" style={styles.input} placeholder="Username" />
          <input type="email" style={styles.input} placeholder="Email" />
          <input type="password" style={styles.input} placeholder="Password" />
          <button
            type="submit"
            style={hover ? { ...styles.signupButton, ...styles.signupButtonHover } : styles.signupButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => Navigate("/Posting")}
          >
            Sign Up
          </button>
          <p style={styles.loginText}>
            Already have an account? <Link to="/Login" style={styles.loginLink}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
