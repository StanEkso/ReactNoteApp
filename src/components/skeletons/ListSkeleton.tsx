import React, { FC } from "react";
import StringSkeleton from "./StringSkeleton";
import TitleSkeleton from "./TitleSkeleton";

interface Props {
  length?: number;
  withTitle?: boolean;
  element?: FC;
  grid?: boolean;
}

const ListSkeleton: FC<Props> = ({
  length = 10,
  withTitle = false,
  element: Element = StringSkeleton,
  grid = false,
}) => {
  return (
    <div className="flex flex-col max-w-full gap-3 animate-pulse ">
      {withTitle && <TitleSkeleton />}
      <div
        className={
          grid
            ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "flex flex-col gap-3"
        }
      >
        {Array.from({ length }).map((_, i) => (
          <Element key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListSkeleton;
