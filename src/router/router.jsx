import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
