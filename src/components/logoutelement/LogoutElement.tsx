import React, { memo } from "react";
import { useAuthContext } from "../authContextProvider/authContextProvider";

const LogoutElement = () => {
  const { logout } = useAuthContext();
  const logoutHandler = () => {
    logout();
  };
  return (
    <div className="text-gray-500 cursor-pointer" onClick={logoutHandler}>
      Logout
    </div>
  );
};

export default memo(LogoutElement);
