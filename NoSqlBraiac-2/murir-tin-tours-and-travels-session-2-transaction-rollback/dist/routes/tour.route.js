"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controllers/tour.controller");
const router = express_1.default.Router();
// const catchAsyncFunction = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   }
// }
router.post('/create-tour', tour_controller_1.tourController.createTour);
router.get('/', tour_controller_1.tourController.getAllTours);
// router.get('/', catchAsyncFunction() ------> (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   })
//router jokhon funtion ke call kore tokhon o oi function er modhe req, res, next ei 3 ta diye dey
//tourController.getAllTours(req, res, next)
router.get('/:id', tour_controller_1.tourController.getSingleTour);
router.patch('/:id', tour_controller_1.tourController.updateTour);
router.delete('/:id', tour_controller_1.tourController.deleteTour);
router.get('/:id/next-schedule', tour_controller_1.tourController.getNextSchedule);
exports.tourRoutes = router;
