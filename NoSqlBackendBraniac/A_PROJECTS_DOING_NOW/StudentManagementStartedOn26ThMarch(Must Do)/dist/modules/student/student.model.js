"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const student_utils_1 = require("./student.utils");
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, "ID is required"],
        unique: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: "User"
    },
    name: {
        type: student_utils_1.userNameSchema,
        required: [true, "Name is required"]
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not a valid gender"
        },
        required: [true, "Gender is required"]
    },
    dateOfBirth: { type: Date },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    contactNo: { type: String, required: [true, "Contact number is required"] },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"]
    },
    bloogGroup: {
        type: String,
        enum: {
            values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            message: "{VALUE} is not a valid blood group"
        }
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"]
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"]
    },
    guardian: {
        type: student_utils_1.guardianSchema,
        required: [true, "Guardian information is required"]
    },
    localGuardian: {
        type: student_utils_1.localGuradianSchema,
        required: [true, "Local guardian information is required"]
    },
    profileImg: { type: String },
    admissionSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicSemester"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    toJSON: {
        virtuals: true
    }
});
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
