import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";

import { adminRoutesMain } from "../../Pages/Admin/Admin.routes";
// import AdminDashboard from "../../Pages/Admin/adminDashboard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>
      }
    ]
  },

  {
    path: "/admin",
    element: <App />,
    // children: adminRoutes2

    children: adminRoutesMain
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);
export default router;
