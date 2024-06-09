import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase.js';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth'; // Import the signOut function

const Dashboard = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
      // Redirect to login page or handle post-sign-out logic
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(documents);
      } catch (error) {
        console.error("Error fetching applications: ", error);
      }
    };

    fetchUsers();
  }, []);

  

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to bottom right, #4e54c8, #8f94fb)',
      minHeight: '100vh',
      color: '#fff',
    },
    heading: {
      fontSize: '32px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    signOutBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      padding: '8px 16px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#e8491d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    table: {
      width: '80%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    th: {
      border: '1px solid #ddd',
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: 'white',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ddd',
      color:'black',
      padding: '12px',
      textAlign: 'left',
      backgroundColor: 'white',
    },
    noApplications: {
      fontSize: '18px',
      color: '#888',
    },
  };

  return (
    <div style={styles.container}>
        <button onClick={handleSignOut} style={styles.signOutBtn}>Sign Out</button>
        <h1 style={styles.heading}>Applications Dashboard</h1>
      {users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map(application => (
              <tr key={application.id}>
                <td style={styles.td}>{application.name}</td>
                <td style={styles.td}>{application.phoneno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.noApplications}>No applications found.</p>
      )}
    </div>
  );
};

export default Dashboard;
