"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const Cat_route_1 = require("./modules/Cat/Cat.route");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/create", Cat_route_1.catRoutes);
app.use("/get", Cat_route_1.catRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
