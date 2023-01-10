import React, {useState} from 'react';
import './App.css';
import Note from "./components/Note";
import {INote} from "./types/types";
import NotesList from "./components/NotesList";

function App() {
    const [notes, setNotes] = useState<INote[]>([
        {
            id: 1,
            text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text ',
            isChanging: false
        },
        {
            id: 2,
            text: 'Text Text Text Text Text Text Text Text Text Text Text Text Text ',
            isChanging: false
        }
    ])


  return (
    <div className="App">
        <NotesList setNotes={setNotes} notes={notes}/>
        <button className={'add__button'} onClick={() => {
            const newNote = {
                id: notes.length + 1,
                text: '',
                isChanging: false
            }
            setNotes([...notes, newNote])
        }}>ADD NOTE</button>
    </div>
  );
}

export default App;
