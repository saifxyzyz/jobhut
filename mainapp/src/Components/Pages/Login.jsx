import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginbtn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div style={styles.bg}>
      <div style={styles.container}>
        <form className='box2' style={styles.box}>
          <h2 style={styles.title}>Log In</h2>
          <input
            type="email"
            className="emailip"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type="password"
            className="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button
            className="loginButton"
            type="button"
            onClick={() => loginbtn(email, password)}
            style={styles.loginButton}
          >Log In</button>
          <p style={styles.signupText}>
            Don't have an account?
            <Link to='/Signup' style={styles.signupLink}> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

const styles = {
  bg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
    backgroundSize: 'cover',
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
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '15px',
    margin: '15px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#3333ff',
  },
  loginButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#e8491d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  loginButtonHover: {
    backgroundColor: '#c43710',
    transform: 'scale(1.05)',
  },
  signupText: {
    marginTop: '20px',
    color: '#333',
  },
  signupLink: {
    color: '#e8491d',
    textDecoration: 'none',
    transition: 'color 0.3s, text-decoration 0.3s',
  },
  signupLinkHover: {
    color: '#c43710',
    textDecoration: 'underline',
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  }
};

export default Login;
