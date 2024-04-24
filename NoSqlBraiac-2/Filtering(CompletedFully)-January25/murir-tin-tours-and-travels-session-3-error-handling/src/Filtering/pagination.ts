// 1st page---->10 tours  (01-10)
//2nd page-->10 pages (11-20)

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const pagination = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  if (query.page || query.limit) {
    const page = Number(query.page)
    const limit = Number(query.limit)
    const skip = (page - 1) * limit
    modelQuery.skip(skip).limit(100)
  } else {
    modelQuery.skip(0).limit(10)
  }
  return modelQuery
}
