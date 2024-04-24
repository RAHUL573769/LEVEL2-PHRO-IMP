"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalRouter_1 = __importDefault(require("./constants/globalRouter"));
const globalRrrorHandler_1 = require("./middlewares/globalRrrorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/v1", globalRouter_1.default);
app.use(globalRrrorHandler_1.globalErrorHandler);
app.use((req, res, next) => {
    console.log(req.originalUrl);
    res.status(404).json({
        success: "False",
        message: "API NOT FOUND",
        error: `There is no route for ${req.originalUrl}`
    });
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
