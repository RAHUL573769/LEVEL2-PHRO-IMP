import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = "Something Not Right";
  const statusCode = 500;
  return res.status(httpStatus.NOT_FOUND).json({
    message: message,
    success: false,
    error: err
  });
};

export default notFound;
