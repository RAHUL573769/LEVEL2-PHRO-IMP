import { Model } from "mongoose";

export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuality: number;
  price: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDate: Date[];
  startLocation: string;
  availableSeats: number;
  locations: string[];
  slug: string;
}

interface ITourMethods {
  getNextNearestStartAndEndDate(): {
    nearestStartDate: Date;
    estimatedEndDate: Date;
  };
}
// Create a new Model type that knows about IUserMethods...
type TTourModel = Model<ITour, {}, ITourMethods>;
export { ITourMethods, TTourModel };
