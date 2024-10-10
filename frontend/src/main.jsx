import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EstatesList } from "../Pages/EstatesList";
import { EstateDetails } from "../Pages/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/estates",
    element: <EstatesList />,
  },
  {
    path: "/estates/:id",
    element: <EstateDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
