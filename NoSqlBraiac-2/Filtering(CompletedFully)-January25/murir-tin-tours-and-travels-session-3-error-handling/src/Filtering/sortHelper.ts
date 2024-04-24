/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const sort = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  if (query.sortBy && query.sortOrder) {
    const sortBy = query.sortBy //price
    const sortOrder = query.sortOrder
    const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`
    modelQuery.sort(sortStr)
  }
  return modelQuery
}
