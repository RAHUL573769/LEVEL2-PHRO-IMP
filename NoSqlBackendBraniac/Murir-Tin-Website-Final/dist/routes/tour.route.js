"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourRouter = void 0;
const express_1 = __importDefault(require("express"));
const tour_controller_1 = require("../controllers/tour.controller");
const router = express_1.default.Router();
router.get("/get-tour", tour_controller_1.TourController.getAllTour);
router.post("/create-tour", tour_controller_1.TourController.createTour);
router.get("/get-user/:id", tour_controller_1.TourController.getSingleTour);
router.patch("/update-user/:id", tour_controller_1.TourController.updateTour);
exports.TourRouter = router;
