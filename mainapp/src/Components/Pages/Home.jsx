import React from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase.js'

const Home = () => {
  
  return (
    <div className='homecont'>
        <div className='nav'>
            <h1 style={{margin:"0"}}>Home</h1>
            <button className="signout" onClick={()=>{signOut(auth)}}>Sign Out</button>
        </div>
        <div className='mainp'>
          <div className="workerpod1"><h1>Ramesh  Pest control</h1></div>
        </div>
        <div className='mainp'>
          <div className="workerpod1"><h1>Ramesh  Pest control</h1></div>
        </div>
        <div className='mainp'>
          <button className="workerpod1" >Ramesh  Pest control</button>
        </div>
    </div>
  )
}

export default Home;