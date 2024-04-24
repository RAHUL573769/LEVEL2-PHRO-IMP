"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = exports.quardianSchema = void 0;
const mongoose_1 = require("mongoose");
const studentNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String
        // required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String
        // required: true
    }
});
exports.quardianSchema = new mongoose_1.Schema({
    firstName: String,
    middleName: String,
    lastName: String
});
exports.studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        // required: [true, "Id is Required"],
        unique: true
    },
    password: {
        type: String
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        unique: true,
        ref: "User"
    },
    name: {
        type: String,
        name: studentNameSchema
    },
    gender: {
        type: String,
        enum: {
            values: ["Male", "Female"]
        }
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String
        // required: [true, "Email is Required"]
    },
    contactNumber: {
        type: String
    },
    emergencyContactNumber: {
        type: String
        // required: [true, "This is Needed"]
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A+", "A-"]
        }
    },
    presentAddress: {
        type: String
    },
    permanentAddress: {
        type: String
    },
    guardian: {
        type: String,
        name: exports.quardianSchema
    },
    localGuardian: {},
    profileImage: {
        type: String
    },
    academicSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicSemester"
    },
    academicDepartment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicDepartment"
    },
    isDeleted: {}
});
exports.StudentModel = (0, mongoose_1.model)("Student", exports.studentSchema);
