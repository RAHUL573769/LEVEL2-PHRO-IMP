import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const filter = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  // eslint-disable-next-line no-unused-expressions
  const queryObj = { ...query }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const excludedObj = [
    'page',
    'fields',
    'searchTerm',
    'limit',
    'sortBy',
    'sortOrder',
  ]
  excludedObj.forEach((keyword) => delete queryObj[keyword])

  modelQuery = modelQuery.find(queryObj)
  return modelQuery
}
