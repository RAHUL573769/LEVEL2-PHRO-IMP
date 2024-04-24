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
exports.UserServices = void 0;
const client_1 = require("@prisma/client");
const createAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const prisma = new client_1.PrismaClient();
    console.log(data);
    const userData = {
        email: data.admin.email,
        password: data.password,
        role: client_1.UserRole.ADMIN
    };
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const createUser = yield transactionClient.user.create({
            data: userData
        });
        const createAdmin = yield transactionClient.admin.create({
            data: data.admin
        });
        return createAdmin;
    }));
    // const result = await prisma.$transaction(async (trClient) => {
    //   await trClient.user.create({
    //   data: userData
    //   });
    //   return await trClient.admin.create({
    //     data: data.admin
    //   });
    // });
    return result;
});
exports.UserServices = { createAdmin };
