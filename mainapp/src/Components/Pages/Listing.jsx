import React, { useContext, useState, useEffect } from 'react';
import { Jobcontext } from './Jobcontext';
import ConfirmModal from './ConfirmModal';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

const Listing = () => {
  const { jobs } = useContext(Jobcontext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to control the visibility of the form
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mycollection"));
        const documents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(documents);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleApplyClick = (jobId) => {
    setCurrentJobId(jobId);
    setShowForm(true); // Show the form when applying
  };

  const handleConfirmApply = () => {
    setAppliedJobs([...appliedJobs, currentJobId]);
    setShowModal(false);
    setCurrentJobId(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentJobId(null);
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
    setCurrentJobId(null);
    setName('');
    setPhoneNumber('');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add the application data to Firestore
      await addDoc(collection(db, "users"), {
        jobId: currentJobId,
        name: name,
        phoneno: phoneNumber,
      });
      setAppliedJobs([...appliedJobs, currentJobId]);
      setShowForm(false); // Close the form after submission
      setCurrentJobId(null);
      setName('');
      setPhoneNumber('');
    } catch (error) {
      console.error("Error submitting application: ", error);
    }
  };

  const isJobApplied = (jobId) => appliedJobs.includes(jobId);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      position: 'absolute',
      top: '20px',
      right: '20px',
    },
    signOutButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#e8491d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    heading: {
      color: '#fff',
      fontSize: '32px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    jobList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '20px',
      maxWidth: '1200px',
    },
    jobItem: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '28vh', // Three posts per row with 20px gap
      minHeight:'20vh',
      position: 'relative',
      boxSizing: 'border-box',
    },
    jobTitle: {
      fontSize: '24px',
      margin: '0 0 10px',
    },
    jobDetail: {
      fontSize: '16px',
      margin: '5px 0',
    },
    applyButton: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '8px 16px',
      fontSize: '14px',
      color: '#fff',
      backgroundColor: '#e8491d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    appliedButton: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '8px 16px',
      fontSize: '14px',
      color: '#fff',
      backgroundColor: '#6c757d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'default',
      transition: 'all 0.3s ease',
    },
    noJobs: {
      fontSize: '24px',
      color: '#fff',
    },
    formContainer: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: '999',
      width: '400px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    formButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#e8491d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => signOut(auth)} style={styles.signOutButton}>Sign Out</button>
      </div>
      <h1 style={styles.heading}>Job Listings</h1>
      <div style={styles.jobList}>
        {data.length > 0 ? (
          data.map((job) => (
            <div key={job.id} style={styles.jobItem}>
              <h2 style={styles.jobTitle}>{job.jobTitle}</h2>
              <p style={styles.jobDetail}><strong>Job:</strong> {job.job}</p>
              <p style={styles.jobDetail}><strong>Date:</strong> {job.datentime}</p>
              <p style={styles.jobDetail}><strong>Pay:</strong> {job.pay}</p>
              <p style={styles.jobDetail}><strong>Description:</strong> {job.desc}</p>
              <button
                style={isJobApplied(job.id) ? styles.appliedButton : styles.applyButton}
                onClick={() => handleApplyClick(job.id)}
                disabled={isJobApplied(job.id)}
              >
                {isJobApplied(job.id) ? 'Applied' : 'Apply'}
              </button>
            </div>
          ))
        ) : (
          <p style={styles.noJobs}>No job postings available.</p>
        )}
      </div>
      <ConfirmModal
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmApply}
      />
      {/* Render the form if showForm is true */}
      {showForm && (
        <div style={styles.formContainer}>
          <h2>Application Form</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.formButton}>Submit</button>
            <button type="button" onClick={handleCloseForm} style={styles.formButton}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Listing;
