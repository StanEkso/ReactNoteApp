import React, { FC } from "react";
import { FormControlOptions } from "../../types/form";

type ControlProps = FormControlOptions & {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
};

const FormControl: FC<ControlProps> = ({
  type = "text",
  placeholder = "",
  customElement,
  name,
  onChange,
  value,
}) => {
  return (
    <>
      {customElement && (
        <textarea
          name={name}
          placeholder={placeholder}
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          onChange={onChange}
          value={value}
        ></textarea>
      )}
      {!customElement && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
        />
      )}
    </>
  );
};

export default FormControl;
