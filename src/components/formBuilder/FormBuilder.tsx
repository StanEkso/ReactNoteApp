import React, { FC, useCallback, useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { FormBuilderOptions } from "../../types/form";
import FormControl from "./FormControl";

const FormBuilder: FC<FormBuilderOptions> = ({ onSumbit, controls }) => {
  const initialFormValue = useMemo(() => {
    return controls.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.name]: cur.defaultValue || "",
      }),
      {}
    ) as Record<string, string>;
  }, [controls]);
  const { changeHandler, payload, setError } = useForm(initialFormValue);
  const handleSumbit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSumbit(payload).catch((e) => setError(e.message));
    },
    [onSumbit, payload, setError]
  );
  return (
    <form action="" className="grid gap-1 mx-4" onSubmit={handleSumbit}>
      {payload.error && (
        <div className="border-2 border-red-600 py-1 px-2">{payload.error}</div>
      )}
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
