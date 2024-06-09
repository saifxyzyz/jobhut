import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Import Firebase configuration

const Dashboard = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to a Firestore collection of applicants
        const applicantsRef = db.collection('applicants');

        // Execute query to get documents from the collection
        const snapshot = await applicantsRef.get();

        // Extract data from documents
        const fetchedApplicants = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Update state with fetched applicants
        setApplicants(fetchedApplicants);
      } catch (error) {
        console.error('Error fetching applicants:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleAccept = (applicantId) => {
    // Implement accept logic here
    console.log('Accept applicant with ID:', applicantId);
  };

  const handleReject = (applicantId) => {
    // Implement reject logic here
    console.log('Reject applicant with ID:', applicantId);
  };

  return (
    <div>
      <h1>Applicant Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={applicant.id}>
              <td>{index + 1}</td>
              <td>{applicant.name}</td>
              <td>
                <button onClick={() => handleAccept(applicant.id)}>Accept</button>
                <button onClick={() => handleReject(applicant.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
