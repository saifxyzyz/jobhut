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
        <div className="bg">
        <div style={styles.container}>
        <div className="box" style={styles.box}>
            <div className="text" style={{ color:"black", fontSize:26}}>Sign Up</div>
            <div className="input">
                <input type="name" className="input" placeholder='Enter your name'/>   
            </div>
            <div className="input">
                <input type="email" className="input" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>   
            </div>
            <div className="input">
                <input type="password" className="input" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>   
            </div>
            <button className="login" onClick={()=>Signupbtn(email.password)}>Create Account</button>
            <button className="signout" onClick={()=>signOut}>signout</button>

            <p>Already have an account? <Link to='/Login'> Log In.</Link></p>
        </div>
        </div>
    </div>
  )
}

const styles = {
    label:{
        minHeight:"20px"

    },
    box:{
        width:'400px',
        height:'auto',
        backgroundsize:'cover',
        backgroundColor:"rgb(255, 247, 252)",
        boxsizing: "border-box",
        borderRadius:"10px",
        justifyContent:"center",
        display:"grid",
        padding:"50px"
        
    },
    container:{
        minHeight: "98vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundsize:"cover",
        // backgroundColor:"teal",
        color: "black",
        
        
    },
    submit:{
        backgroundColor:"skyblue",
        color:"white",
        border:"none",
        width:"15vh",
        margin:"auto",
        padding:"5px"
        


    },
    input:{
        height:"20px",
        border:"none",
    }

}
export default Signup