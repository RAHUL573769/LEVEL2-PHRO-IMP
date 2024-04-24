import express, { Request, Response } from "express";
import { AdminController } from "./Admin.controller";

const router = express.Router();

router.get("/get-admin", AdminController.getAdminController);
router.get("/get-single", AdminController.getSingleAdminController);
export const AdminRoute = router;
