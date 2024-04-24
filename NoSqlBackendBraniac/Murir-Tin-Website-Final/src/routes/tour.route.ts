import express from "express";
import { TourController } from "../controllers/tour.controller";

const router = express.Router();
router.get("/get-tour", TourController.getAllTour);

router.post("/create-tour", TourController.createTour);
router.get("/get-user/:id", TourController.getSingleTour);
router.patch("/update-user/:id", TourController.updateTour);

export const TourRouter = router;
