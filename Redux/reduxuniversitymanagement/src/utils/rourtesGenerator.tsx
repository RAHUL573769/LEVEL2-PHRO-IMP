import { TRoute, TUserPath } from "../types/TRouteLayout";

export const routeGenerator = (items: TUserPath[]) => {
  const adminRoutes = items.reduce((acc: TRoute[], item) => {
    console.log(item);
    if (item.children) {
      item.children.forEach((children) => {
        acc.push({
          path: children.path!,
          element: children.element
        });
      });
    }
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element
      });
    }
    // console.log("Item", item);

    return acc;
  }, []);
  return adminRoutes;
};
