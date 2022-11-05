import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./components/authContextProvider/authContextProvider";
import Layout from "./components/layout/Layout";
import RootLayout from "./components/layout/RootLayout";
import UnathorizedLayout from "./components/layout/UnathorizedLayout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import NotFoundPage, { NotFoundRedirect } from "./pages/404";
import AboutPage from "./pages/about/page";
import LoginPage from "./pages/login/page";
import CreateNote from "./pages/notes/create/page";
import NotesPage from "./pages/notes/page";
import EditNotePage from "./pages/notes/[id]/edit/page";
import NotePage, { loader as noteLoader } from "./pages/notes/[id]/page";
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
        children: [
          {
            path: "",
            element: <NotesPage />,
          },
          {
            path: "create/",
            element: <CreateNote />,
          },
          {
            path: ":id/edit/",
            element: <EditNotePage />,
            loader: noteLoader,
          },
          {
            path: ":id/",
            element: <NotePage />,
            loader: noteLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <UnathorizedLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
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
