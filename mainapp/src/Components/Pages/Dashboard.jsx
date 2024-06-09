import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase.js';

const Dashboard = () => {
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
    },
    heading: {
      fontSize: '32px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Applications Dashboard</h1>
      {users.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Phone Number</th>
              {/* <th style={styles.th}>Approval</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map(application => (
              <tr key={application.id}>
                <td style={styles.td}>{application.name}</td>
                <td style={styles.td}>{application.phoneno}</td>
                {/* <td style={styles.td}>{application.jobId}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default Dashboard;
