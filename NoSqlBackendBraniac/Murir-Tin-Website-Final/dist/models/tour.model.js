"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tour = void 0;
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const tourSchema = new mongoose_1.Schema({
    name: {
        type: String
        // required: [true, "Please Tell Your Name"]
    },
    durationHours: {
        type: Number,
        required: [false, "Please Tell Your Duration Hours"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number
        // required: [true, "Please tell your Price"]
    },
    imageCover: {
        type: String,
        required: [false, "Please Tell Your Image Cover"]
    },
    images: {
        type: [String]
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    },
    startLocation: {
        type: String
    },
    endlocation: {
        type: String
    },
    startDates: {
        type: [String]
    },
    locations: [String],
    slug: String
}, 
//second parameter
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
//Pre hook for Query Middle ware
tourSchema.virtual("durationDays").get(function () {
    return this.durationHours / 24;
});
tourSchema.pre("save", function (next) {
    this.slug = (0, slugify_1.default)(this.name, { lower: true });
    next();
});
//instance methods creation
tourSchema.methods.getNextStartAndEndDate = function () {
    const today = new Date();
    const futureDates = this.startDates.filter((startDate) => {
        return startDate > today;
    });
    futureDates.sort((a, b) => a.getTime() - b.getTime());
    const nextNearestDate = futureDates[0];
    const estimatedendDate = new Date(nextNearestDate.getTime() + this.durationHours * 60 * 60 * 60);
    return {
        nextNearestDate,
        estimatedendDate
    };
};
tourSchema.virtual("reviews", {
    ref: "Review",
    foreignField: "tour",
    localField: "_id"
});
//Pre hook for Query Middle ware
exports.Tour = (0, mongoose_1.model)("Tour", tourSchema);
