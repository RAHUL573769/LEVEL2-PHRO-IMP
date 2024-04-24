import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validateSchema = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body)
    if (!result.success) {
      next(result.error)
    } else {
      req.body = result.data
      console.log('22', req.body)
      next()
    }
  }
}
