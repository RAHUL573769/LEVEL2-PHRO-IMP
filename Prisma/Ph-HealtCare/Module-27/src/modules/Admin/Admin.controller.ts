import { NextFunction, Request, Response } from "express";
import { AdminServices } from "./Admin.services";
import { adminFilterableFields } from "./admin.constants";
import pick from "../../shared/pick";
import { sendResponse } from "../../helpers/successResponse";

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

const getAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const getSingleAdminController = async (req: Request, res: Response) => {
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
};

const getByIdFromDb = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AdminServices.getById(id);
  try {
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin  Data Fetched BY Id Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error in get by id controller Found"
    });
  }
};

const updateDataInDb = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AdminServices.updateDataInDb(id, req.body);
  try {
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin  Data Updated BY Id Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error in get by Update Id controller Found"
    });
  }
};

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
