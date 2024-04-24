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
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        // const result = await User.create(userData);
        const result = yield user_service_1.userServices.createUser(userData);
        console.log("Daata Added");
        res.status(201).json({
            message: "User Created",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userData = req.body;
        // const result = await User.create(userData);
        const result = yield user_service_1.userServices.getAllUser();
        console.log(result);
        res.status(201).json({
            message: "User Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        // const result = await User.create(userData);
        const result = yield user_service_1.userServices.getSingleUser(userId);
        console.log(result);
        res.status(201).json({
            message: "Single User Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const userId = req.params.id;
        // const result = await User.create(userData);
        const result = yield user_service_1.userServices.updateUser(userId, userData);
        console.log(result);
        res.status(201).json({
            message: "User Updated ",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userData = req.body;
        // const result = await User.create(userData);
        const result = yield user_service_1.userServices.getAllUser();
        console.log(result);
        res.status(201).json({
            message: "User Received",
            status: "success",
            data: result
        });
    }
    catch (error) {
        console.log("Errror Found");
    }
});
exports.userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser
};
