import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential.user);
        setIsAuthenticated(true); // Set authentication state to true
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const formStyle = {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '300px',
    margin: 'auto', // Center horizontally
    marginTop: 'calc(50vh - 150px)', 
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#9370DB',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
};

export default SignUp;
