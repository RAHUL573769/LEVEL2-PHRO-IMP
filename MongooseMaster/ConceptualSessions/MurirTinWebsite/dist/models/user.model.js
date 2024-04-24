"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const USER_ROLE = ["admin", "user"];
const USER_STATUS = ["active", "inactive"];
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please Tell Your Name"]
    },
    age: {
        type: Number,
        required: [true, "Please Tell Your Age"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please ENTER your Email"]
    },
    photo: String,
    role: {
        type: String,
        enum: USER_ROLE,
        default: "user"
    },
    userStatus: {
        type: String,
        enum: USER_STATUS,
        default: "active"
    }
});
//
userSchema.pre("find", function (next) {
    this.find({ userStatus: { $eq: "active" } });
    next();
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
