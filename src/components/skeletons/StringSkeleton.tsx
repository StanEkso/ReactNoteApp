import React, { FC } from "react";

interface Props {
  maxWidth?: number;
  width?: number;
}

const StringSkeleton: FC<Props> = ({ width = 480 }) => {
  return (
    <div
      className={`h-4 max-w-[480px] rounded-md bg-gray-300 w-[${width}px]`}
    />
  );
};

export default StringSkeleton;
