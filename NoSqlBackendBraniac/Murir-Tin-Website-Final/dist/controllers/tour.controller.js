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
        const tourData = req.body;
        const result = yield tour_service_1.TourServices.createTour(tourData);
        console.log(result);
        res.status(200).json({
            message: "Tour Created Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Tour Creation Failed",
            status: "Failed",
            data: error.message
        });
    }
});
const getSingleTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield tour_service_1.TourServices.getSingleTour(id);
        res.status(200).json({
            message: "Single Tour Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Tour Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const getAllTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield tour_service_1.TourServices.getAllTour();
        res.status(200).json({
            message: "All Tour Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Single Tour Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const updateTour = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log("67", req.body);
        const result = yield tour_service_1.TourServices.updateTour(id, data);
        console.log(result);
        res.status(200).json({
            message: " Tour Updates Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Tour Updates Failed",
            status: "Failed",
            data: error
        });
    }
});
exports.TourController = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour
};
