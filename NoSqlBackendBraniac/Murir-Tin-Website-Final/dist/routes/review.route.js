"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const reeview_controller_1 = require("../controllers/reeview.controller");
const router = express_1.default.Router();
router.get("/get-review", reeview_controller_1.ReviewController.getAllReview);
router.post("/create-review", reeview_controller_1.ReviewController.createReview);
router.get("/get-review/:id", reeview_controller_1.ReviewController.getSingleReview);
router.patch("/update-review/:id", reeview_controller_1.ReviewController.updateReview);
exports.ReviewRouter = router;
