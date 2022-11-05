import React, { FC } from "react";
import { Link } from "react-router-dom";
import type { Note } from "../../types/note";
import dateFromISOString from "../../utils/dateFromISO";
import NoteControls from "./NoteControls";
type Props = Note & {
  onEdit?: () => void;
  onDelete?: () => void;
};

const NoteElement: FC<Props> = ({
  id,
  title,
  createdAt,
  onDelete = () => {},
  onEdit = () => {},
}) => {
  return (
    <div className="rounded-sm p-2 border-2 flex gap-1 items-center">
      <div className="flex flex-col gap-1">
        <Link to={`/notes/${id}`}>
          <h4 className="font-bold text-xl">{title} </h4>
        </Link>
        <p>{dateFromISOString(createdAt)} </p>
      </div>
      <NoteControls onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default NoteElement;
