"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = void 0;
const express_1 = __importDefault(require("express"));
const Admin_controller_1 = require("./Admin.controller");
const router = express_1.default.Router();
router.get("/get-admin", Admin_controller_1.AdminController.getAdminController);
router.get("/get-single", Admin_controller_1.AdminController.getSingleAdminController);
exports.AdminRoute = router;
