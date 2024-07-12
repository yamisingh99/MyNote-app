import React, { useState } from 'react';

const CreateNote = ({ addNote }) => {
  const [note, setNote] = useState("");
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setNote(e.target.value);
    
    if (error && e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() === "") {
      setError("Please enter some text."); 
    } else {
      const data = {
        note,
        id: Math.floor(Math.random() * 1000),
        date: new Date().toJSON().slice(0, 10),
        isImportant: false
      };
      addNote(data);
      setNote("");
      setError(""); 
    }
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    resize: 'none', 
  };

  const buttonStyle = {
    backgroundColor: '#9370DB',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s ease-in-out',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            cols="30"
            rows="3"
            placeholder="Write your dream note :)"
            className="form-control"
            value={note}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
          {error && <div style={errorStyle}>{error}</div>} 
          <button
            type="submit"
            style={buttonStyle}
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;