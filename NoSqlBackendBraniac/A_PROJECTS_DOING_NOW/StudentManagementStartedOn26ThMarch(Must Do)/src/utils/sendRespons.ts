import { Request, Response } from "express";

type TResponse<T> = {
  statusCode: number;
  status: "Success";
  message: string;
  data: T | T[] | null;
};
export const successResponse1 = <T>(
  res: Response,

  data: TResponse<T>
) => {
  res.status(data.statusCode).json({
    message: data.message,
    status: data.data,
    data: data.data
  });
};
