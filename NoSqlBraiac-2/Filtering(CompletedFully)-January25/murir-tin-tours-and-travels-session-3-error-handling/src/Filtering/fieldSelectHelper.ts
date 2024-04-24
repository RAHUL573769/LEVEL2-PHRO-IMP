/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const select = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  if (query.fields) {
    const fields = query.fields.split(',').join(' ')
    modelQuery.select(fields)
  }
  return modelQuery
}
