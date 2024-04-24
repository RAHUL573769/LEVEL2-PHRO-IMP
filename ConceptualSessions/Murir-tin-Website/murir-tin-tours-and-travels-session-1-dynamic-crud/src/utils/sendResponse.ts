// export type TSuccessResponse<T> = {
//   statusCode: number
//   message: 'Success' | 'failed' | 'error'
//   data?: T | T[] | null //data cannot be any
// }

// export const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
//   res.status(201).json({
//     status: data.statusCode,
//     message: data.message,
//     data: data.data,
//   })
// }
