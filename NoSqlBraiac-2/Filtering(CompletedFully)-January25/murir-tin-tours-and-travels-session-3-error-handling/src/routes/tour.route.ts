/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express'
import { tourController } from '../controllers/tour.controller'
// import { createTourZodSchema } from '../validations/tour.validation'
// import { validateSchema } from '../middlewares/validate.middleware'
// import { createTourZodSchema } from '../validations/tour.validation'

const router = express.Router()

// const catchAsyncFunction = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post(
  '/create-tour',

  // validateSchema(createTourZodSchema),
  tourController.createTour,
)
router.get('/', tourController.getAllTours)
// router.get('/', catchAsyncFunction() ------> (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   })
//router jokhon funtion ke call kore tokhon o oi function er modhe req, res, next ei 3 ta diye dey
//tourController.getAllTours(req, res, next)
router.get(
  '/:id',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    console.log(id)
    next()
  },
  tourController.getSingleTour,
)
router.patch('/:id', tourController.updateTour)
router.delete('/:id', tourController.deleteTour)
router.get('/:id/next-schedule', tourController.getNextSchedule)

export const tourRoutes = router
