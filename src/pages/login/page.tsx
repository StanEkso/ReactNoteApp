import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../components/formBuilder/FormBuilder";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const submitHandler = (payload: Record<string, string>) => {
    return login({
      email: payload.email,
      password: payload.password,
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-2 py-5">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <FormBuilder
        onSumbit={submitHandler}
        controls={[
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
        ]}
      />
      <p className="text-center">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-blue-600">
          Register here
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
