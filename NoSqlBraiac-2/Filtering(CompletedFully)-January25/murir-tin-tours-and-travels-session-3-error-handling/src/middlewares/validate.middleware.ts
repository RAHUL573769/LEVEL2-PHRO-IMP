import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validateSchema = (schema: ZodSchema) => {
  //validate request is a higher-order function
  return async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = await schema.safeParseAsync(req.body)
    if (!validatedData) {
      next(validatedData) //error data
    } else {
      req.body = validatedData
      next()
    }
  }
}
