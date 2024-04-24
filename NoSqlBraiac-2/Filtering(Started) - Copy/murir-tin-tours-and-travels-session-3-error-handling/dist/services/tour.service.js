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
const filterHelpers_1 = require("../helpers/errorHelpers/filterHelpers");
const searchHelpers_1 = require("../helpers/errorHelpers/searchHelpers");
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
    // console.log(Tour.findById(id))
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
// type TQuery = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   fields?: string
//   sortBy?: string
//   sortOrder?: string
// }
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
//   // console.log('Before Excluding', queryObj)
//   excludedFields.forEach((keyword) => {
//     delete queryObj[keyword]
//   })
//   const modelquery = modelQuery.find(queryObj)
//   return modelquery
//   // console.log('After Excluding', queryObj)
// }
const getAllTour = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(payload)
    const queryObj = Object.assign({}, query);
    // const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
    // console.log('Before Excluding', queryObj)
    // excludedFields.forEach((keyword) => {
    //   delete queryObj[keyword]
    // })
    // console.log('After Excluding', queryObj)
    // console.log(queryObj)
    //reserved words
    // const result = await Tour.find(queryObj)
    // const result = await filter(Tour.find(), query)
    // from video 5---
    // for partial searching
    // let modelQuery:Query<>;
    const filteredQuery = (0, filterHelpers_1.filter)(tour_model_1.default.find(), query); //await korbo na ..karon search term rakte
    // console.log(query.searchTerm)
    // console.log(query.searchTerm)
    // if (query.searchTerm) {
    //   console.log('Model Query Single', modelQuery.model.schema.path('name'))
    //   console.log(
    //     '----------Model Query Mingle-----',
    //     modelQuery.model.schema.paths,//array
    //   )
    //   const fieldValues = Object.values(modelQuery.model.schema.paths)
    //   const searchableFields = fieldValues
    //     .filter((fieldObj) => {
    //       console.log(fieldObj);
    //       Here fieldobj=modelQuery.model.schema.path(fieldObj.path)
    //       if (fieldObj.instance === 'String') {
    //         return true //
    //         modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
    //         name:"Historic"
    //          return [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
    //         Output of above name":"Historic"
    //       }
    //     })
    //     .map((fieldObj) => ({
    //       [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
    //     }))
    //   start from 35 minute
    //   console.log('Searchable Fields', searchableFields)
    //     modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' }
    //   })
    //   modelQuery.find({
    //     $or: [
    //       {
    //         name: { $regex: query.searchTerm, $options: 'i' },
    //       },
    //       {
    //         startLocation: { $regex: query.searchTerm, $options: 'i' },
    //       },
    //     ],
    //     $or: searchableFields,
    //   })
    // }
    const searchQuery = (0, searchHelpers_1.search)(filteredQuery, query);
    if (query.sortBy && query.sortOrder) {
        const sortBy = query.sortBy;
        const sortOrder = query.sortOrder;
        const sortStr = `${sortOrder === 'desc' ? '-' : ''} ${sortBy}`;
        searchQuery.sort(sortStr);
        // const sortObj = {}
        // Tour.find().sort('-name')
        // Tour.find().sort('-name')
    }
    const result = yield searchQuery;
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
