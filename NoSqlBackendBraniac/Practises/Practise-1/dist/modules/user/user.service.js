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
exports.userServices = void 0;
const user_model_1 = require("./user.model");
const createIntoDb = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    //   const userData: Partial<IUser> = {};
    //   userData.password = password;
    //   userData.role = "student";
    //   userData.id = 324256;
    //   console.log(userData);
    //if password not siven use default password
    const user = {};
    if (!password) {
        user.password = "Default Password";
    }
    else {
        user.password = password;
    }
    user.role = "student";
    //manually generated id
    user.id = "20301022";
    //create a user model
    const result = yield user_model_1.User.create(userData);
    // create a sudent
    if (Object.keys(result).length) {
        //set id ,_id as user
        studentData.id = result.id;
        studentData.user = result._id;
    }
    return result;
});
exports.userServices = { createIntoDb };
