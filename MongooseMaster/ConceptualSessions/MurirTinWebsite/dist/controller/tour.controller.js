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
exports.TourController = void 0;
const tour_service_1 = require("../services/tour.service");
const createTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TourData = req.body;
        console.log(TourData);
        // const result = await Tour.create(TourData);
        const result = yield tour_service_1.TourServices.createTour(TourData);
        console.log("Daata Added");
        res.status(201).json({
            message: "Tour Created",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const TourData = req.body;
        // const result = await Tour.create(TourData);
        const result = yield tour_service_1.TourServices.getAllTour();
        console.log(result);
        res.status(201).json({
            message: "Tour Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const getSingleTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TourId = req.params.id;
        // const result = await Tour.create(TourData);
        const result = yield tour_service_1.TourServices.getSingleTour(TourId);
        console.log(result);
        res.status(201).json({
            message: "Single Tour Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const updateTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TourData = req.body;
        const TourId = req.params.id;
        // const result = await Tour.create(TourData);
        const result = yield tour_service_1.TourServices.updateTour(TourId, TourData);
        console.log(result);
        res.status(201).json({
            message: "Tour Updated ",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const deleteTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const TourData = req.body;
        // const result = await Tour.create(TourData);
        const result = yield tour_service_1.TourServices.getAllTour();
        console.log(result);
        res.status(201).json({
            message: "Tour Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
exports.TourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour
};
