import './App.css';
import React from 'react';
import Intro from './Components/Pages/Intro';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Posting from './Components/Pages/Posting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { useState, useEffect } from 'react';

function App() {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     setLoading(false);
  //     console.log('user:', user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Posting" element={<Posting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
