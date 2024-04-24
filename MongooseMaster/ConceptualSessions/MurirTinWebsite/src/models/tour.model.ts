import { Schema, model } from "mongoose";
import { ITour, ITourMethods, TTourModel } from "../interface/tour.interface";

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourSchema.virtual("durationDays").get(function () {
  return this.durationHours / 24;
});

tourSchema.methods.getNextNearestStartAndEndDate = function (): {
  nearestStartDate: Date;
  estimatedEndDate: Date;
} {
  const today = new Date();
  const futureDates = this.startDate.filter((x: Date) => {
    return x > today;
  });
  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());
  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000
  );

  return {
    nearestStartDate,
    estimatedEndDate
  };
};
export const Tour = model<ITour, TTourModel>("Tour", tourSchema);
