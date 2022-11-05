import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import { useForm } from "../../hooks/useForm";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { payload, changeHandler, setError } = useForm();
  const { register } = useAuthContext();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({
      email: payload.email,
      password: payload.password,
      name: payload.name,
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div>
      <form className="grid gap-3 max-w-xs mx-auto" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input
          type="text"
          name="name"
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          placeholder="Name"
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          placeholder="Password"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          pattern={`${payload.password}`}
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          onChange={changeHandler}
          placeholder="Repeat password"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
