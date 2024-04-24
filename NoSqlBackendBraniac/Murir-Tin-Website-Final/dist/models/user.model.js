"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = exports.UserStatus = void 0;
const mongoose_1 = require("mongoose");
exports.UserStatus = ["active", "inactive"];
exports.UserRole = ["admin", "user"];
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please Tell Us Uy Name"]
    },
    age: {
        type: Number,
        required: [true, "Please Tell Us Ur Age"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Enter Email"]
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: {
            values: exports.UserRole
        },
        default: "user"
    },
    userStatus: {
        type: String,
        enum: {
            values: exports.UserStatus
        },
        default: "active"
    }
});
//Pre hook for Query Middle ware
userSchema.pre("find", function (next) {
    this.find({ userStatus: { $eq: "active" } });
    next();
});
//Pre hook for Query Middle ware
exports.User = (0, mongoose_1.model)("User", userSchema);
