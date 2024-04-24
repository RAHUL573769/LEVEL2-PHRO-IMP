import { Request, Response } from "express";
import { AdminServices } from "./Admin.services";
import { adminFilterableFields } from "./admin.constants";
import pick from "../../shared/pick";

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

const getAdminController = async (req: Request, res: Response) => {
  const result = await AdminServices.getAllFromDb();
  try {
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin Data Fetched Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error Found"
    });
  }
};

const getSingleAdminController = async (req: Request, res: Response) => {
  // const filters = req.query;
  // console.log("From Get Single", query);

  const filters = pick(req.query, adminFilterableFields); // console.log("Filters", filters);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  console.log("options", options);
  const result = await AdminServices.getSingleFromDb(filters, options);
  console.log(result);
  try {
    res.status(200).json({
      success: true,
      data: result,
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
export const AdminController = { getAdminController, getSingleAdminController };
