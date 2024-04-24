"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsStatus = void 0;
const mongoose_1 = require("mongoose");
exports.BookingsStatus = ["cancelled", "paid", "pending"];
const bookingSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour"
    },
    bookedSlots: {
        type: Number
        // required: [true, "A booking must have bookedSlots"]
    },
    bookingStatus: {
        type: String,
        enum: exports.BookingsStatus
        // required: [true, "A booking must have a bookingStatus"]
    },
    price: {
        type: Number
        // required: [true, "A booking must have a price"]
    }
});
const Booking = (0, mongoose_1.model)("Booking", bookingSchema);
exports.default = Booking;
