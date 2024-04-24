import express from 'express'
import { bookingController } from '../controllers/booking.controller'

const router = express.Router()

router.post('/create-review', bookingController.createBooking)
router.get('/', bookingController.getAllBooking)
// router.get('/:id', bookingController.)
router.patch('/:id', bookingController.updateBooking)
router.delete('/:id', bookingController.deleteBooking)

export const bookingRoutes = router
