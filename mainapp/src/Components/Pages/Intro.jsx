import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { Link, Route, Routes, useHistory, useNavigate } from 'react-router-dom'



const Intro = () => {
  const navigate = useNavigate()
  // const history = useHistory();
  // const routeChange = () =>{ 
  //   let path = `/Login`; 
  //   history.push(path);
  // }
  return (
    <div className="bg">
      <button class='emp' onClick={()=> navigate("/Signupworker")}>I'm Looking for a Job</button>
      <button class='hire' >I'm Looking to Hire</button>
    </div>
  )
}
const styles={
 

}
export default Intro
