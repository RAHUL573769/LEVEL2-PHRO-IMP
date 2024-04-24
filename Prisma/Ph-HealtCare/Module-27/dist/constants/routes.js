"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admi_route_1 = require("../modules/Admin/Admi.route");
const userRoute_1 = require("../modules/User/userRoute");
const routes = [
    {
        path: "/users",
        route: userRoute_1.UserRouter
    },
    {
        path: "/admin",
        route: Admi_route_1.AdminRoute
    }
];
exports.default = routes;
