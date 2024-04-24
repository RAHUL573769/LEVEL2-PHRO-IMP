"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Tour',
    },
    bookedSlot: {
        type: Number,
    },
    bookingStatus: {
        type: String,
        enum: ['pending', 'paid'],
    },
    price: {
        type: Number,
    },
});
const Booking = (0, mongoose_1.model)('Booking', bookingSchema);
exports.default = Booking;
