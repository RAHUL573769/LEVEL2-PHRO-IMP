import express, { NextFunction, Request, Response } from "express";
import { AdminController } from "./Admin.controller";

import { validateRequest } from "../../helpers/valdateRequest";
import { update } from "./admin.validation";
import { auth } from "../../middlewares/auth";
import { UsersRole } from "@prisma/client";

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
router.get(
  "/get-admin/:id",
  auth(UsersRole.ADMIN, UsersRole.SUPER_ADMIN),
  AdminController.getByIdFromDb
);
router.patch(
  "/update-admin/:id",
  validateRequest(update),
  AdminController.updateDataInDb
);
router.delete(
  "/delete-admin/:id",
  auth(UsersRole.ADMIN, UsersRole.SUPER_ADMIN),
  AdminController.deleteData
);
router.delete(
  "/soft-delete-admin/:id",
  auth(UsersRole.ADMIN, UsersRole.SUPER_ADMIN),
  AdminController.softdeleteData
);
router.get(
  "/get-admin",
  auth(UsersRole.ADMIN, UsersRole.SUPER_ADMIN),
  AdminController.getAdminController
);
router.get(
  "/get-single",
  auth(UsersRole.ADMIN, UsersRole.SUPER_ADMIN),
  AdminController.getSingleAdminController
);
export const AdminRoute = router;
