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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const successResponse_1 = require("../../helpers/successResponse");
const createAdminController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.createAdmin(req.body);
        console.log("Result", result);
        (0, successResponse_1.sendResponse)(res, {
            statusCode: 200,
            success: true,
            message: " data Crested Fetched",
            data: result
        });
        // res.status(200).json({
        //   success: true,
        //   data: result,
        //   message: "Admin Created Succesfully"
        // });
    }
    catch (error) {
        next(error);
        // res.status(404).json({
        //   success: false,
        //   data: error,
        //   message: "Something Went Wrong"
        // });
    }
});
exports.UserController = { createAdminController };
