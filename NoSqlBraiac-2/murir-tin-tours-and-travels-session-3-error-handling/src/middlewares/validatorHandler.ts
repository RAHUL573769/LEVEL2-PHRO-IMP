import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'

export const validator = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParse(req.body)
    if (!result.success) {
      next(result.error)
    } else {
      req.body = result.data
      next()
    }
  }
}

export const ValidatorHandler = { validator }
