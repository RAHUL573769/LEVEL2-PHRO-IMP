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
exports.TourServices = void 0;
const tour_model_1 = require("../models/tour.model");
const createTour = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.Tour.create(data);
    return result;
});
const getAllTour = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.Tour.find();
    return result;
});
const getSingleTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.Tour.findById(id);
    return result;
});
const updateTour = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield tour_model_1.Tour.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });
    return result;
});
const deleteTour = () => { };
exports.TourServices = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour
};
