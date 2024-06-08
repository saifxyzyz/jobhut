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
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#e8491d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  loginButtonHover: {
    backgroundColor: '#c43710',
  },
  signupText: {
    marginTop: '20px',
    color: '#333',
  },
  signupLink: {
    color: '#e8491d',
    textDecoration: 'none',
  },
  signupLinkHover: {
    textDecoration: 'underline',
  },
};

const Login = () => {
  const [hover, setHover] = useState(false);
  const Navigate = useNavigate();


  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <form style={styles.box}>
          <h2 style={styles.title}>Log In</h2>
          <input type="email" style={styles.input} placeholder="Email" />
          <input type="password" style={styles.input} placeholder="Password" />
          <button
            type="submit"
            style={hover ? { ...styles.loginButton, ...styles.loginButtonHover } : styles.loginButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => Navigate("/Posting")}
          >
            Log In
          </button>
          <p style={styles.signupText}>
            Don't have an account? <Link to="/Signup" style={styles.signupLink}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
