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
exports.reviewController = void 0;
const review_service_1 = require("../services/review.service");
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tourData = req.body;
        // const result = await Tour.create(tourData);
        const result = yield review_service_1.ReviewServices.createReview(tourData);
        console.log("Daata Added");
        res.status(201).json({
            message: "Tour Created",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const getAllReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const tourData = req.body;
        // const result = await Tour.create(tourData);
        const result = yield review_service_1.ReviewServices.getAllReview();
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
const getSingleReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tourId = req.params.id;
        // const result = await Tour.create(tourData);
        const result = yield review_service_1.ReviewServices.getSingleReview(tourId);
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
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tourData = req.body;
        const tourId = req.params.id;
        // const result = await Tour.create(tourData);
        const result = yield review_service_1.ReviewServices.updateReview(tourId, tourData);
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
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const tourData = req.body;
        // const result = await Tour.create(tourData);
        const result = yield review_service_1.ReviewServices.deleteReview();
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
exports.reviewController = {
    createReview,
    getAllReview,
    getSingleReview,
    updateReview,
    deleteReview
};
