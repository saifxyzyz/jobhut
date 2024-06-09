import React, { useContext, useState, useEffect } from 'react';
import { Jobcontext } from './Jobcontext';
import ConfirmModal from './ConfirmModal';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase.js';

const Listing = () => {
  const { jobs } = useContext(Jobcontext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);
  const [data, setData] = useState([]);

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
    setShowModal(true);
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
      padding: '60px', // Three times bigger padding
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: 'calc((100% - 40px) / 3)', // Three posts per row with 20px gap
      position: 'relative',
      boxSizing: 'border-box',
    },
    jobTitle: {
      fontSize: '48px', // Three times bigger font size
      margin: '0 0 20px',
    },
    jobDetail: {
      fontSize: '24px', // Three times bigger font size
      margin: '10px 0',
    },
    applyButton: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        padding: '8px 16px', // Smaller padding
        fontSize: '14px', // Smaller font size
        color: '#fff',
        backgroundColor: '#e8491d', // Color like sign-out button
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    appliedButton: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '8px 16px', // Three times bigger padding
      fontSize: '14px', // Three times bigger font size
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
    </div>
  );
};

export default Listing;
