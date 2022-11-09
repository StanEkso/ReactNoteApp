import React, { FC } from "react";

type Props = React.InputHTMLAttributes<HTMLTextAreaElement>;

const StyledTextarea: FC<Props> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      className={["py-1 px-2 border-2 rounded-sm "].join("")}
    />
  );
};

export default StyledTextarea;
