import React, { useContext, useState } from 'react';
import { Jobcontext } from './Jobcontext';
import ConfirmModal from './ConfirmModal';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

const Listing = () => {
  const { jobs } = useContext(Jobcontext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentJobId, setCurrentJobId] = useState(null);

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
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    listItem: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      width: '100%',
      maxWidth: '500px',
      position: 'relative',
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
      left: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    appliedButton: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#6c757d',
      border: 'none',
      borderRadius: '5px',
      cursor: 'default',
      transition: 'all 0.3s ease',
    },
    noJobs: {
      fontSize: '18px',
      color: '#fff',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => signOut(auth)} style={styles.signOutButton}>Sign Out</button>
      </div>
      <h1 style={styles.heading}>Job Listings</h1>
      <div style={styles.list}>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} style={styles.listItem}>
              <h2 style={styles.jobTitle}>{job.jobTitle}</h2>
              <p style={styles.jobDetail}><strong>Location:</strong> {job.location}</p>
              <p style={styles.jobDetail}><strong>Date and Time:</strong> {job.dateTime}</p>
              <p style={styles.jobDetail}><strong>Pay:</strong> {job.pay}</p>
              <p style={styles.jobDetail}><strong>Description:</strong> {job.description}</p>
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
