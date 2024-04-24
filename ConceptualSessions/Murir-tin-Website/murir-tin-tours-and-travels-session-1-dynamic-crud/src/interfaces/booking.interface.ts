import mongoose from 'mongoose'

export interface IBooking {
  user: mongoose.Schema.Types.ObjectId
  tour: mongoose.Schema.Types.ObjectId
  bookedSlot: number
  price: number
  bookingStatus: 'pending' | 'paid' | 'in-progress'
}
