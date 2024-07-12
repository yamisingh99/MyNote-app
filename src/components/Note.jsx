import React from 'react';

const Note = ({ date, note, isImportant, onToggle }) => {
  const noteCardStyle = {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    backgroundColor: isImportant ? '#FFC0CB' : '#E6E6FA',
    padding: '12px',
    margin: '5px 5px',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: 'calc(100% - 20px)', 
    transition: 'transform 0.2s ease-in-out',
    transform: 'translateZ(0)', 
    position: 'relative',
    zIndex: '1',
  };

  const buttonStyle = {
    backgroundColor: isImportant ? '#FF1493' : '#9370DB',
    color: 'white',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease-in-out',
  };

  return (
    <div style={noteCardStyle}>
      <p style={{ color: isImportant ? '#FF1493' : '#9370DB', fontWeight: 'bold' }}>Date: {date}</p>
      <p>{note}</p>
      <button onClick={onToggle} style={buttonStyle}>
        {isImportant ? 'Unmark Important' : 'Mark Important'}
      </button>
    </div>
  );
};

export default Note;
