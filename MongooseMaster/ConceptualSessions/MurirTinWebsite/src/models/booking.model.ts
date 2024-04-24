import { Schema, model } from "mongoose";
import { BookingStatus, IBooking } from "../interface/booking.interface";

export const BookingsStatus: BookingStatus[] = ["cancelled", "paid", "pending"];
const bookingSchema = new Schema<IBooking>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour"
  },
  bookedSlots: {
    type: Number
    // required: [true, "A booking must have bookedSlots"]
  },
  bookingStatus: {
    type: String,
    enum: BookingsStatus
    // required: [true, "A booking must have a bookingStatus"]
  },

  price: {
    type: Number
    // required: [true, "A booking must have a price"]
  }
});

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
