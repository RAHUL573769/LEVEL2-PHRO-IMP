import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    success: false,

    message: "Something Went Wrong",
    err: err
  });

  next();
};
