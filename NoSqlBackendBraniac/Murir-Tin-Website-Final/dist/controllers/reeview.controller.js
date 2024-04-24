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
exports.ReviewController = void 0;
const review_services_1 = require("../services/review.services");
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewData = req.body;
        const result = yield review_services_1.ReviewServices.createReview(reviewData);
        console.log(result);
        res.status(200).json({
            message: "Review Created Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Review Creation Failed",
            status: "Failed",
            data: error.message
        });
    }
});
const getSingleReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield review_services_1.ReviewServices.getSingleReview(id);
        res.status(200).json({
            message: "Single Review Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Review Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const getAllReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield review_services_1.ReviewServices.getAllReview();
        res.status(200).json({
            message: "All Review Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Single Review Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log("67", req.body);
        const result = yield review_services_1.ReviewServices.updateReview(id, data);
        console.log(result);
        res.status(200).json({
            message: " Review Updates Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Review Updates Failed",
            status: "Failed",
            data: error
        });
    }
});
exports.ReviewController = {
    createReview,
    getAllReview,
    getSingleReview,
    updateReview
};
