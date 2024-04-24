import { Response } from "express";

type jsonData = {};
export const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data: T | T[];
  }
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    data: jsonData.data,
    message: jsonData.data,

    meta: jsonData.meta || null
  });
};
