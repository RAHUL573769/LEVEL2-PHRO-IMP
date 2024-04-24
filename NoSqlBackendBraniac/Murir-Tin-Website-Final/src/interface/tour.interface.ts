import { Model } from "mongoose";

export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuantity: number;
  price: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDates: Date[];
  startLocation: string;
  endlocation: string;
  locations: string[];
  slug: string;
}
//instance method creation
export interface ITourMethods {
  getNextStartAndEndDate(): {
    nextNearestDate: Date|null;
    estimatedendDate: Date|null;
  };
}

export type TTourModel = Model<ITour, {}, ITourMethods>;
