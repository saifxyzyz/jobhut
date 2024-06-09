import './App.css';
import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Intro from './Components/Pages/Intro';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Posting from './Components/Pages/Posting';
import Home from './Components/Pages/Home';
import Listing from './Components/Pages/Listing'; 
import Dashboard from './Components/Pages/Dashboard';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Components/firebase';
import { JobProvider } from './Components/Pages/Jobcontext'; 

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
      <JobProvider>
        <Routes>
          <Route path="/Intro" element={<Intro />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

          <Route
            path="/Login"
            element={user ? <Navigate to="/Intro" replace={true} /> : <Login />}
          />
          <Route
            path="/Dashboard"
            element={user ? <Dashboard /> :<Navigate to="/" replace={true} />  }
          />
          <Route
            path="/Posting"
            element={user ? <Posting /> : <Navigate to="/" replace={true} />}
          />
          <Route
            path="/"
            element={user ? <Navigate to="/Intro" replace={true} /> : <Signup />}
          />
          <Route
            path="/Home"
            element={user ? <Home /> : <Navigate to="/Login" replace={true} />}
          />
          <Route
            path="/Listing"
            element={user ? <Listing /> : <Navigate to="/Login" replace={true} />}
          />
        </Routes>
      </JobProvider>
    </div>
  );
}

export default App;
