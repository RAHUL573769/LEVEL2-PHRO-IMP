"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./user.route");
const tour_route_1 = require("./tour.route");
const review_route_1 = require("./review.route");
const booking_route_1 = require("./booking.route");
const globalRouter = express_1.default.Router();
globalRouter.use('/users', user_route_1.userRoutes);
globalRouter.use('/tours', tour_route_1.tourRoutes);
globalRouter.use('/reviews', review_route_1.reviewRoutes);
globalRouter.use('/bookings', booking_route_1.bookingRoutes);
exports.default = globalRouter;
