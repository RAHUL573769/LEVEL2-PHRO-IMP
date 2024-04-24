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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cat_service_1 = require("../services/cat.service");
const ObjectId = mongoose_1.default.Types.ObjectId;
const createCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = __rest(req.body, []);
        console.log(data);
        const result = yield cat_service_1.CatServices.createCat(data);
        res.status(200).json({
            message: "Cat Data Created Successfully",
            status: "Success",
            data: result
        });
    }
    catch (error) { }
});
const findCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cat_service_1.CatServices.findCat();
        res.status(200).json({
            message: "Cat Data Fetched Successfully",
            status: "Success",
            data: result
        });
    }
    catch (error) { }
});
const findSingleCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const catId = req.params.id;
        const result = yield cat_service_1.CatServices.findSingleCat(catId);
        // const searchCatId = await Cat.isCatExists(req.params.id);
        // console.log("SearchCatId from Find Controller", searchCatId);
        // if (!searchCatId) {
        //   throw new Error("User not found").message;
        // }
        res.status(200).json({
            message: "Single Cat Data Fetched Successfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        console.log("46", error.message);
    }
});
exports.CatController = {
    createCatController,
    findCatController,
    findSingleCatController
};
