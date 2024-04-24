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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingController = void 0;
const booking_service_1 = require("../services/booking.service");
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
    };
};
const createBooking = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tourData = req.body;
        const result = yield booking_service_1.bookingServices.createBooking(tourData);
        res.status(201).json({
            status: 'success',
            message: 'Tour created successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        });
    }
}));
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield booking_service_1.bookingServices.getAllBookings();
        res.status(200).json({
            status: 'success',
            message: 'Booking Data fetched successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        });
    }
});
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
const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tourData = req.body;
        const id = req.params.id;
        const result = yield booking_service_1.bookingServices.updateBooking(id, tourData);
        res.status(200).json({
            status: 'success',
            message: 'Booking Data updated successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        });
    }
});
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield booking_service_1.bookingServices.deleteBooking(id);
        res.status(200).json({
            status: 'success',
            message: 'Tour deleted successfully',
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        });
    }
});
exports.bookingController = {
    createBooking,
    getAllBooking,
    //   getSingleBooking,
    updateBooking,
    deleteBooking,
};
