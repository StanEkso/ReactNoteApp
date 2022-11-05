import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../authContextProvider/authContextProvider";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default PrivateRoute;
