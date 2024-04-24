"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tour = void 0;
const mongoose_1 = require("mongoose");
const tourSchema = new mongoose_1.Schema({
    name: {
        type: String
        // required: [true, "Please tell us your name"]
    },
    durationHours: {
        type: Number
        // required: [true, "Please tell us your durationHours"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuality: {
        type: Number,
        default: 0
    },
    price: {
        type: Number
        // required: [true, "Please tell us your price"]
    },
    imageCover: {
        type: String
        // required: [true, "Please tell us your imageCover"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDate: { type: [Date] },
    startLocation: {
        type: String
        // required: [true, "Please tell us your startLocation"]
    },
    availableSeats: {
        type: Number
        // required: [true, "Please tell us your availableSeats"]
    },
    locations: [String],
    slug: String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
tourSchema.virtual("durationDays").get(function () {
    return this.durationHours / 24;
});
tourSchema.methods.getNextNearestStartAndEndDate = function () {
    const today = 12098;
};
exports.Tour = (0, mongoose_1.model)("Tour", tourSchema);
