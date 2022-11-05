import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authContextProvider/authContextProvider";

const LogoutElement = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="text-gray-500" onClick={logoutHandler}>
      Logout
    </div>
  );
};

export default LogoutElement;
