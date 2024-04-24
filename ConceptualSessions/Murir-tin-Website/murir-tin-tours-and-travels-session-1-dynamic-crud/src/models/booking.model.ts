import { Schema, model } from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'

const bookingSchema = new Schema<IBooking>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
  },
  bookedSlot: {
    type: Number,
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'paid'],
  },
  price: {
    type: Number,
  },
})

const Booking = model<IBooking>('Booking', bookingSchema)

export default Booking
