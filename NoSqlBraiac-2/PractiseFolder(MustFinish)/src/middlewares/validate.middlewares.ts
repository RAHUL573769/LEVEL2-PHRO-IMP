import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateUser = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.parse(req.body);
    // console.log("11", result);
    if (!result.success) {
      next(result.error);
    } else {
      req.body = result.data;
      console.log("From Validate User", req);
    }
  };
};
