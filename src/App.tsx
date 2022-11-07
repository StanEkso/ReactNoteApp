import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./components/authContextProvider/authContextProvider";
import Layout from "./components/layout/Layout";
import RootLayout from "./components/layout/RootLayout";
import UnathorizedLayout from "./components/layout/UnathorizedLayout";
import NonAuthorizedOnly from "./components/privateRoute/NonAuthorizedOnly";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFoundPage, { NotFoundRedirect } from "./pages/404";
import AboutPage from "./pages/about/page";
import LoginPage from "./pages/login/page";
import { notesRoutes } from "./pages/notes/router";
import RegisterPage from "./pages/register/page";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: "/",
        element: <AboutPage />,
        index: true,
      },
      {
        path: "notes/",
        errorElement: <NotFoundRedirect />,
        children: notesRoutes,
      },
    ],
  },
  {
    path: "/",
    element: (
      <NonAuthorizedOnly>
        <UnathorizedLayout />
      </NonAuthorizedOnly>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);
function App() {
  return (
    <AuthContextProvider>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </AuthContextProvider>
  );
}

export default App;
