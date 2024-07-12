import React from 'react';
import Note from './Note';

const ImportantNotes = ({ notes, toggleNote }) => {
  return (
    <div>
      <h5>Important Notes</h5>
      {
        notes.filter(note => note.isImportant).map(note => (
          <Note 
            key={note.id} 
            date={note.date} 
            note={note.note} 
            isImportant={note.isImportant} 
            onToggle={() => toggleNote(note.id)} 
          />
        ))
      }
    </div>
  );
};

export default ImportantNotes;
