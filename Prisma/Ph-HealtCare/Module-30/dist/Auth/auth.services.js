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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const jwtHelpers_1 = require("../helpers/jwtHelpers");
const prismaHelpers_1 = require("../helpers/prismaHelpers");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const generateToken=(payload:any,secret:string,expiresIn:string)=>{
//   var token = jwt.sign(
//     { email: userData.email, role: userData.role },
//     "privateKey",
//     {
//       expiresIn: "60m"
//     }
//   );
// }
// const generateToken = (payload: any, secret: string, expiresIn: string) => {
//   var token = jwt.sign(payload, secret, {
//     expiresIn: expiresIn
//   });
//   return token;
// };
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prismaHelpers_1.prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email
        }
    });
    // console.log(payload.password, userData.password);
    const isPasswordCorrect = yield bcrypt_1.default.compare(payload.password, userData.password);
    // console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
        throw new Error("Password Incorrect");
    }
    // var token = jwt.sign(
    //   { email: userData.email, role: userData.role },
    //   "privateKey",
    //   {
    //     expiresIn: "60m"
    //   }
    // );
    var token = (0, jwtHelpers_1.generateToken)({ email: userData.email, role: userData.role }, "abcd", "5m");
    // const refreshToken = jwt.sign(
    //   { email: userData.email, role: userData.role },
    //   "abcd",
    //   {
    //     expiresIn: "60m"
    //   }
    // );
    const refreshToken = (0, jwtHelpers_1.generateToken)({ email: userData.email, role: userData.role }, "abcdefgh", "5m");
    // return userData;
    return {
        refreshToken,
        token,
        needsPasswordChange: userData.needsPasswordChange
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Refresh Token", token);
    let decodedData;
    // const decodedData = jwt.verify(token, "abcdefgh");
    try {
        const decodedData = jsonwebtoken_1.default.verify(token, "abcdefgh");
        console.log("DecodedData", decodedData);
        const isUserExists = yield prismaHelpers_1.prisma.user.findUnique({
            where: {
                email: decodedData === null || decodedData === void 0 ? void 0 : decodedData.email
            }
        });
        // return isUserExists;
    }
    catch (error) {
        throw new Error("You are not Verified");
    }
});
exports.AuthServices = { loginUser, refreshToken };
