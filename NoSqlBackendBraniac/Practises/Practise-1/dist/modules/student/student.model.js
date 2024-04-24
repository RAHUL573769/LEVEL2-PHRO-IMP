"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const Gender = ["male", "female"];
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
    }
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String
    },
    fatherOccupation: {
        type: String
    },
    fatherContactNumber: {
        type: String
    },
    motherName: {
        type: String
    },
    motherOccupation: {
        type: String
    },
    motherContactNumber: {
        type: String
    }
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    contactNo: {
        type: String
    },
    address: {
        type: String
    }
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: Number
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    name: {
        type: userNameSchema
    },
    gender: {
        type: String,
        enum: {
            values: Gender
        }
    },
    bloodGroup: {
        type: String
    },
    emergencyContactNumber: {
        type: String
    },
    presentAddress: {
        type: String
    },
    permanentAddress: {
        type: String
    },
    guardian: {
        type: String
    },
    localGuardian: {
        type: String
    },
    profileImage: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
