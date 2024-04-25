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
exports.auth = void 0;
const jwtHelpers_1 = require("../helpers/jwtHelpers");
const ApiError_1 = require("../errors/ApiError");
const auth = (...roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            // console.log(token);
            if (!token) {
                // throw new Error("Yoiu are not verified");
                throw new ApiError_1.ApiError(500, "You  are Unauthorized");
            }
            const verifiedUser = (0, jwtHelpers_1.verifyToken)(token, "abcd");
            console.log("Verified User", verifiedUser);
            //for password change
            req.user = verifiedUser;
            //end for password change
            if (roles.length && !roles.includes(verifiedUser.role)) {
                // throw new Error("Yoiu are not verified");
                throw new ApiError_1.ApiError(500, "You  are Unauthorized");
            }
            next();
            //   console.log(token);
            //   console.log(roles);
        }
        catch (error) {
            next(error);
        }
    });
};
exports.auth = auth;
