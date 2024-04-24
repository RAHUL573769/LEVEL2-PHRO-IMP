"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_constants_1 = require("../constants/user.constants");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name'],
        unique: true,
    },
    age: {
        type: Number,
        required: [true, 'Please tell us your age'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please tell us your email'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please tell us your Password'],
        select: 0,
    },
    passwordChangedAt: {
        type: Date,
        default: null,
    },
    photo: String,
    role: {
        type: String,
        enum: Object.values(user_constants_1.USER_STATUS),
        default: 'user',
    },
    userStatus: {
        type: String,
        enum: Object.values(user_constants_1.ACCOUNT_STATUS),
        default: 'active',
    },
}, {
    timestamps: true,
});
//Pre Hook for Query Middleware
userSchema.pre(/^find/, function (next) {
    this.find({ userStatus: { $eq: 'active' } });
    next();
});
// userSchema.pre("findOne", function (next) {
//     this.findOne({userStatus : { $eq : "active"}})
//     next()
// });
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
