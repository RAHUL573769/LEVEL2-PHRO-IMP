"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserStatus = exports.UserRole = void 0;
const mongoose_1 = require("mongoose");
exports.UserRole = ["admin", "faculty", "student"];
exports.UserStatus = ["blocked", "in-progress"];
const userSchema = new mongoose_1.Schema({
    id: {
        type: String
    },
    password: {
        type: String
    },
    needsPasswordChange: {
        type: Boolean
    },
    role: {
        type: String,
        enum: {
            values: exports.UserRole
        }
    },
    status: {
        type: String,
        enum: {
            values: exports.UserStatus
        },
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean
    }
}, {
    timestamps: true
});
// userSchema.pre("save", async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );
//   next();
// });
userSchema.post("save", function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        doc.password = "";
        next();
    });
});
exports.User = (0, mongoose_1.model)("User", userSchema);
