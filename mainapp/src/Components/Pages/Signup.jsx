import React from "react";
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth'
// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
export const Signup = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
    console.log('nt err')
    const Signupbtn = async(email,password)=>{
        console.log("nt err")
        const Auth = auth
        const response = await createUserWithEmailAndPassword(Auth, email, password).then((userCredential) =>{
            //signed up
            console.log(" nt errrr")
            const user = userCredential.user;
            console.log(user)
            // ...
            })
            .catch((error) => {
              const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            console.log("errrr")
            // ..
            });
        }
    
    
    return (
        <div className="bg" style={styles.bg}>
        <div className="container" style={styles.container}>
        <div className="box" style={styles.box}>
            <div className="text" style={styles.title}>Sign Up</div>
            <div className="input" style={styles.input}>
                <input  className="input"  placeholder='Enter your name'/>   
            </div>
            <div  style={styles.input}>
                <input type="email" className="input" placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)}/>   
            </div>
            <div  style={styles.input}>
                <input type="password" className="input"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>   
            </div>
            <button className="login" style={styles.signupButton} onClick={()=>Signupbtn(email, password)}>Create Account</button>
            <button className="signout" onClick={()=>signOut}>signout</button>

            <p>Already have an account? <Link to='/Login'> Log In.</Link></p>
        </div>
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
      
export default Signup