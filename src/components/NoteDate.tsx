import React, {useEffect, useState} from 'react';
import styles from "./../styles/NoteDate.module.css";
import Button from "./Button";
import {INote} from "../types/types";
interface NoteDateProps {
    note: INote;
    setNotes: (notes: INote[]) => void;
    stateNotes: INote[];
}

const NoteDate = (props: NoteDateProps) => {
    const [newDate, setNewDate] = useState(new Date());
    console.log(newDate.getMonth());

    return (
        <div className={styles.note__date}>
            <span className={styles.date__wrapper}><span className={styles.created}>Created</span> <span className={styles.date}>{newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()}.{newDate.getMonth() < 10 ? '0' + newDate.getMonth() + 1 : newDate.getMonth() + 1}.{newDate.getFullYear()}  {newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()}:{newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()}:{newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds()}</span></span>
            <Button onClick={() => {
                console.log('hello');
                props.setNotes(props.stateNotes.map(stateNote => {
                    if (stateNote.id === props.note.id) {
                        return {...stateNote, isChanging: !stateNote.isChanging}
                    } return {...stateNote}
                }))
            }}>{props.note.isChanging ? 'save' : 'edit'}</Button>
            <Button onClick={() => {
                props.setNotes(props.stateNotes.filter(stateNote => stateNote.id !== props.note.id))
            }}>delete</Button>
        </div>
    );
};

export default NoteDate;