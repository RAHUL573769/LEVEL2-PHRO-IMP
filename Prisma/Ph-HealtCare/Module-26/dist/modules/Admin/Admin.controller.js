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
exports.AdminController = void 0;
const Admin_services_1 = require("./Admin.services");
const admin_constants_1 = require("./admin.constants");
const pick_1 = __importDefault(require("../../shared/pick"));
// const pickFunction = <T extends Record<string, unknown>, K extends keyof T>(
//   obj: T,
//   keys: K[]
// ): Partial<T> => {
//   console.log("From Line Number 5", obj, keys);
//   const finalObj: Partial<T> = {}; //creating an object
//   for (const key of keys) {
//     if (obj && Object.hasOwnProperty.call(obj, key)) {
//       finalObj[key] = obj[key];
//     }
//   }
//   return finalObj;
// };
const getAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Admin_services_1.AdminServices.getAllFromDb();
    try {
        res.status(200).json({
            success: true,
            data: result,
            message: "Admin Data Fetched Successfully"
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            data: error,
            message: "Some Error Found"
        });
    }
});
const getSingleAdminController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const filters = req.query;
    // console.log("From Get Single", query);
    const filters = (0, pick_1.default)(req.query, admin_constants_1.adminFilterableFields); // console.log("Filters", filters);
    const options = (0, pick_1.default)(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    console.log("options", options);
    const result = yield Admin_services_1.AdminServices.getSingleFromDb(filters, options);
    console.log(result);
    try {
        res.status(200).json({
            success: true,
            data: result,
            message: "Admin Data Fetched Successfully"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: error,
            message: "Some Error Found"
        });
    }
});
exports.AdminController = { getAdminController, getSingleAdminController };
