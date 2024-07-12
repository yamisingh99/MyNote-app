import React, { useState } from 'react';
import './App.css';
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';
import ImportantNotes from './components/ImportantNotes';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

function App() {
  const [notes, setNotes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status
  const [isSignUp, setIsSignUp] = useState(false); // State to track SignIn/SignUp

  const addNote = (note) => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  const toggleNote = (id) => {
    const updatedNotes = notes.map(n => n.id === id ? { ...n, isImportant: !n.isImportant } : n);
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
  };

  const handleToggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h1 style={{
    margin: '50px 10px',
    color: '#4B0082', // Dark purple color
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0.3, 0.3, 0.3, 0.3)' // Adding a slight shadow
  }}>Welcome to My Notes</h1>
      {!isAuthenticated ? (
        <>
          {isSignUp ? (
            <>
              <SignUp setIsAuthenticated={setIsAuthenticated} />
              <div
                onClick={handleToggleAuth}
                style={{
                  margin: '20px',
                  padding: '10px',
                  cursor: 'pointer',
                  color: '#0000EE', // Blue color
                  transition: 'color 0.2s ease-in-out', // Smooth transition
                }}
                onMouseOver={(e) => e.target.style.color = '#0000AA'} // Darker blue on hover
                onMouseOut={(e) => e.target.style.color = '#0000EE'} // Restore original color on mouse out
              >
                Already have an account? Sign In
              </div>
            </>
          ) : (
            <>
              <SignIn setIsAuthenticated={setIsAuthenticated} />
              <div
                onClick={handleToggleAuth}
                style={{
                  margin: '20px',
                  padding: '10px',
                  cursor: 'pointer',
                  color: '#0000EE', // Blue color
                  transition: 'color 0.2s ease-in-out', // Smooth transition
                }}
                onMouseOver={(e) => e.target.style.color = '#0000AA'} // Darker blue on hover
                onMouseOut={(e) => e.target.style.color = '#0000EE'} // Restore original color on mouse out
              >
                Don't have an account? Sign Up
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <SignOut setIsAuthenticated={setIsAuthenticated} />
          <CreateNote addNote={addNote} />
          <hr />
          <ImportantNotes notes={notes} toggleNote={toggleNote} deleteNote={deleteNote} />
          <hr />
          <AllNotes notes={notes} toggleNote={toggleNote} deleteNote={deleteNote} />
          <hr />
        </>
      )}
    </div>
  );
}

export default App;
