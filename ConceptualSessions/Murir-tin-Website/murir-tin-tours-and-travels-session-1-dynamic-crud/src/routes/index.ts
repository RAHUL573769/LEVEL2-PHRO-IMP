import express from 'express'
import { userRoutes } from './user.route'
import { tourRoutes } from './tour.route'
import { reviewRoutes } from './review.route'
import { bookingRoutes } from './booking.route'

const globalRouter = express.Router()
globalRouter.use('/users', userRoutes)

globalRouter.use('/tours', tourRoutes)
globalRouter.use('/reviews', reviewRoutes)
globalRouter.use('/bookings', bookingRoutes)
export default globalRouter
