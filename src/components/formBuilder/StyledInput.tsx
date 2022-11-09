import React, { FC } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput: FC<Props> = ({ className, ...props }) => {
  return (
    <input {...props} className={["py-1 px-2 border-2 rounded-sm "].join("")} />
  );
};

export default StyledInput;
