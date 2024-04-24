import { AuthRouter } from "../modules/Auth/auth.route";
import { AdminRoute } from "../modules/Admin/Admi.route";
import { UserRouter } from "../modules/User/userRoute";

const routes = [
  {
    path: "/users",
    route: UserRouter
  },
  {
    path: "/admin",
    route: AdminRoute
  },
  {
    path: "/auth",
    route: AuthRouter
  }
];

export default routes;
