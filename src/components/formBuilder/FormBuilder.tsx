import React, { FC, useCallback, useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { FormBuilderOptions } from "../../types/form";
import FormControl from "./FormControl";

const FormBuilder: FC<FormBuilderOptions> = ({
  onSumbit,
  errorElement,
  controls,
}) => {
  const initialFormValue = useMemo(() => {
    return controls.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.name]: cur.defaultValue,
      }),
      {}
    ) as Record<string, string>;
  }, [controls]);
  const { changeHandler, payload } = useForm(initialFormValue);
  const handleSumbit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSumbit(payload);
    },
    [onSumbit, payload]
  );
  return (
    <form action="" className="grid gap-1 mx-auto" onSubmit={handleSumbit}>
      {payload.error && errorElement}
      {controls.map((control) => (
        <FormControl
          onChange={changeHandler}
          {...control}
          key={control.name}
          value={payload[control.name]}
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white rounded-sm py-1">
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
