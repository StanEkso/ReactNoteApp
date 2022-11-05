import React, { FC } from "react";
import type { Note } from "../../types/note";
import dateFromISOString from "../../utils/dateFromISO";
type Props = Note;

const NoteElement: FC<Props> = ({ id, title, createdAt }) => {
  return (
    <div className="rounded-sm p-2 border-2 flex gap-1 items-center">
      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-xl">{title} </h4>
        <p>{dateFromISOString(createdAt)} </p>
      </div>
      <div className="flex flex-col md:flex-row gap-1 ml-auto">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
          alt="Delete"
          className="h-6 w-6"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
          alt="E"
          className="h-6 w-6"
        />
      </div>
    </div>
  );
};

export default NoteElement;
