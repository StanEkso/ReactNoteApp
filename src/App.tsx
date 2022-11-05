import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFoundPage, { NotFoundRedirect } from "./pages/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundRedirect />,
    children: [
      {
        path: "/",
        element: <p>Main</p>,
        index: true,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
