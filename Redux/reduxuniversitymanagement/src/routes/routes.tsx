import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/rourtesGenerator";
import { adminPaths2 } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./studentRoutes";
// import { adminRoutes } from "./admin.routes";

// import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths2)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths)
  },

  {
    path: "/register",
    element: <Login></Login>
  }
]);
