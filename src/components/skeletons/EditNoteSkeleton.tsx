import React from "react";
import ListSkeleton from "./ListSkeleton";
import StringSkeleton from "./StringSkeleton";

const EditNoteSkeleton = () => {
  return (
    <div className="grid gap-2 items-center animate-pulse">
      <h3 className="font-bold text-center text-xl">Edit Note</h3>
      <div className="grid gap-1 mx-4">
        <div className="py-1 px-2 border-2 rounded-sm">
          <StringSkeleton />
        </div>
        <div className="py-1 px-2 border-2 rounded-sm">
          <ListSkeleton length={3} />
        </div>
        <div className="bg-slate-600 text-white rounded-sm py-3"></div>
      </div>
    </div>
  );
};

export default EditNoteSkeleton;
