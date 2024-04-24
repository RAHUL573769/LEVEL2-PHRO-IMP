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
const user_services_1 = require("../services/user.services");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield user_services_1.UserServices.createUser(userData);
        res.status(200).json({
            message: "User Created Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "User Creation Failed",
            status: "Failed",
            data: error
        });
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_services_1.UserServices.getSingleUser(id);
        res.status(200).json({
            message: "Single User Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "User Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_services_1.UserServices.getAllUser();
        res.status(200).json({
            message: "All User Fetched Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Single User Fetched Failed",
            status: "Failed",
            data: error
        });
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log("67", req.body);
        const result = yield user_services_1.UserServices.updateUser(id, data);
        console.log(result);
        res.status(200).json({
            message: " User Updates Succesfully",
            status: "Success",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "User Updates Failed",
            status: "Failed",
            data: error
        });
    }
});
exports.UserController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser
};
