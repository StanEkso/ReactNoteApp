import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./components/authContextProvider/authContextProvider";
import Layout from "./components/layout/Layout";
import RootLayout from "./components/layout/RootLayout";
import NonAuthorizedOnly from "./components/routeGuards/NonAuthorizedOnly";
import PrivateRoute from "./components/routeGuards/PrivateRoute";
import NotFoundPage, { NotFoundRedirect } from "./pages/404";
import AboutPage from "./pages/about/page";
import { authRoutes } from "./pages/auth/router";
import { notesRoutes } from "./pages/notes/router";
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
    path: "/auth",
    element: (
      <NonAuthorizedOnly>
        <Outlet />
      </NonAuthorizedOnly>
    ),
    children: authRoutes,
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
