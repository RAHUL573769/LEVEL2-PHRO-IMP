"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("../controllers/booking.controller");
const router = express_1.default.Router();
router.post('/create-review', booking_controller_1.bookingController.createBooking);
router.get('/', booking_controller_1.bookingController.getAllBooking);
// router.get('/:id', bookingController.)
router.patch('/:id', booking_controller_1.bookingController.updateBooking);
router.delete('/:id', booking_controller_1.bookingController.deleteBooking);
exports.bookingRoutes = router;