import express, { Request, Response } from "express";
import { UserController } from "./user.controller";
const router = express.Router();
router.get("/", UserController.createAdminController);
router.post("/", UserController.createAdminController);
export const userRouter = router;
