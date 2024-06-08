import './App.css';
import React from 'react';
import Intro from './Components/Pages/Intro';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Posting from './Components/Pages/Posting';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { useState, useEffect } from 'react';
import Home from './Components/Pages/Home'
import { Navigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Components/firebase';


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log('user:', user);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Posting" element={<Posting />} />
        <Route
          path="/Login"
          element={user ? <Navigate to="/Home" replace={true} /> : <Login />}
        />
        <Route
          path="/Signup"
          element={user ? <Navigate to="/Home" replace={true} /> : <Signup />}
        />

        <Route
          path="/Home"
          element={user ? <Home /> : <Navigate to="/Login" replace={true} />}
        />
      </Routes>
    </div>
  );
}

export default App;
