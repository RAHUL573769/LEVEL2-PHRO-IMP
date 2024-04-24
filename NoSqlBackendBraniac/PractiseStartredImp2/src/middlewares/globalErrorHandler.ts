import { NextFunction, Request, Response } from "express";

const globalHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = "Something Not Right";
  const statusCode = 500;
  return res.status(statusCode).json({
    message: message,
    success: false,
    error: err
  });
};

export default globalHandler;
