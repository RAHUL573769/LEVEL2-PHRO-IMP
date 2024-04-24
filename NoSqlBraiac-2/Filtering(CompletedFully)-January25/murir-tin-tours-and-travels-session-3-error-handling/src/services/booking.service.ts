/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'
import Booking from '../models/booking.model'
import Tour from '../models/tour.model'
import GenericError from '../classes/errorClasses/GenericError'
import { TQueryObj } from '../types/queryType'
import { filter } from '../Filtering/filter'
import { search } from '../Filtering/searchHelpers'
import { sort } from '../Filtering/sortHelper'
import { pagination } from '../Filtering/pagination'
import { select } from '../Filtering/fieldSelectHelper'

// const createBookingWithoutTransaction = async (
//   bookingData: IBooking,
// ): Promise<IBooking> => {
//   const booking = await Booking.create(bookingData)

//   if (!booking) {
//     throw new Error('Booking failed')
//   }

//   //   throw new Error('Booking failed fake error')
//   const tour = await Tour.findByIdAndUpdate(
//     booking.tour,
//     // {
//     //   $inc: { availableSeats: -booking.bookedSlots },
//     // },
//     {
//       availableSeats: { $inc: -booking.bookedSlots },
//     },
//   )
//   if (!tour) {
//     throw new Error('Booking failed')
//   }

//   return booking
// }

//with transaction
///transaction makes a replica set / clone of the entire database
// it runs the database operations in a isolated environment
// if all operation is successful then it commits the transaction. means it keeps the clone databse to main database
// if any operation fails then it aborts the transaction. means it deletes the clone database
const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
  //initiate the isolated environment. that is the mongodb session/ mongoose session
  const session = await mongoose.startSession()
  //session is the isolated environment

  //start the database operation in isolated environment
  session.startTransaction()

  try {
    //array of object sent
    const booking = await Booking.create([bookingData], { session })

    //so booking is an array of object with one object
    if (!booking) {
      // throw new Error('Booking failed')
      throw new GenericError('Booking failed', 400)
    }

    // throw new Error('Booking failed fake error')
    const tour = await Tour.findByIdAndUpdate(
      booking[0].tour,
      //   {
      //     $inc: { availableSeats: -booking[0].bookedSlots },
      //   },
      {
        availableSeats: { $inc: -booking[0].bookedSlots },
      },

      {
        session,
        // new: true,
        // runValidators: true,
      },
    )
    if (!tour) {
      // throw new Error('Tour Update in booking failed')
      throw new GenericError('Tour Update in booking failed', 400)
    }

    await session.commitTransaction()
    //replica set / clone is saved to main database
    await session.endSession()
    //isolated environment is closed

    return booking[0]
  } catch (error: any) {
    await session.abortTransaction()
    await session.endSession()
    // throw new Error(error)
    throw new GenericError(error.message, 400)
  }
}

const getAllBookings = async (query: TQueryObj): Promise<IBooking[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
  const queryObj = { ...query }
  // const excludedObj = [
  //   'page',
  //   'fields',
  //   'searchTerm',
  //   'limit',
  //   'sortBy',
  //   'sortOrder',
  // ]

  console.log(queryObj)

  // const result = await Tour.find()
  //exact match down here

  const filteredQuery = filter(Booking.find(), query)
  const searchedQuery = search(filteredQuery, query)

  // if (query.sortBy && query.sortOrder) {
  //   const sortBy = query.sortBy //price
  //   const sortOrder = query.sortOrder
  //   const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`
  //   searchedQuery.sort(sortStr)
  // }

  const sortedQuery = sort(searchedQuery, query)
  const paginatedQuery = pagination(sortedQuery, query)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedFieldQuery = select(paginatedQuery, query)
  //2.partial match mane searching
  // if (query.page || query.limit) {
  //   const page = Number(query.page)
  //   const limit = Number(query.limit)
  //   const skip = (page - 1) * limit
  //   sortedQuery.skip(skip).limit(100)
  // } else {
  //   sortedQuery.skip(0).limit(10)
  // }
  // if (query.searchTerm) {
  //   console.log(modelQuery.model.schema.path('name'))
  //   console.log(typeof modelQuery.model.schema.path)

  //   const fieldValues = Object.values(modelQuery.model.schema.paths)

  //   const searchableFields = fieldValues
  //     .filter((fieldObj) => {
  //       // console.log(modelQuery.model.schema.path('name'))
  //       if (fieldObj.instance === 'String') {
  //         // return {
  //         //   ({ name: { $regex: query.searchTerm, $options: 'i' } })
  //         //   [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //         // }

  //         return true
  //       }
  //     })
  //     .map((fieldObj) => ({
  //       [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //     }))

  //   console.log('Searchable Fiels', searchableFields)
  //   modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
  //   modelQuery.find({
  //     $or: [
  //       { name: { $regex: query.searchTerm, $options: 'i' } },
  //       { startLocation: { $regex: query.searchTerm, $options: 'i' } },
  //     ],

  //     $or: searchableFields,
  //   })
  // }

  // const result = await modelQuery.exec()
  // const result = await searchedQuery
  // if (query.fields) {
  //   const fields = query.fields.split(',').join(' ')
  //   paginatedQuery.select(fields)
  // }

  const result = await paginatedQuery
  return result

  // const result = await Booking.find()
  // return result
}

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id)
  return result
}
const getAllBookingsOfAUser = async (id: string): Promise<IBooking[]> => {
  const result = await Booking.find({
    user: id,
  })
  return result
}

const updateBooking = async (
  id: string,
  bookingData: IBooking,
): Promise<IBooking | null> => {
  //apply transaction here
  //if bookedSlots decreases, then increase availableSeats in tour
  //if bookedSlots increases, then decrease availableSeats in tour
  const result = await Booking.findByIdAndUpdate(id, bookingData, {
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
  getAllBookingsOfAUser,
  updateBooking,
  deleteBooking,
}
