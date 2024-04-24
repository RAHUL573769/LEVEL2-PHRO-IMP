"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const mongoose_1 = require("mongoose");
const catSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    color: {
        type: String
    },
    secret: {
        type: String,
        required: false
    }
});
exports.Cat = (0, mongoose_1.model)("Cat", catSchema);
// catSchema.methods.generateId = async function () {
//   console.log("genertated");
// };
