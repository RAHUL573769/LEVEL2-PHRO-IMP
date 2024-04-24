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
exports.CatServices = void 0;
const cat_model_1 = require("../model/cat.model");
const createCat = (catData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cat_model_1.Cat.create(catData);
    return result;
});
const findCat = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cat_model_1.Cat.find();
    return result;
});
const findSingleCat = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(Cat.isCatExists("2"));
    const result = yield cat_model_1.Cat.findById(id);
    return result;
});
exports.CatServices = { createCat, findCat, findSingleCat };
