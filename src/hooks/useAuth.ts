import { AuthUtils } from "../types/auth";
import { useState, useMemo } from "react";
import { User } from "../types/user";
import { createUser, loginUser } from "../api";
export function useAuth(): AuthUtils {
  const [user, setUser] = useState<User | null>(() => {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  });
  const utils: AuthUtils = useMemo(
    () => ({
      user,
      login: async (paramUser) => {
        return loginUser(paramUser).then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        });
      },
      register: (paramUser) => {
        return createUser(paramUser).then((user) => {
          console.log("Setting in localstorage", user);
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
        });
      },
      logout: () => {
        localStorage.removeItem("user");
        setUser(null);
      },
    }),
    [user]
  );
  return utils;
}
