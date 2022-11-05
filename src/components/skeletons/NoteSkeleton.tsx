import React, { FC } from "react";
import IconSkeleton from "./IconSkeleton";
import StringSkeleton from "./StringSkeleton";
import TitleSkeleton from "./TitleSkeleton";

const NoteSkeleton: FC = () => {
  return (
    <div className="rounded-sm p-2 border-2 flex gap-1 items-center animate-pulse">
      <div className="flex flex-col gap-1">
        <TitleSkeleton />
        <StringSkeleton width={240} />
      </div>
      <div className="flex flex-col md:flex-row gap-1 ml-auto">
        <IconSkeleton />
        <IconSkeleton />
      </div>
    </div>
  );
};

export default NoteSkeleton;
