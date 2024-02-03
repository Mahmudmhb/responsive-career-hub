import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import JobApplied from "./Components/JobApplied/JobApplied";
import Statistics from "./Components/Statistics/Statistics";
import ViewDetails from "./Components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/applied",
        element: <JobApplied></JobApplied>,
        loader: () => fetch("/src/file/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../src/file/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
