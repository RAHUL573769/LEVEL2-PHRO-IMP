import { Response } from 'express'

type TSuccessResponse<T> = {
  statusCode: number
  message: string
  data: T | T[] | null
}

type TSuccess<T> = {
  statusCode: number
  message: string
  status: string
  data: T | T[] | null
}

export const newSuccessResponse = <T>(res: Response, data: TSuccess<T>) => {
  res.status(data.statusCode).json({
    message: data.message,
    status:data.status,
    data:data.data
  })
}
//jei data ashbe shei datar type
const sendSuccessResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).json({
    status: 'success',
    message: data.message,
    data: data.data,
  })
}

export default sendSuccessResponse
