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
const jwtHelpers_1 = require("../helpers/jwtHelpers");
const user_model_1 = __importDefault(require("../models/user.model"));
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const password = payload.password
    // const hashedPassword = await bcrypt.hash(password, 21)
    // console.log(hashedPassword)
    const result = yield user_model_1.default.create(Object.assign(Object.assign({}, payload), { userStatus: 'active', 
        // password: hashedPassword,
        role: 'user' }));
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne(payload);
    //  npm install --save @types/jsonwebtoken
    if (!user) {
        throw new Error('Invalid Credentials');
    }
    //jwt 3 parts
    //header payload signature
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    //token creation
    // const token = jwt.sign(jwtPayload, 'jwt-secret', {
    //   expiresIn: '1hr',
    // })
    const token = (0, jwtHelpers_1.createToken)(jwtPayload, 'jwt-secret', { expiresIn: '1D' });
    return { token };
});
exports.authServices = {
    register,
    login,
};
