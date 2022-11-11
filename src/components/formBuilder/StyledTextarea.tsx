import React, { FC } from "react";

type Props = React.InputHTMLAttributes<HTMLTextAreaElement>;

const StyledTextarea: FC<Props> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      rows={5}
      className={["py-1 px-2 border-2 rounded-sm", className].join("")}
    />
  );
};

export default StyledTextarea;
