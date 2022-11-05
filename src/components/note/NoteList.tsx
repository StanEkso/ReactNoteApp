import React, { FC } from "react";
import { Note } from "../../types/note";
import NoteElement from "./Note";

interface Props {
  notes: Note[];
}

const NoteList: FC<Props> = ({ notes }) => {
  return (
    <div className="flex flex-col max-w-full gap-3">
      {notes.map((note) => (
        <NoteElement key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
