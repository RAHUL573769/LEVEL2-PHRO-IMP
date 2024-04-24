import { Request, Response } from "express";
import express from "express";
import { userController } from "../controller/user.controller";
import User from "../models/user.model";
import { userServices } from "../services/user.service";
import { TourController } from "../controller/tour.controller";
const router = express.Router();
const getRoute = (req: Request, res: Response) => {
  console.log("Hello World");
};

// const createUser = async (req: Request, res: Response) => {
//   console.log(req.body);
//   try {
//     const userData = req.body;
//     const result = await User.create(userData);

//     console.log("Daata Added");
//     res.status(201).json({
//       message: "User Created",
//       status: "success",
//       data: result
//     });
//   } catch (error: any) {
//     console.log("Errror Found");
//   }
// };
router.post("/tours", TourController.createTour);

router.get("/", TourController.getAllTour);
router.get("/:id", TourController.getSingleTour);
router.get("/:id/next-schedule", TourController.getNextSchedule);

router.patch("/:id", TourController.updateTour);

export const tourRotes = router;
// conrouter.post("/createuser", userController.createUser);
// export default {
//   getRoute,
//   createUser
// };
