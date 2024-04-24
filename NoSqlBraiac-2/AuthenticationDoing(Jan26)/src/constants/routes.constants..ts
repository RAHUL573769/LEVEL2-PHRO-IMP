import { authRoutes } from '../Authentication/auth.route'
import { bookingRoutes } from '../routes/booking.route'
import { reviewRoutes } from '../routes/review.route'
import { tourRoutes } from '../routes/tour.route'
import { userRoutes } from '../routes/user.route'

const routes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/tours',
    route: tourRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/reviews',
    route: reviewRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
]

export default routes