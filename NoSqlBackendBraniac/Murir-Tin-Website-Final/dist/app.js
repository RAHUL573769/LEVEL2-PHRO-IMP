"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user.route");
const cors_1 = __importDefault(require("cors"));
const tour_route_1 = require("./routes/tour.route");
const review_route_1 = require("./routes/review.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/vi/users", user_route_1.UserRouter);
app.use("/api/vi/tours", tour_route_1.TourRouter);
app.use("/api/vi/review", review_route_1.ReviewRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
