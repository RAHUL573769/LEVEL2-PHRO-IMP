const test = [1, 2, 4, 5];

const result = test.reduce((acc, item) => {
	return acc + item;
}, 0);

const result1 = test.reduce((acc, item) => {
	acc.push(acc + item);
	return acc;
}, []);

console.log(result1);
// [ '1', '12', '1,124', '1,12,1,1245' ]

const adminPath2 = [
	{
		name: "Dashboard",
		// path: "/admin/dashboard",
		path: "dashboard",
		element: "ADMIN_DASHBOARD",
		// element: <AdminDashboard></AdminDashboard>,
	},
	{
		name: "User Management",
		children: [
			{
				name: "Create Admin",
				path: "create-admin",
				// path: "/admin/create-admin",
				element: "CREATE_ADMIN",
				// element: <CreateAdmin></CreateAdmin>,
			},
			{
				name: "Create Faculty",
				path: "create-Faculty",
				// path: "/admin/create-Faculty",
				// element: <CreateFaculty></CreateFaculty>,
				element: "create_faculty",
			},
			{
				name: "Create Student",
				path: "create-student",
				// path: "/admin/create-student",
				element: "CREATE STUDENT",

				// element: <CreateStudent></CreateStudent>,
			},
		],
	},
];

const newArray = adminPath2.reduce((acc, item) => {
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
console.log(newArray);
