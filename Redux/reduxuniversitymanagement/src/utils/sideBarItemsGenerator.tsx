import { NavLink } from "react-router-dom";
import { TSideBarItems, TUserPath } from "../types/TRouteLayout";
// import { ReactNode } from "react";

export const sideBarItemsGenerator = (items: TUserPath[], role) => {
  const adminSideBarItems = items.reduce((acc: TSideBarItems[], item) => {
    // console.log("Acc", acc);
    // console.log("Item", item);
    // console.log("Item", item);
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
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
  }, []);

  return adminSideBarItems;
};
