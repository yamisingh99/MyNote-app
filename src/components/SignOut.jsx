import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const SignOut = ({ setIsAuthenticated }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
        setIsAuthenticated(false); 
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px', 
    padding: '5px 10px',
    backgroundColor: '#FF1111',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <button onClick={handleSignOut} style={buttonStyle}>
      Sign Out
    </button>
  );
};

export default SignOut;
