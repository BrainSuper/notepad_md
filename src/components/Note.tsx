import React, {FC} from 'react';
import styles from './../styles/Note.module.css';
import NoteDate from "./NoteDate";
import {INote} from "../types/types";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";


interface INoteProps {
    note: INote
    setNotes: (notes: INote[]) => void;
    stateNotes: INote[];
}
// onClick={() => {
//                     setNotes(stateNotes.map(stateNote => {
//                         if (stateNote.id === note.id) {
//                             return {...stateNote, isChanging: true}
//                         } return {...stateNote}
//                     }))
//                 }
//onBlur={() => {
//                     setNotes(stateNotes.map(stateNote => {
//                         if (stateNote.id === note.id) {
//                             return {...stateNote, isChanging: false}
//                         } return {...stateNote}
//                     }))}
const Note: FC<INoteProps> = ({note, setNotes, stateNotes}: INoteProps) => {
    return (
        <div className={styles.note__wrapper}>
            <NoteDate note={note} setNotes={setNotes} stateNotes={stateNotes}/>
            {note.isChanging
            ? <textarea value={note.text}
                onChange={(e) => {
                    setNotes(stateNotes.map(stateNote => {
                        if (stateNote.id === note.id) {
                            return {...stateNote, text: e.target.value}
                        } return {...stateNote}
                    }))

                }}></textarea>
            : <div className={styles.monitor}><ReactMarkdown remarkPlugins={[remarkGfm]}>{note.text}</ReactMarkdown></div>}

        </div>
    );
};

export default Note;