import React from 'react';
import Note from './Note';

const AllNotes = ({ notes, toggleNote }) => {
  console.log(notes); 
  return (
    <div className='my-3'>
      <h5>All Notes</h5>
      {notes.map(note => (
        <Note 
          key={note.id} 
          date={note.date} 
          note={note.note} 
          isImportant={note.isImportant}
          onToggle={() => toggleNote(note.id)} 
        />
      ))}
    </div>
  );
};

export default AllNotes;
