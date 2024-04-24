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
exports.catServices = void 0;
const Cat_model_1 = require("./Cat.model");
const addCat = (catData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Try Block Hit");
        const result = yield Cat_model_1.Cat.create(catData);
        console.log(result);
        return result;
        // const cat = new Cat(catData);
        // const id = await cat.generateId();
        // console.log(id);
    }
    catch (error) {
        console.log(error);
        // console.log("Catch Block Hit");
    }
});
const getCat = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("Try Block Hit");
        const result = yield Cat_model_1.Cat.find();
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
        // console.log("Catch Block Hit");
    }
});
exports.catServices = {
    addCat,
    getCat
};
