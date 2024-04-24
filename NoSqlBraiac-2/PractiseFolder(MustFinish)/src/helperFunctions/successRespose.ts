import { Response } from "express";

type TSuccessResponse<T> = {
  message: string;
  statusCode: number;

  data: T | T[] | null;
};
export const successResponse = <T>(
  res: Response,
  data: TSuccessResponse<T>
) => {
  res.status(data.statusCode).json({
    message: data.message,
    // status: "Success",
    data: data.data
  });
};
