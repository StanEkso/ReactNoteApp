import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import FormErrorBoundary from "../../../components/formBuilder/FormErrorBoundary";
import StyledInput from "../../../components/formBuilder/StyledInput";
import { useForm } from "../../../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { payload, setError, changeHandler } = useForm();
  const { login } = useAuthContext();
  const submitHandler = () => {
    return login({
      email: payload.email,
      password: payload.password,
    })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Error occurred while logging in you.");
      });
  };
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-2 py-5">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <FormErrorBoundary onSubmit={submitHandler} error={payload.error}>
        <StyledInput
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
          required
        />
        <StyledInput
          name="password"
          type="text"
          placeholder="Password"
          required
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Login
        </button>
      </FormErrorBoundary>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to={"../register"} className="text-blue-600">
          Register here
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
