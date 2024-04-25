import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { adminRoutes } from "./AdminRoutes";

export const router = createBrowserRouter([
	// {
	// path:"/home",
	// element:<App></App>
	// },

	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
		],
	},

	// {
	//     path:"/about",
	//     element:<About></About>
	//     },
	//     {
	//         path:"/contact",
	//         element:<Contact></Contact>
	//         },

	{
		path: "/admin",
		element: <App></App>,

		children: adminRoutes,
		// children: adminPaths,
		// {
		// 	path: "dashboard",
		// 	element: <AdminDashboard></AdminDashboard>,
		// },
		// {
		// 	path: "create-student",
		// 	element: <CreateStudent></CreateStudent>,
		// },
		// {
		// 	path: "create-admin",
		// 	element: <CreateAdmin></CreateAdmin/ },
		// {
		// 	path: "create-faculty",
		// 	element: <CreateFaculty></CreateFaculty>,
		// },
	},
	{
		path: "/faculty",
		element: <App></App>,
		// children: adminPaths,
		children: adminRoutes,
		// {
		// 	path: "dashboard",
		// 	element: <AdminDashboard></AdminDashboard>,
		// },
		// {
		// 	path: "create-student",
		// 	element: <CreateStudent></CreateStudent>,
		// },
		// {
		// 	path: "create-admin",
		// 	element: <CreateAdmin></CreateAdmin>,
		// },
		// {
		// 	path: "create-faculty",
		// 	element: <CreateFaculty></CreateFaculty>,
		// },
	},
	{
		path: "/student",

		element: <App></App>,
		children: adminRoutes,
		// children: adminPaths,
		// {
		// 	path: "dashboard",
		// 	element: <AdminDashboard></AdminDashboard>,
		// },
		// {
		// 	path: "create-student",
		// 	element: <CreateStudent></CreateStudent>,
		// },
		// {
		// 	path: "create-admin",
		// 	element: <CreateAdmin></CreateAdmin>,
		// },
		// {
		// 	path: "create-faculty",
		// 	element: <CreateFaculty></CreateFaculty>,
		// },
	},
	{
		path: "/login",
		element: <Login></Login>,
	},
	{
		path: "/register",
		element: <Register></Register>,
	},
]);
