import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validateSchema = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validatedData = schema.parseAsync(req.body)
    if (!validatedData) {
      next(validatedData)
    } else {
      req.body = validatedData
      next()
    }
  }
}
