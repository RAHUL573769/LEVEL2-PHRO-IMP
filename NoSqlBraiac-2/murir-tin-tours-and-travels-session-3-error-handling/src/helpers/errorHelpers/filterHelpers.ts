import { Query } from 'mongoose'
import { TQueryObj } from '../../types/TQuery'

export const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
  //
  const excludeFields = [
    'page',
    'searchTerm',
    'limit',
    'sortBy',
    'sortOrder',
    'fields',
  ]

  excludeFields.forEach((keyword) => delete queryObj[keyword])
  const query = modelQuery.find(queryObj)
  return query
}
