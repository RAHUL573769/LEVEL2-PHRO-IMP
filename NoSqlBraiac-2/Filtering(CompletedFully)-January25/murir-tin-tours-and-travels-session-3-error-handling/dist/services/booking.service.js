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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = __importDefault(require("mongoose"));
const booking_model_1 = __importDefault(require("../models/booking.model"));
const tour_model_1 = __importDefault(require("../models/tour.model"));
const GenericError_1 = __importDefault(require("../classes/errorClasses/GenericError"));
const filter_1 = require("../Filtering/filter");
const searchHelpers_1 = require("../Filtering/searchHelpers");
const sortHelper_1 = require("../Filtering/sortHelper");
const pagination_1 = require("../Filtering/pagination");
const fieldSelectHelper_1 = require("../Filtering/fieldSelectHelper");
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
const createBooking = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    //initiate the isolated environment. that is the mongodb session/ mongoose session
    const session = yield mongoose_1.default.startSession();
    //session is the isolated environment
    //start the database operation in isolated environment
    session.startTransaction();
    try {
        //array of object sent
        const booking = yield booking_model_1.default.create([bookingData], { session });
        //so booking is an array of object with one object
        if (!booking) {
            // throw new Error('Booking failed')
            throw new GenericError_1.default('Booking failed', 400);
        }
        // throw new Error('Booking failed fake error')
        const tour = yield tour_model_1.default.findByIdAndUpdate(booking[0].tour, 
        //   {
        //     $inc: { availableSeats: -booking[0].bookedSlots },
        //   },
        {
            availableSeats: { $inc: -booking[0].bookedSlots },
        }, {
            session,
            // new: true,
            // runValidators: true,
        });
        if (!tour) {
            // throw new Error('Tour Update in booking failed')
            throw new GenericError_1.default('Tour Update in booking failed', 400);
        }
        yield session.commitTransaction();
        //replica set / clone is saved to main database
        yield session.endSession();
        //isolated environment is closed
        return booking[0];
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        // throw new Error(error)
        throw new GenericError_1.default(error.message, 400);
    }
});
const getAllBookings = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
    const queryObj = Object.assign({}, query);
    // const excludedObj = [
    //   'page',
    //   'fields',
    //   'searchTerm',
    //   'limit',
    //   'sortBy',
    //   'sortOrder',
    // ]
    console.log(queryObj);
    // const result = await Tour.find()
    //exact match down here
    const filteredQuery = (0, filter_1.filter)(booking_model_1.default.find(), query);
    const searchedQuery = (0, searchHelpers_1.search)(filteredQuery, query);
    // if (query.sortBy && query.sortOrder) {
    //   const sortBy = query.sortBy //price
    //   const sortOrder = query.sortOrder
    //   const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`
    //   searchedQuery.sort(sortStr)
    // }
    const sortedQuery = (0, sortHelper_1.sort)(searchedQuery, query);
    const paginatedQuery = (0, pagination_1.pagination)(sortedQuery, query);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selectedFieldQuery = (0, fieldSelectHelper_1.select)(paginatedQuery, query);
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
    const result = yield paginatedQuery;
    return result;
    // const result = await Booking.find()
    // return result
});
const getSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findById(id);
    return result;
});
const getAllBookingsOfAUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find({
        user: id,
    });
    return result;
});
const updateBooking = (id, bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    //apply transaction here
    //if bookedSlots decreases, then increase availableSeats in tour
    //if bookedSlots increases, then decrease availableSeats in tour
    const result = yield booking_model_1.default.findByIdAndUpdate(id, bookingData, {
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
    getAllBookingsOfAUser,
    updateBooking,
    deleteBooking,
};
