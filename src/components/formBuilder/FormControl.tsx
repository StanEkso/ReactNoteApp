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
  required,
}) => {
  return (
    <>
      {customElement && (
        <textarea
          name={name}
          placeholder={placeholder}
          className="py-1 px-2 border-2 rounded-sm "
          onChange={onChange}
          required={required}
          value={value}
        ></textarea>
      )}
      {!customElement && (
        <input
          required={required}
          type={type}
          name={name}
          value={value}
          autoComplete={name}
          onChange={onChange}
          placeholder={placeholder}
          className="py-1 px-2 border-2 rounded-sm "
        />
      )}
    </>
  );
};

export default FormControl;
