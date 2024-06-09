import React from "react";
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from "react";
import { auth } from "../firebase";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const Signupbtn = async (email, password) => {
        const Auth = auth;
        const response = await createUserWithEmailAndPassword(Auth, email, password).then((userCredential) => {
            //signed up
            const user = userCredential.user;
            console.log(user);
        })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div style={styles.bg}>
            <div style={styles.container}>
                <div style={styles.box}>
                    <div style={styles.title}>Sign Up</div>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            style={styles.input}
                            placeholder='Enter your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input
                            type="email"
                            style={styles.input}
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={styles.inputContainer}>
                        <input
                            type="password"
                            style={styles.input}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        style={styles.signupButton}
                        onClick={() => Signupbtn(email, password)}
                    >Create Account</button>
                    <p style={styles.loginText}>Already have an account?
                        <Link to='/Login' style={styles.loginLink}> Log In.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

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
        fontSize: '24px',
        fontWeight: 'bold',
    },
    inputContainer: {
        margin: '10px 0',
    },
    input: {
        width: '100%',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
    },
    inputFocus: {
        borderColor: '#3333ff',
    },
    signupButton: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#e8491d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        transition: 'background-color 0.3s, transform 0.3s',
        margin: '20px 0',
    },
    signupButtonHover: {
        backgroundColor: '#c43710',
        transform: 'scale(1.05)',
    },
    loginText: {
        marginTop: '20px',
        color: '#333',
    },
    loginLink: {
        color: '#e8491d',
        textDecoration: 'none',
        transition: 'color 0.3s, text-decoration 0.3s',
    },
    loginLinkHover: {
        color: '#c43710',
        textDecoration: 'underline',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    }
};

export default Signup;
