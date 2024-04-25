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
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prismaHelpers_1 = require("../../helpers/prismaHelpers");
const jwtHelpers_1 = require("../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
const emailSendeer_1 = require("./emailSendeer");
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
            email: payload.email,
            status: client_1.UserStatus.ACTIVE
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
    var token = (0, jwtHelpers_1.generateToken)({ email: userData.email, role: userData.role }, "abcd", "20m");
    // const refreshToken = jwt.sign(
    //   { email: userData.email, role: userData.role },
    //   "abcd",
    //   {
    //     expiresIn: "60m"
    //   }
    // );
    const refreshToken = (0, jwtHelpers_1.generateToken)({ email: userData.email, role: userData.role }, "abcdefgh", "50m");
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
        const decodedData = (0, jwtHelpers_1.verifyToken)(token, "abcdefgh");
        // const decodedData = jwt.verify(token, "abcdefgh") as JwtPayload;
        const userData = yield prismaHelpers_1.prisma.user.findUniqueOrThrow({
            where: {
                email: decodedData.email,
                status: client_1.UserStatus.ACTIVE
            }
        });
        // console.log(userData);
        var accessToken = (0, jwtHelpers_1.generateToken)({ email: userData.email, role: userData.role }, "abcd", "20m");
        return accessToken;
        // console.log("DecodedData", decodedData?.email);
        // const email:string=req.user
    }
    catch (error) {
        throw new Error("You are not Authorized");
    }
});
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prismaHelpers_1.prisma.user.findFirstOrThrow({
        where: {
            email: user.email
        }
    });
    const isPasswordCorrect = yield bcrypt_1.default.compare(payload.oldPassword, userData.password);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
        throw new Error("Password Incorrect");
    }
    const hashedPassword = yield bcrypt_1.default.hash(payload.newPassword, 12);
    console.log("Hashed Password", hashedPassword);
    yield prismaHelpers_1.prisma.user.update({
        where: {
            email: userData.email,
            status: client_1.UserStatus.ACTIVE
        },
        data: {
            password: hashedPassword,
            needsPasswordChange: false
        }
    });
    return {
        message: "Password Change Done"
    };
});
const forgotPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prismaHelpers_1.prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
            status: client_1.UserStatus.ACTIVE
        }
    });
    const resetPasswordToken = (0, jwtHelpers_1.generateToken)({ email: payload.email, role: userData.role }, config_1.default.resetpasswordtoken, config_1.default.resetpasswordtokentime);
    //https://localost:3000/restpass?email=fhim@gmail.com&token=fbsgsgbrf
    const restPasswordLink = config_1.default.resetPasswordLink +
        `?email=${userData.email}&token=${resetPasswordToken}`;
    yield (0, emailSendeer_1.emailSender)(userData.email, `<div>  
  
  <p>
  
  Dear User

  </p>
  <p>
  Your Password Reset Link</p>

    <a href=${restPasswordLink}>
    <button>Reset Password</button></a>
  </div>`);
    console.log("ResetPasswordLink", restPasswordLink);
    console.log("ResetPasswordToken", resetPasswordToken);
    console.log(payload.email);
});
exports.AuthServices = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPassword
};
