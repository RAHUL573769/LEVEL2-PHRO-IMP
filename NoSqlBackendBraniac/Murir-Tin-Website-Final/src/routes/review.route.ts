import express from "express";
import { ReviewController } from "../controllers/reeview.controller";

const router = express.Router();
router.get("/get-review", ReviewController.getAllReview);

router.post("/create-review", ReviewController.createReview);
router.get("/get-review/:id", ReviewController.getSingleReview);
router.patch("/update-review/:id", ReviewController.updateReview);

export const ReviewRouter = router;
