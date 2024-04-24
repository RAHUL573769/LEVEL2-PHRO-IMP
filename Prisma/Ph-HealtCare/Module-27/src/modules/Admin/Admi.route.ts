import express, { Request, Response } from "express";
import { AdminController } from "./Admin.controller";

const router = express.Router();
router.get("/get-admin/:id", AdminController.getByIdFromDb);
router.patch("/update-admin/:id", AdminController.updateDataInDb);
router.delete("/delete-admin/:id", AdminController.deleteData);
router.delete("/soft-delete-admin/:id", AdminController.softdeleteData);
router.get("/get-admin", AdminController.getAdminController);
router.get("/get-single", AdminController.getSingleAdminController);
export const AdminRoute = router;
