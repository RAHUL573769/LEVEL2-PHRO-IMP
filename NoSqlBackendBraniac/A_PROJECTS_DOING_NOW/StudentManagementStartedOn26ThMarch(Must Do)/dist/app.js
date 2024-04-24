"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./ErrorHandlers/globalErrorHandler");
const notFound_1 = require("./middlewares/notFound");
const utils_1 = __importDefault(require("./utils"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v1", utils_1.default);
//no Found
//global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(notFound_1.notFound);
exports.default = app;
