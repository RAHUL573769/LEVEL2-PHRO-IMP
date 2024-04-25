import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
//creating a hybrid pattern
export const adminPath2 = [
	{
		name: "Dashboard",
		path: "/admin/dashboard",
		element: <AdminDashboard></AdminDashboard>,
	},
	{
		name: "User Management",
		children: [
			{
				name: "Create Admin",
				path: "/admin/create-admin",
				element: <CreateAdmin></CreateAdmin>,
			},
			{
				name: "Create Faculty",
				path: "/admin/create-Faculty",
				element: <CreateFaculty></CreateFaculty>,
			},
			{
				name: "Create Student",
				path: "/admin/create-student",
				element: <CreateStudent></CreateStudent>,
			},
		],
	},
];
//creating a hybrid pattern
// 1===>
export const adminPaths = [
	{
		path: "dashboard",
		element: <AdminDashboard></AdminDashboard>,
	},
	{
		path: "create-student",
		element: <CreateStudent></CreateStudent>,
	},
	{
		path: "create-admin",
		element: <CreateAdmin></CreateAdmin>,
	},
	{
		path: "create-faculty",
		element: <CreateFaculty></CreateFaculty>,
	},
];

export const adminRoutes = adminPaths.reduce((acc, item) => {
	// acc.push(item);
	// return acc;
	// console.log(item);
	if (item.path && item.element) {
		// acc.push(item);
		acc.push({
			path: item.path,
			element: item.element,
		});

		// return acc;
	}

	if (item.children) {
		item.children.forEach((child) => {
			acc.push({
				path: child.path,
				element: child.element,
			});
		});
	}

	return acc;
}, []);
