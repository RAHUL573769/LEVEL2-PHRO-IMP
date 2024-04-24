"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const Role = ["admin", "faculty", "student"];
const Status = ["blocked", "in-progress"];
const userSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: Role
    },
    status: {
        type: String,
        enum: Status,
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
exports.User = (0, mongoose_1.model)("User", userSchema);
