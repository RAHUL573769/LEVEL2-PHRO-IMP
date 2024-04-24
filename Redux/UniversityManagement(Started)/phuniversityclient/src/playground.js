/* eslint-disable @typescript-eslint/no-unused-vars */
const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN DASHBOARD"
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create-Admin",
        path: "CraeteAdmin",
        element: "Create Admin Element"
      }
    ]
  }
];
// const newArray = adminRoutes2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.name
//       });
//     });
//   }

//   return acc;
// }, []);

// ---------

export const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "This shoeld be Navlink"
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Navlink"
      }))
    });
  }

  return acc;
}, []);
console.log("84", newArray);
