import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-2 py-5">
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
            placeholder: "Password",
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
      <p className="text-center">
        Already have an account?{" "}
        <Link to={"/login"} className="text-blue-600">
          Login here
        </Link>{" "}
      </p>
    </div>
  );
};

export default RegisterPage;
