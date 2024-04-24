import { NextFunction, Request, RequestHandler, Response } from 'express'
import { bookingServices } from '../services/booking.service'

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => console.log(err))
  }
}
const createBooking = catchAsync(async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await bookingServices.createBooking(tourData)
    res.status(201).json({
      status: 'success',
      message: 'Tour created successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
})

const getAllBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingServices.getAllBookings()
    res.status(200).json({
      status: 'success',
      message: 'Booking Data fetched successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
// const getSingleBooking = async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id)
//     const result = await bookingServices.createBooking(id)
//     res.status(200).json({
//       status: 'success',
//       message: 'Single Tour fetched successfully',
//       data: result,
//     })
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     console.log(error)
//     res.status(500).json({
//       status: 'fail',
//       message: error.message || 'Something went wrong',
//     })
//   }
// }
const updateBooking = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const id = req.params.id
    const result = await bookingServices.updateBooking(id, tourData)
    res.status(200).json({
      status: 'success',
      message: 'Booking Data updated successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const deleteBooking = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await bookingServices.deleteBooking(id)
    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully',
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const bookingController = {
  createBooking,
  getAllBooking,
  //   getSingleBooking,
  updateBooking,
  deleteBooking,
}
