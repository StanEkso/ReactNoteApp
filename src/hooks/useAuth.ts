import { AuthUtils, User } from "../types/auth";
import { useState, useMemo } from "react";
import { createUser, loginUser } from "../api";
export function useAuth(): AuthUtils {
  const [user, setUser] = useState<User | null>(() => {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  });
  const utils: AuthUtils = useMemo(
    () => ({
      user,
      login: (paramUser) => {
        return loginUser(paramUser).then((user) => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        });
      },
      register: (paramUser) => {
        return createUser(paramUser).then((user) => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        });
      },
      logout: () => {
        localStorage.removeItem("user");
        setUser(null);
      },
    }),
    [user, setUser]
  );
  return utils;
}
