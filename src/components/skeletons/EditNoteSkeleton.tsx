import React from "react";
import ListSkeleton from "./ListSkeleton";
import StringSkeleton from "./StringSkeleton";

const EditNoteSkeleton = () => {
  return (
    <div className="grid gap-2 items-center">
      <div className="grid gap-1 mx-4 animate-pulse">
        <div className="py-1 px-2 border-2 rounded-sm">
          <StringSkeleton />
        </div>
        <div className="py-1 px-2 border-2 rounded-sm">
          <ListSkeleton length={3} />
        </div>
        <div className="bg-blue-600 text-white rounded-sm py-1 min-h-[36px]"></div>
      </div>
    </div>
  );
};

export default EditNoteSkeleton;
