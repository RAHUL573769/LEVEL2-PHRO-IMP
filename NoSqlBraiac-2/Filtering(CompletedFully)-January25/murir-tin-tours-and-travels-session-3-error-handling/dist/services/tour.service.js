"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
const filter_1 = require("../Filtering/filter");
const searchHelpers_1 = require("../Filtering/searchHelpers");
const sortHelper_1 = require("../Filtering/sortHelper");
const pagination_1 = require("../Filtering/pagination");
const fieldSelectHelper_1 = require("../Filtering/fieldSelectHelper");
const createTour = (tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.create(tourData);
    return result;
});
// type TQueryObj = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   searchTerm?: string
//   fields?: string
//   sortBy?: string
// }
//Query T[]=ITour[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = [
//     'page',
//     'searchTearm',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludedFields.forEach((keyword) => delete queryObj[keyword])
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   let query = model.find(queryObj)
//   return query
// }
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllTour = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const queryObj = Object.assign({}, query);
    // const excludedObj = [
    //   'page',
    //   'fields',
    //   'searchTerm',
    //   'limit',
    //   'sortBy',
    //   'sortOrder',
    // ]
    // const result = await Tour.find()
    //exact match down here
    const filteredQuery = (0, filter_1.filter)(tour_model_1.default.find(), query);
    const searchedQuery = (0, searchHelpers_1.search)(filteredQuery, query);
    // if (query.sortBy && query.sortOrder) {
    //   const sortBy = query.sortBy //price
    //   const sortOrder = query.sortOrder
    //   const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`
    //   searchedQuery.sort(sortStr)
    // }
    const sortedQuery = (0, sortHelper_1.sort)(searchedQuery, query);
    const paginatedQuery = (0, pagination_1.pagination)(sortedQuery, query);
    const selectedFieldQuey = (0, fieldSelectHelper_1.select)(paginatedQuery, query);
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
});
exports.tourServices = {
    createTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getAllTour,
    getNextSchedule,
};
