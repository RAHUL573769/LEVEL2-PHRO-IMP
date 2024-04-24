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
exports.tourServices = void 0;
const tour_model_1 = __importDefault(require("../models/tour.model"));
// import { TQueryObj } from '../types/TQuery'
const filterHelpers_1 = require("../helpers/errorHelpers/filterHelpers");
const createTour = (tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.create(tourData);
    return result;
});
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   //
//   const excludeFields = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludeFields.forEach((keyword) => delete queryObj[keyword])
//   const query = modelQuery.find(queryObj)
//   return query
// }
const getAllTours = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryObject = { ...query }
    const modelQuery = yield (0, filterHelpers_1.filter)(tour_model_1.default.find(), query);
    // if (query.searchTerm) {
    //   modelQuery.find({name:{$regex:query.searchTerm}})
    // }
    console.log('36', query);
    // console.log('Query Object Before Delete', queryObject) //filtering
    // const excludeFields = [
    //   'page',
    //   'searchTerm',
    //   'limit',
    //   'price',
    //   'sortBy',
    //   'sortOrder',
    //   'fields',
    // ] //reserved keywords for filtering
    // excludeFields.forEach((keyword) => delete queryObject[keyword])
    // console.log('Query object after delete', queryObject)
    // const result = await Tour.find(queryObject)
    // const result = await filter(Tour.find({ price: { $lt: 1200 } }), query)
    // console.log(result)
    const result = yield modelQuery;
    return result;
});
const getSingleTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.findById(id).populate('reviews');
    return result;
});
const updateTour = (id, tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.findByIdAndUpdate(id, tourData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.findByIdAndDelete(id);
    return result;
});
const getNextSchedule = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield tour_model_1.default.findById(id);
    const nextSchedule = tour === null || tour === void 0 ? void 0 : tour.getNextNearestStartDateAndEndDate();
    return {
        tour,
        nextSchedule,
    };
});
exports.tourServices = {
    createTour,
    getAllTours,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule,
};
