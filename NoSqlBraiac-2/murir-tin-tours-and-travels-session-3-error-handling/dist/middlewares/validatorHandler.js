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
exports.ValidatorHandler = exports.validator = void 0;
const validator = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield schema.safeParse(req.body);
        if (!result.success) {
            next(result.error);
        }
        else {
            req.body = result.data;
            next();
        }
    });
};
exports.validator = validator;
exports.ValidatorHandler = { validator: exports.validator };
