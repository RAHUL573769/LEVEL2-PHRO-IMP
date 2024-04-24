/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import CreateFaculty from "../Faculty/CreateFaculty";
import CreateStudent from "../Student/CreateStudent";
import AdminDashboard from "./AdminDashboard";
import CreateAdmin from "./CreateAdmin";
import { NavLink } from "react-router-dom";
import { TRoutes, TSideBar } from "../../Types/allTypes";

export const adminRoutes = [
  { path: "dashboard", element: <AdminDashboard></AdminDashboard> },
  { path: "create-admin", element: <CreateAdmin></CreateAdmin> },

  { path: "create-student", element: <CreateStudent></CreateStudent> },
  { path: "create-faculty", element: <CreateFaculty></CreateFaculty> }
];
//doindg p[layground]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const adminRoutes2 = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <AdminDashboard></AdminDashboard>
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create-Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>
      },

      {
        name: "Create-Studnets",
        path: "create-student",
        element: <CreateStudent></CreateStudent>
      }
    ]
  }
];

export const adminRoutesMain = adminRoutes2.reduce((acc: TRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.name
      });
    });
  }

  return acc;
}, []);

export const adminSideBarItems = adminRoutes2.reduce(
  (acc: TSideBar[], item) => {
    if (item.path && item.name) {
      // console.log(item.name);
      // console.log(item.path);
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
      });
    }

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

    return acc;
  },
  []
);
