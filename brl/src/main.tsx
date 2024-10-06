import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dictionary from "./Dictionary";
import Learn from "./Learn"; // Import the Learn component
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2"
import Chapter3 from "./Chapter3";

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
    children: [
      {
        path: "chapter1",
        element: <Chapter1 />
      },
      {
        path: "chapter2",
        element: <Chapter2 />
      },
      {
        path: "chapter3",
        element: <Chapter3 />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
