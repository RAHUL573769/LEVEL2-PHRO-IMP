"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cat_controller_1 = require("./controllers/cat.controller");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/create-cat", cat_controller_1.CatController.createCatController);
app.get("/get-cat", cat_controller_1.CatController.findCatController);
app.get("/get-single/:id", cat_controller_1.CatController.findSingleCatController);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
