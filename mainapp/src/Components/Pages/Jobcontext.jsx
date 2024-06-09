// JobContext.js
import React, { createContext, useState } from 'react';

export const Jobcontext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <Jobcontext.Provider value={{ jobs, addJob }}>
      {children}
    </Jobcontext.Provider>
  );
};
