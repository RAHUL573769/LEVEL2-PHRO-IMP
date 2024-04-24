"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const tour_model_1 = require("./tour.model");
const reviewSchema = new mongoose_1.Schema({
    review: {
        type: String
    },
    rating: {
        type: Number
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Tour",
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now()
    }
});
//Pre hook for Query Middle ware
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });
reviewSchema.statics.calcAverageRatings = function (tourId) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = yield this.aggregate([
            {
                $match: tourId
            },
            {
                $group: {
                    _id: "$tour",
                    numberOfRatings: { $sum: 1 },
                    avgRatings: { $avg: "$ratings" }
                }
            }
        ]);
        if (stats.length > 0) {
            yield tour_model_1.Tour.findByIdAndUpdate(tourId, {
                ratingAverage: stats[0].numberOfRatings,
                ratingQuantity: stats[0].avgRatings
            });
        }
        else {
            yield tour_model_1.Tour.findByIdAndUpdate(tourId, {
                ratingAverage: 0,
                ratingQuantity: 0
            });
        }
    });
};
//Pre hook for Query Middle ware
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
