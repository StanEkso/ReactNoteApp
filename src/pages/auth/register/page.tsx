import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import FormErrorBoundary from "../../../components/formBuilder/FormErrorBoundary";
import StyledInput from "../../../components/formBuilder/StyledInput";
import { useForm } from "../../../hooks/useForm";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { payload, setError, changeHandler } = useForm();
  const { register } = useAuthContext();
  const submitHandler = () => {
    if (payload.password !== payload.repeat_password) {
      setError("Passwords should match");
    }
    register({
      email: payload.email,
      password: payload.password,
      name: payload.name,
    })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Error occurred while registering your account.");
      });
  };
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-2 py-5">
      <h2 className="text-2xl font-bold text-center">Register</h2>
      <FormErrorBoundary onSubmit={submitHandler} error={payload.error}>
        <StyledInput
          name="name"
          required
          type="text"
          placeholder="Name"
          onChange={changeHandler}
        />
        <StyledInput
          name="email"
          required
          type="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <StyledInput
          required
          name="password"
          type="text"
          placeholder="Password"
          onChange={changeHandler}
        />
        <StyledInput
          required
          name="repeat_password"
          type="text"
          placeholder="Repeat password"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Register
        </button>
      </FormErrorBoundary>

      <p className="text-center">
        Already have an account?{" "}
        <Link to={"../login"} className="text-blue-600">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
