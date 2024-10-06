import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dictionary } from "./Dictionary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Dictionary",
    element: <Dictionary/>
  }
]);
// import { ConvexProvider, ConvexReactClient } from "convex/react";

// const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/*  <ConvexProvider client={convex}> */}

    {/* </ConvexProvider> */}
  </React.StrictMode>,
);