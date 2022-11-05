import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AuthUtils } from "../../types/auth";
const noop = () => Promise.resolve();
const initialAuth: AuthUtils = {
  user: null,
  login: noop,
  register: noop,
  logout: noop,
};
const AuthContext = createContext<AuthUtils>(initialAuth);
export const useAuthContext = () => useContext(AuthContext);
const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
