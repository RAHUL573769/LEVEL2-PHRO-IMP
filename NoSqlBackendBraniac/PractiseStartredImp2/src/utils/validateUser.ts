import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateUser = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const zodParsedData = await schema.parseAsync({
        body: req.body
      });
      next();
    } catch (error) {
      console.log(error);
    }
  };
};
