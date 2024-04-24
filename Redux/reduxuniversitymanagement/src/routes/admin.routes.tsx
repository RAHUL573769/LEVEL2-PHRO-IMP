import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { TSideBarItems } from "../types/TRouteLayout";
import { NavLink } from "react-router-dom";
// import { ReactNode } from "react";

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashBoard></AdminDashBoard>
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>
  }
];
// merging admin routes and main layout--- below
export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard></AdminDashBoard>
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>
      },
      {
        name: " Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>
      },
      {
        name: " Create Student",
        path: "create-faculty",
        element: <CreateStudent></CreateStudent>
      }
    ]
  }
];
// export const adminRoutes = adminPaths2.reduce((acc: TRoute[], item) => {
//   console.log(item);
//   if (item.children) {
//     item.children.forEach((children) => {
//       acc.push({
//         path: children.path,
//         element: children.element
//       });
//     });
//   }
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element
//     });
//   }
//   // console.log("Item", item);

//   return acc;
// }, []);

export const adminSideBarItems = adminPaths2.reduce(
  (acc: TSideBarItems[], item) => {
    // console.log("Acc", acc);
    // console.log("Item", item);
    // console.log("Item", item);
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
      });
      return acc;
    }

    // console.log("Item", item);

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
        }))
      });
    }

    // console.log("150", acc);
    return acc;
  },
  []
);
