import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../components/formBuilder/FormBuilder";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuthContext();
  const submitHandler = (payload: Record<string, string>) => {
    if (payload.password !== payload.repeatpassword)
      return Promise.reject("Passwords should be equal");
    return register({
      email: payload.email,
      password: payload.password,
      name: payload.name,
    }).finally(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <FormBuilder
        onSumbit={submitHandler}
        controls={[
          {
            name: "name",
            placeholder: "Name",
            required: true,
          },
          {
            name: "email",
            type: "email",
            placeholder: "Email",
            required: true,
          },
          {
            name: "password",
            type: "password",
            placeholder: "password",
            required: true,
          },
          {
            name: "repeatpassword",
            type: "password",
            placeholder: "Repeat password",
            required: true,
          },
        ]}
      />
    </div>
  );
};

export default RegisterPage;
