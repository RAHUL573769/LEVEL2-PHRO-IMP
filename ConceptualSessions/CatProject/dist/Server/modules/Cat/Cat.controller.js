"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const Cat_service_1 = require("./Cat.service");
const createCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const catDataAdded = yield Cat_service_1.catServices.addCat(data);
        res.status(200).json({
            success: true,
            message: "Data Added"
        });
        console.log(data);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        });
    }
});
const getCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const catDataAdded = yield Cat_service_1.catServices.getCat();
        res.status(200).json({
            success: true,
            message: "Data Fetched Successfully"
        });
        console.log(data);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong"
        });
    }
});
exports.CatController = { createCatController, getCatController };
