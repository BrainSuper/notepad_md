import React, {FC} from 'react';
import {INote} from "../types/types";
import Note from "./Note";

interface IListProps {
    notes: INote[];
    setNotes: (notes: INote[]) => void;
}
const NotesList: FC<IListProps> = ({notes, setNotes}: IListProps) => {
    return (
        <div>
            {notes.map(note => <Note key={note.id} stateNotes={notes} setNotes={setNotes} note={note}/>)}
        </div>
    );
};

export default NotesList;