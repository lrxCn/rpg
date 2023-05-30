// import { createHashRouter } from "react-router-dom";
import About from "@/pages/About";
import Home from "@/pages/Home";

export const config = [
  {
    path: "/index",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
