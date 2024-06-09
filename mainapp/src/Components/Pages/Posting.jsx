import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"; // Ensure this path is correct
import { Jobcontext } from './Jobcontext';


const Posting = () => {
  const { addJob } = useContext(Jobcontext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    dateTime: '',
    pay: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    navigate('/listing');
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
      // Redirect to login page or handle post-sign-out logic
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={handleSignOut} style={styles.signOutButton}>Sign Out</button>
      </div>
      <h1 style={styles.heading}>Post a Job</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="jobTitle" style={styles.label}>Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dateTime" style={styles.label}>Date and Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="pay" style={styles.label}>Pay:</label>
          <input
            type="text"
            id="pay"
            name="pay"
            value={formData.pay}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={styles.submitButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
          onClick={saveDataToFirestore}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
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
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px 20px',
    boxSizing: 'border-box',
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
    marginBottom: '20px',
    fontSize: '32px',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    minHeight: '100px',
  },
  submitButton: {
    width: '100%',
    padding: '15px 0',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#e8491d',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
};

export default Posting;
