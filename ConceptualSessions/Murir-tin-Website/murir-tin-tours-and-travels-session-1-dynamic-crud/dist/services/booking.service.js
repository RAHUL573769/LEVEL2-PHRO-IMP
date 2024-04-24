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
exports.bookingServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const booking_model_1 = __importDefault(require("../models/booking.model"));
const tour_model_1 = __importDefault(require("../models/tour.model"));
const createBooking = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const booking = yield booking_model_1.default.create([bookingData], {
            session: { session },
        });
        if (!booking) {
            throw new Error('Booking Failrd');
        }
        // await Tour.findByIdAndUpdate(booking[0].tour,{$inc:{availableSeats:-booking[0].bookedSlot},{session},})
        yield tour_model_1.default.findByIdAndUpdate(booking[0].tour, {
            $inc: { availableSeats: -booking[0].bookedSlot },
        });
        yield session.commitTransaction();
        yield session.endSession();
        return booking[0];
    }
    catch (error) {
        console.log(error);
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
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
});
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find();
    return result;
});
const getSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findById(id);
    return result;
});
const updateBooking = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.bookingServices = {
    createBooking,
    getAllBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking,
};
