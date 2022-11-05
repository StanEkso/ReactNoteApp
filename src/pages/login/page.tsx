import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const { payload, setError, changeHandler } = useForm();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: payload.email,
      password: payload.password,
    })
      .then(() => {
        console.log("THEN");
        navigate("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <div>
      <form className="grid gap-3 max-w-xs mx-auto" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {payload.error && (
          <div className="border-2 border-red-600 py-1 px-2">
            {payload.error}
          </div>
        )}
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

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
