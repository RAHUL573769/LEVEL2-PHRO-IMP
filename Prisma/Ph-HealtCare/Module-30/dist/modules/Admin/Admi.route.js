"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = void 0;
const express_1 = __importDefault(require("express"));
const Admin_controller_1 = require("./Admin.controller");
const valdateRequest_1 = require("../../helpers/valdateRequest");
const admin_validation_1 = require("./admin.validation");
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
const router = express_1.default.Router();
router.get("/get-admin/:id", Admin_controller_1.AdminController.getByIdFromDb);
router.patch("/update-admin/:id", (0, valdateRequest_1.validateRequest)(admin_validation_1.update), Admin_controller_1.AdminController.updateDataInDb);
router.delete("/delete-admin/:id", Admin_controller_1.AdminController.deleteData);
router.delete("/soft-delete-admin/:id", Admin_controller_1.AdminController.softdeleteData);
router.get("/get-admin", Admin_controller_1.AdminController.getAdminController);
router.get("/get-single", Admin_controller_1.AdminController.getSingleAdminController);
exports.AdminRoute = router;
