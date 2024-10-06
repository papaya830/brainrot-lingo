import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dictionary from "./Dictionary";
import Learn from "./Learn"; // Import the Learn component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dictionary",
    element: <Dictionary />,
  },
  {
    path: "/learn", // Add a route for Learn
    element: <Learn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
