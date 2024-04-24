import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (functions: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(functions(req, res, next)).catch((err) => {
      next(err);
    });
  };
};
