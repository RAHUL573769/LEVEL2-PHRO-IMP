import About from "../pages/About";
import Contact from "../pages/Contact";
import { TUiRoute } from "../types/TRouteLayout";

const uiPaths = [
  {
    path: "about",
    element: <About></About>
  },
  {
    path: "contact",
    element: <Contact></Contact>
  }
];

// const uiRoute = uiPaths.reduce((acc:TRoute[], item) => {
//   // console.log("Acc", acc);
//   // console.log("Item", item);

//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element
//     });
//     return acc;
//   }
// }, []);
export const uiRoutes = uiPaths.reduce((acc: TUiRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }
  // console.log("Item", item);

  return acc;
}, []);
