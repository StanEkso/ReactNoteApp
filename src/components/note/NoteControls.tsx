import React, { FC, memo } from "react";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

const NoteControls: FC<Props> = ({ onDelete, onEdit }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 ml-auto">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
        alt="Delete"
        className="h-6 w-6 cursor-pointer"
        onClick={onDelete}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
        alt="E"
        className="h-6 w-6 cursor-pointer"
        onClick={onEdit}
      />
    </div>
  );
};

export default memo(NoteControls);
