import mongoose, { Schema, model } from "mongoose";
import { IReview, IReviewModel } from "../interface/review";
import { Tour } from "./tour.model";

const reviewSchema = new Schema<IReview, IReviewModel>({
  review: {
    type: String
  },
  rating: {
    type: Number
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour",
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
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

reviewSchema.statics.calcAverageRatings = async function (
  tourId: mongoose.Types.ObjectId
) {
  const stats = await this.aggregate([
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
    await Tour.findByIdAndUpdate(tourId, {
      ratingAverage: stats[0].numberOfRatings,
      ratingQuantity: stats[0].avgRatings
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingAverage: 0,
      ratingQuantity: 0
    });
  }
};
//Pre hook for Query Middle ware
export const Review = model<IReview, IReviewModel>("Review", reviewSchema);
