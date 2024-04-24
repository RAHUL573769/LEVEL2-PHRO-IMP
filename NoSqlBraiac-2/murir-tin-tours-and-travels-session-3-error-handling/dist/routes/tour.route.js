"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourRoutes = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controllers/tour.controller");
const tour_validation_1 = require("../validations/tour.validation");
const validatorHandler_1 = require("./../middlewares/validatorHandler");
const validator = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield schema.safeParse(req.body);
        if (!result.success) {
            next(result.error);
        }
        else {
            req.body = result.data;
            next();
        }
    });
};
//   const id = req.params.id
//   console.log(req.body)
//   console.log(id)
//   res.status(200).json({
//     body: req.body,
//   })
const router = express_1.default.Router();
// const catchAsyncFunction = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   }
// }
router.post('/create-tour', validatorHandler_1.ValidatorHandler.validator(tour_validation_1.TourValidation.createTourZodSchema), tour_controller_1.tourController.createTour);
router.get('/', tour_controller_1.tourController.getAllTours);
// router.get('/', catchAsyncFunction() ------> (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   })
//router jokhon funtion ke call kore tokhon o oi function er modhe req, res, next ei 3 ta diye dey
//tourController.getAllTours(req, res, next)
router.get('/:id', validator, tour_controller_1.tourController.getSingleTour);
router.patch('/:id', tour_controller_1.tourController.updateTour);
router.delete('/:id', tour_controller_1.tourController.deleteTour);
router.get('/:id/next-schedule', tour_controller_1.tourController.getNextSchedule);
exports.tourRoutes = router;
