import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  let message = "Error From Global Error Handler";

  let statusCode = httpStatus.NOT_FOUND;
  res.status(statusCode).json({
    message: message
  });
  next();
};
