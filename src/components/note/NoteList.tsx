import React, { FC } from "react";
import { Note } from "../../types/note";
import NoteElement from "./Note";

interface Props {
  notes: Note[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const NoteList: FC<Props> = ({
  notes,
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const handleDelete = (id: number) => () => {
    onDelete(id);
  };
  const handleEdit = (id: number) => () => {
    onEdit(id);
  };
  return (
    <div className="flex flex-col max-w-full gap-3">
      {!notes.length && (
        <h4 className="text-center text-xl">There are no notes</h4>
      )}
      {notes.map((note) => (
        <NoteElement
          key={note.id}
          {...note}
          onEdit={handleEdit(note.id)}
          onDelete={handleDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default NoteList;
