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
/* eslint-disable @typescript-eslint/no-explicit-any */
const getQuery_1 = require("../helpers/getQuery");
const tour_model_1 = __importDefault(require("../models/tour.model"));
const createTour = (tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.create(tourData);
    return result;
});
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludedFields.forEach((keyword) => delete queryObj[keyword])
//   modelQuery = modelQuery.find(queryObj)
//   return modelQuery
// }
const getAllTours = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryObj = { ...query }
    // console.log(queryObj, 'before delete')
    // // {
    // //   name : "Dhaka-Cox's Bazaar",
    // //   page : "3",
    // //   limit : "10",
    // //   searchTerm : "Dhaka",
    // //   sortBy : "price",
    // //   sortOrder : "asc",
    // //   fields : "name"
    // // }
    // //reserved keywords for filtering
    // console.log(queryObj, 'after delete')
    // const result = await Tour.find(queryObj)
    // return result
    console.log(query, 'from service');
    // const result = await filter(
    //   Tour.find(
    //     // less than, greater than, less than equal, greater than equal, not equal, equal
    //     // lt, gt, lte, gte, ne, eq
    //     // ?price[lt]=1200
    //     // req.query = { price: { lt: 1200 }}
    //     // ?price[$gt]=1200
    //     // req.query = { price: { $gt: 1200 }}
    //     // { price: { $lt: 1200 } },
    //   ),
    //   query,
    // )
    //exact match
    // const modelQuery = filter(Tour.find(), query)
    // partial match - searching
    // if (query.searchTerm) {
    //   // const searchableFields = ['name', 'startLocation']
    //   console.log(modelQuery.model.schema.paths, 'paths er object of object')
    //   // {
    //   //   name : {
    //   //     path : "name",
    //   //     instance : "String",
    //   //.........................//
    //   //   },
    //   //   startLocation : {
    //   //     path : "startLocation",
    //   //     instance : "String",
    //   //.........................//
    //   // },
    //   //   price : {
    //   //     path : "price",
    //   //     instance : "Number",
    //   // }
    //   // }
    //   // console.log(modelQuery.model.schema.paths, 'paths array')
    //   const fieldValues = Object.values(modelQuery.model.schema.paths)
    //   const searchableFields = fieldValues
    //     .filter((fieldObj) => {
    //       if (fieldObj.instance === 'String') {
    //         return true
    //       }
    //     })
    //     .map((fieldObj) => ({
    //       [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
    //     }))
    //   console.log(searchableFields, 'searchableFields')
    //   // console.log(fieldValues)
    //   //  const searchRegex = new RegExp(query.searchTerm, 'i')
    //   //  modelQuery.find({ name: searchRegex })
    //   modelQuery.find({
    //     // name: { $regex: query.searchTerm, $options: 'i' },
    //     // startLocation: { $regex: query.searchTerm, $options: 'i' },
    //     //or operator
    //     // $or: [
    //     //   {
    //     //     name: { $regex: query.searchTerm, $options: 'i' },
    //     //   },
    //     //   {
    //     //     startLocation: { $regex: query.searchTerm, $options: 'i' },
    //     //   },
    //     // ],
    //     $or: searchableFields,
    //   })
    // }
    // if (query.sortBy && query.sortOrder) {
    //   const sortBy = query.sortBy //"price" | "duration" | "ratingsAverage"
    //   const sortOrder = query.sortOrder //"asc" | "desc"
    //   const sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
    //   searchedQuery.sort(sortStr)
    //   // Tour.find().sort('price')
    // }
    //100 tours
    //limit = 10
    //1 page - 10 tours : Tour no1 - Tour no10
    //2 page - 10 tours : Tour no11 - Tour no20
    //limit = 20
    // 1 page - 20 tours : Tour no1 - Tour no20
    // 2 page - 20 tours : Tour no21 - Tour no40 => skip 20 tours
    // 3 page - 20 tours : Tour no41 - Tour no60 => skip 40 tours
    // page = 3
    // limit =20
    // skip = (page-1) * limit
    //skip = (3-1) * 20 = 40
    // if (query.fields) {
    //   const fields = query.fields.split(',').join(' ')
    //   console.log(fields, 'fields')
    //   paginatedQuery.select(fields)
    // }
    const result = yield (0, getQuery_1.getQuery)(tour_model_1.default.find(), query);
    // const result = await modelQuery
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
