import { RouteObject } from "react-router-dom";
import LoginPage from "./login/page";
import RegisterPage from "./register/page";

export const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
];
