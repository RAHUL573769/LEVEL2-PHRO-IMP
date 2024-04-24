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
exports.authServices = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const hashPassword_1 = require("../HelpingFoldder/hashPassword");
const jwt_helpers_1 = require("../helpers/jwt.helpers");
const user_model_1 = __importDefault(require("../models/user.model"));
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = await User.findOne(payload)
    //After adding argon3 changed to email:password.emil
    const user = yield user_model_1.default.findOne({ email: payload.email }).select('+password');
    if (!user) {
        throw new Error('Invalid Creddentials');
    }
    // console.log('User FindOne From Login', user)
    const jwtPayLoad = {
        email: user.email,
        role: user.role,
    };
    const password = payload.password;
    const hashedPassword = yield (0, hashPassword_1.hashPassord)(password);
    console.log('Hasd pawword from 31 number line', hashPassword_1.hashPassord);
    if (!hashPassword_1.hashPassord) {
        throw new Error('Caanot ');
    }
    const isCorrectPassword = yield (0, hashPassword_1.verifyPassword)(hashedPassword, password);
    // console.log('Is corrected', isCorrectPassword)
    // const token = jwt.sign(jwtPayLoad, 'tour-secret', {
    //   expiresIn: '10d',
    // })
    const token = (0, jwt_helpers_1.createToken)(jwtPayLoad, 'tour-secret', {
        expiresIn: '10d',
    });
    // console.log('Token From Auth Services', token)
    const refreshToken = (0, jwt_helpers_1.createToken)(jwtPayLoad, 'refresh-secret', {
        expiresIn: '30d',
    });
    console.log('Token From Auth Services', refreshToken);
    //   return null
    return { token, refreshToken };
});
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const password = payload.password;
    const hashedPassword = yield (0, hashPassword_1.hashPassord)(password);
    // console.log('Hashed ', hashedPassword)
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, payload), { password: hashedPassword, role: 'user', userStatus: 'active' }));
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const changePassword = (
// eslint-disable-next-line @typescript-eslint/no-unused-vars
decodedToken, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('Decoded Token From Changed Password', decodedToken)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email, iat, exp } = decodedToken;
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error('User Not Found');
    }
    if (!iat) {
        throw new Error('Invalid Token');
    }
    if (user.passwordChangedAt && iat > user.passwordChangedAt.getTime() / 1000) {
        throw new Error('Old Token');
    }
    const userInputHashedPassword = yield (0, hashPassword_1.hashPassord)(payload.newPassword);
    const userOldHashedPassword = yield (0, hashPassword_1.hashPassord)(payload.oldPassword);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log('94 line', userInputHashedPassword);
    console.log('95 line', userOldHashedPassword);
    const isCorrectPassword = yield (0, hashPassword_1.verifyPassword)(userOldHashedPassword, userInputHashedPassword);
    console.log('Is Password Correct', isCorrectPassword);
    const updatedUser = yield user_model_1.default.findByIdAndUpdate(user._id, {
        password: isCorrectPassword,
        passwordChangedAt: new Date(),
    }, {
        new: true,
    });
    return updatedUser;
});
// const refreshToken = async (payload: {}) => {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const forgetPassword = () => {}
exports.authServices = {
    login,
    register,
    changePassword,
};
