"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localGuradianSchema = exports.guardianSchema = exports.userNameSchema = void 0;
const mongoose_1 = require("mongoose");
/////////////----------
exports.userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        trim: true,
        maxlength: [20, "Name can not be more than 20 characters"]
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last Name is required"],
        maxlength: [20, "Name can not be more than 20 characters"]
    }
});
exports.guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        trim: true,
        required: [true, "Father Name is required"]
    },
    fatherOccupation: {
        type: String,
        trim: true,
        required: [true, "Father occupation is required"]
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father Contact No is required"]
    },
    motherName: {
        type: String,
        required: [true, "Mother Name is required"]
    },
    motherOccupation: {
        type: String,
        required: [true, "Mother occupation is required"]
    },
    motherContactNo: {
        type: String,
        required: [true, "Mother Contact No is required"]
    }
});
exports.localGuradianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    occupation: {
        type: String,
        required: [true, "Occupation is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    }
});
