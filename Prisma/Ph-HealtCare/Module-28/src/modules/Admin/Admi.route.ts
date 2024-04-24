import express, { NextFunction, Request, Response } from "express";
import { AdminController } from "./Admin.controller";

import { validateRequest } from "../../helpers/valdateRequest";
import { update } from "./admin.validation";

// const validateRequest = (schema: ZodSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.parseAsync(req.body);

//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// };

const router = express.Router();
router.get("/get-admin/:id", AdminController.getByIdFromDb);
router.patch(
  "/update-admin/:id",
  validateRequest(update),
  AdminController.updateDataInDb
);
router.delete("/delete-admin/:id", AdminController.deleteData);
router.delete("/soft-delete-admin/:id", AdminController.softdeleteData);
router.get("/get-admin", AdminController.getAdminController);
router.get("/get-single", AdminController.getSingleAdminController);
export const AdminRoute = router;
