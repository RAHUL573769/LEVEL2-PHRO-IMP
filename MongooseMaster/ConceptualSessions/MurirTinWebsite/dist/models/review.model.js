"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String
    },
    rating: { type: Number },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour"
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
});
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
