import { TRoute, TUserPaths } from "../Types/allTypes";

export const routerGenerator = (adminPaths: TUserPaths[]) => {
  const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element
        });
      });
    }

    return acc;
  }, []);

  return adminRoutes;
};
