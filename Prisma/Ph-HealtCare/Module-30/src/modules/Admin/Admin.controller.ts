import { NextFunction, Request, RequestHandler, Response } from "express";
import { AdminServices } from "./Admin.services";
import { adminFilterableFields } from "./admin.constants";
import pick from "../../helpers/pick";
import { sendResponse } from "../../helpers/successResponse";
import { catchAsync } from "../../helpers/catchAsyncHelpers";

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
const getAdminController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AdminServices.getAllFromDb();
    // res.status(200).json({
    //   success: true,
    //   data: result,
    //   message: "Admin Data Fetched Successfully"
    // });

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Admin data Fetched",
      data: result
    });
  }
);

const getSingleAdminController = catchAsync(
  async (req: Request, res: Response) => {
    // const filters = req.query;
    // console.log("From Get Single", query);

    const filters = pick(req.query, adminFilterableFields); // console.log("Filters", filters);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    // console.log("options", options);
    const result = await AdminServices.getSingleFromDb(filters, options);
    console.log(result);

    res.status(200).json({
      success: true,
      meta: result.metaData,
      data: result.data,
      message: "Admin Data Fetched Successfully"
    });
  }
);

const getByIdFromDb = catchAsync(async (req: Request, res: Response) => {
  // const filters = req.query;
  // console.log("From Get Single", query);

  const filters = pick(req.query, adminFilterableFields); // console.log("Filters", filters);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  // console.log("options", options);
  const result = await AdminServices.getSingleFromDb(filters, options);
  console.log(result);
  try {
    res.status(200).json({
      success: true,
      meta: result.metaData,
      data: result.data,
      message: "Admin Data Fetched Successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
      message: "Some Error Found"
    });
  }
});

const updateDataInDb = catchAsync(async (req: Request, res: Response) => {
  // const filters = req.query;
  // console.log("From Get Single", query);

  const filters = pick(req.query, adminFilterableFields); // console.log("Filters", filters);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  // console.log("options", options);
  const result = await AdminServices.getSingleFromDb(filters, options);
  console.log(result);
  try {
    res.status(200).json({
      success: true,
      meta: result.metaData,
      data: result.data,
      message: "Admin Data Fetched Successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
      message: "Some Error Found"
    });
  }
});

const deleteData = async (req: Request, res: Response) => {
  const params = req.params.id;
  try {
    const result = await AdminServices.deleteDataFomDb(params);
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin  Data DELETED BY Id Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error in dELETEcontroller Found"
    });
  }
};
const softdeleteData = async (req: Request, res: Response) => {
  const params = req.params.id;
  try {
    const result = await AdminServices.softDeleteDataFomDb(params);
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin  Data DELETED BY Id Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error in dELETEcontroller Found"
    });
  }
};
export const AdminController = {
  getAdminController,
  softdeleteData,
  getSingleAdminController,
  getByIdFromDb,
  updateDataInDb,
  deleteData
};
