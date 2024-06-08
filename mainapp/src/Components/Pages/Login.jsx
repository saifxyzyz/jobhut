import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { useRouteLoaderData } from 'react-router-dom';

export const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const loginbtn = async(email,password)=>{
   
    const response = await signInWithEmailAndPassword(auth, email, password)

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}
  return (
      <div style={styles.bg} >
        

    
        <div style={styles.container}> 
            <form className='box2' style={styles.box}>
            <h2 style={styles.title}>Log In</h2>
                {/* <label htmlFor="email" className="email" style={styles.label}>Email</label> */}
                <input type="email" className="emailip" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                {/* <label htmlFor="password" className="password" style={styles.label}>Password</label> */}
                <input type="password" className="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <button className="loginButton" type="button" onClick={()=>loginbtn(email, password)} >Log In</button>

                <p>Don't have an account?<Link to='/Signup'> Sign Up</Link></p>
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

export default Login