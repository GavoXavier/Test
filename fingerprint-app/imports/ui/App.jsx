// imports/ui/App.jsx
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';

export default function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      Meteor.call('getVerificationStatus', (error, result) => {
        if (!error) {
          setStatus(result);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Fingerprint Verification Status</h1>
      <p>{status ? status : 'Waiting for verification...'}</p>
      <HomePage />
    </div>
  );
}
