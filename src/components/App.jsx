import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import initialNotes from "../notes";

function App() {
  const [noteList, updateNoteList] = useState(initialNotes);

  function addNote(noteToAdd) {
    updateNoteList((currentNotes) => {
      return [...currentNotes, noteToAdd];
    });
  }

  function deleteNote(noteId) {
    updateNoteList((currentNotes) => {
      return currentNotes.filter((item, idx) => {
        return idx !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {noteList.map((item, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
