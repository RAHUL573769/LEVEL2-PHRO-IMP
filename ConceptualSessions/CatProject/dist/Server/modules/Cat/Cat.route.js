"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Cat_controller_1 = require("./Cat.controller");
const router = express_1.default.Router();
router.post("/create-cat", Cat_controller_1.CatController.createCatController);
router.get("/get-cat", Cat_controller_1.CatController.getCatController);
exports.catRoutes = router;
