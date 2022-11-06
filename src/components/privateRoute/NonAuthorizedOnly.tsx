import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../authContextProvider/authContextProvider";

const NonAuthorizedOnly: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (user) return <Navigate to="/" />;
  return <>{children}</>;
};

export default NonAuthorizedOnly;
