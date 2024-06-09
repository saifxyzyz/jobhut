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
      <div className="bg" >
        

    
        <div style={styles.container}> 
            <form className='box2' style={styles.box}>
                <div className="text" style={{color:"Black", fontSize:26}}>Log In</div>
                {/* <label htmlFor="email" className="email" style={styles.label}>Email</label> */}
                <input type="email" className="emailip" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                {/* <label htmlFor="password" className="password" style={styles.label}>Password</label> */}
                <input type="password" className="password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <button className="login" type="button" onClick={()=>loginbtn(email, password)} >Log In</button>

                <p>Don't have an account?<Link to='/Signup'> Sign Up</Link></p>
            </form>
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
        height:'25vh',
        backgroundsize:'cover',
        backgroundColor:"rgb(255, 247, 252)",
        boxsizing: "border-box",
        borderRadius:"10px",
        justifyContent:"center",
        display:"inline-grid",
        padding:"50px"
        
    },
    container:{
        
        minHeight: "98vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundsize:"cover",
        color: "black",
        
        
    },
    submit:{
        backgroundColor:"skyblue",
        color:"white",
        border:"none",
        width:"10vh",
        margin:"auto",
        padding:"5px"
    },
    '& submit:hover':{
        textDecoration:"underline"
    },
    input:{

        borderRadius:"5px",
        padding:"5px",
        height:"20px",
        
    }
    

}

export default Login