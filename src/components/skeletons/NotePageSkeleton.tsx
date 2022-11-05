import React from "react";
import IconSkeleton from "./IconSkeleton";
import ListSkeleton from "./ListSkeleton";
import StringSkeleton from "./StringSkeleton";
import TitleSkeleton from "./TitleSkeleton";

const NotePageSkeleton = () => {
  return (
    <>
      <div className="flex gap-1 items-center">
        <TitleSkeleton />
        <div className="flex flex-col md:flex-row gap-1 ml-auto">
          <IconSkeleton />
          <IconSkeleton />
        </div>
      </div>
      <ListSkeleton element={StringSkeleton} length={4} />
    </>
  );
};

export default NotePageSkeleton;
