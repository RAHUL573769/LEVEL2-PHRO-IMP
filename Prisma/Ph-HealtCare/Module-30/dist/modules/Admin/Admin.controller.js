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
const pick_1 = __importDefault(require("../../helpers/pick"));
const successResponse_1 = require("../../helpers/successResponse");
const catchAsyncHelpers_1 = require("../../helpers/catchAsyncHelpers");
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
// const sendResponse = <T>(
//   res: Response,
//   jsonData: {
//     statusCode: number;
//     success: boolean;
//     message: string;
//     meta?: {
//       page: number;
//       limit: number;
//       total: number;
//     };
//     data: T | T[];
//   }
// ) => {
//   res.status(jsonData.statusCode).json({
//     success: jsonData.success,
//     data: jsonData.data,
//     message: jsonData.data,
//     meta: jsonData.meta || null
//   });
// };
// const catchAsync = (functions: RequestHandler) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(functions(req, res, next)).catch((err) => {
//       next(err);
//     });
//   };
// };
const getAdminController = (0, catchAsyncHelpers_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Admin_services_1.AdminServices.getAllFromDb();
    // res.status(200).json({
    //   success: true,
    //   data: result,
    //   message: "Admin Data Fetched Successfully"
    // });
    (0, successResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Admin data Fetched",
        data: result
    });
}));
const getSingleAdminController = (0, catchAsyncHelpers_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const filters = req.query;
    // console.log("From Get Single", query);
    const filters = (0, pick_1.default)(req.query, admin_constants_1.adminFilterableFields); // console.log("Filters", filters);
    const options = (0, pick_1.default)(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    // console.log("options", options);
    const result = yield Admin_services_1.AdminServices.getSingleFromDb(filters, options);
    console.log(result);
    res.status(200).json({
        success: true,
        meta: result.metaData,
        data: result.data,
        message: "Admin Data Fetched Successfully"
    });
}));
const getByIdFromDb = (0, catchAsyncHelpers_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const filters = req.query;
    // console.log("From Get Single", query);
    const filters = (0, pick_1.default)(req.query, admin_constants_1.adminFilterableFields); // console.log("Filters", filters);
    const options = (0, pick_1.default)(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    // console.log("options", options);
    const result = yield Admin_services_1.AdminServices.getSingleFromDb(filters, options);
    console.log(result);
    try {
        res.status(200).json({
            success: true,
            meta: result.metaData,
            data: result.data,
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
}));
const updateDataInDb = (0, catchAsyncHelpers_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const filters = req.query;
    // console.log("From Get Single", query);
    const filters = (0, pick_1.default)(req.query, admin_constants_1.adminFilterableFields); // console.log("Filters", filters);
    const options = (0, pick_1.default)(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    // console.log("options", options);
    const result = yield Admin_services_1.AdminServices.getSingleFromDb(filters, options);
    console.log(result);
    try {
        res.status(200).json({
            success: true,
            meta: result.metaData,
            data: result.data,
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
}));
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params.id;
    try {
        const result = yield Admin_services_1.AdminServices.deleteDataFomDb(params);
        res.status(200).json({
            success: true,
            data: result,
            message: "Admin  Data DELETED BY Id Successfully"
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            data: error,
            message: "Some Error in dELETEcontroller Found"
        });
    }
});
const softdeleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params.id;
    try {
        const result = yield Admin_services_1.AdminServices.softDeleteDataFomDb(params);
        res.status(200).json({
            success: true,
            data: result,
            message: "Admin  Data DELETED BY Id Successfully"
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            data: error,
            message: "Some Error in dELETEcontroller Found"
        });
    }
});
exports.AdminController = {
    getAdminController,
    softdeleteData,
    getSingleAdminController,
    getByIdFromDb,
    updateDataInDb,
    deleteData
};
