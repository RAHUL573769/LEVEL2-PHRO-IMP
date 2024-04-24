import mongoose from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'
import Booking from '../models/booking.model'
import Tour from '../models/tour.model'

const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  const session = await mongoose.startSession()

  session.startTransaction()

  try {
    const booking = await Booking.create([bookingData], {
      session: { session },
    })

    if (!booking) {
      throw new Error('Booking Failrd')
    }

    // await Tour.findByIdAndUpdate(booking[0].tour,{$inc:{availableSeats:-booking[0].bookedSlot},{session},})

    await Tour.findByIdAndUpdate(booking[0].tour, {
      $inc: { availableSeats: -booking[0].bookedSlot },
    })
    await session.commitTransaction()
    await session.endSession()
    return booking[0]
  } catch (error) {
    console.log(error)
    await session.abortTransaction()
    await session.endSession()
    throw new Error(error as string)
  }

  // const result = await Booking.create(bookingData)
  // //   const result = new User(userData)
  // //   await result.save()

  // if (!result) {
  //   throw new Error('Booking Cannot be Created')
  // }

  // await Tour.findByIdAndUpdate(result.tour, {
  //   $inc: { availableSeats: -result.bookedSlot },
  // })
  // return result
}

const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find()
  return result
}

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id)
  return result
}

const updateBooking = async (
  id: string,
  userData: IBooking,
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id)
  return result
}

export const bookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}
