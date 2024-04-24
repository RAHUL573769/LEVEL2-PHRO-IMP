"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const filter_1 = require("../helpers/Filtering/filter");
const createTour = (tourData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.default.create(tourData);
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludeFields = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sort',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludeFields.forEach((keyword) => delete queryObj[keyword])
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   modelQuery = modelQuery.find(queryObj)
//   return modelQuery
//   // console.log('Query Obj After', queryObj)
// }
const getAllTours = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryObj = { ...query }
    // console.log('Query Obj Before', queryObj)
    // const excludeFields = [
    //   'page',
    //   'searchTerm',
    //   'limit',
    //   'sort',
    //   'sortBy',
    //   'sortOrder',
    //   'fields',
    // ]
    // excludeFields.forEach((keyword) => delete queryObj[keyword])
    // console.log('Query Obj After', queryObj)
    // const result = await Tour.find(query)
    // const result = await Tour.find(queryObj)
    // const result = await filter(Tour.find(), query)
    const modelQuery = (0, filter_1.filter)(tour_model_1.default.find(), query);
    // console.log(modelQuery)
    // console.log('Query', query)
    if (query.searchTerm) {
        // console.log(modelQuery.model.schema.paths)
        const fieldValues = Object.values(modelQuery.model.schema.paths);
        // console.log(fieldValues)
        // console.log(query.searchTerm)
        const searchableFields = fieldValues
            .filter((fieldObject) => {
            if (modelQuery.model.schema.path(fieldObject.path).instance === 'String') {
                return true;
                // [fieldObject.path]: { $regex: query.searchTerm, $options: 'i' },
            }
        })
            .map((fieldObj) => ({
            // [fieldObject.path]: { $regex: query.searchTerm, $options: 'i' },
            [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
        }));
        // modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
        modelQuery.find({
            $or: searchableFields,
        });
    }
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
