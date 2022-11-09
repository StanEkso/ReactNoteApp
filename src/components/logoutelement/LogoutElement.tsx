import React from "react";
import { useAuthContext } from "../authContextProvider/authContextProvider";

const LogoutElement = () => {
  const { logout } = useAuthContext();
  const logoutHandler = () => {
    logout();
  };
  return (
    <div className="text-gray-500" onClick={logoutHandler}>
      Logout
    </div>
  );
};

export default LogoutElement;
