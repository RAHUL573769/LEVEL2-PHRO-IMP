import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();
router.get("/get-user", UserController.getAllUser);

router.post("/create-user", UserController.createUser);
router.get("/get-user/:id", UserController.getSingleUser);
router.patch("/update-user/:id", UserController.updateUser);

export const UserRouter = router;
// http://localhost:5000/api/vi/users/get-user
// http://localhost:5000/api/vi/tours/get-tour
