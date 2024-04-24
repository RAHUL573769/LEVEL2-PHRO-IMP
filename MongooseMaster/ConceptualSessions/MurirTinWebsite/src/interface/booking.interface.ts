import mongoose from "mongoose";

export type BookingStatus = "pending" | "paid" | "cancelled";
export interface IBooking {
  user: mongoose.Schema.Types.ObjectId;
  tour: mongoose.Schema.Types.ObjectId;
  bookedSlots: number;
  price: number;
  bookingStatus: BookingStatus;
}
