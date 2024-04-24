import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validateUser = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validateData = await schema.parseAsync(req.body)

    if (!validateData) {
      next(validateData)
    }
    req.body = validateData
    next()
  }
}
