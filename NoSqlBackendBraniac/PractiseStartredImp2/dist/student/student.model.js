"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.StudentGender = exports.StudentBloodGroup = void 0;
const mongoose_1 = require("mongoose");
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
const guardianNameSchema = new mongoose_1.Schema({
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
const localGuardianNameSchema = new mongoose_1.Schema({
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
exports.StudentBloodGroup = [
    "A+",
    "A-",
    "AB+",
    "AB-",
    "B+",
    "B-",
    "O+",
    "O-"
];
exports.StudentGender = ["female", "male", "others"];
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    password: {
        type: String
    },
    name: {
        type: String,
        value: userNameSchema
    },
    gender: {
        type: String,
        enum: exports.StudentGender
    },
    dateOfBirth: {
        type: String
    },
    contactNumber: {
        type: String
    },
    email: {
        type: String
    },
    emergencyContactNumber: {
        type: String
    },
    bloodGroup: {
        type: String,
        enum: {
            values: exports.StudentBloodGroup
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
        value: guardianNameSchema
    },
    localGuardian: {
        type: String,
        value: localGuardianNameSchema
    },
    profileImage: {
        type: String
    },
    admissionSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicSemester"
    }
});
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
