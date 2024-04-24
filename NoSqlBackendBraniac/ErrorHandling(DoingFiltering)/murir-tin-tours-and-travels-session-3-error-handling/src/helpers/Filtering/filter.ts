import { Query } from 'mongoose'
import { TQueryObj } from '../../services/tour.service'

export const filter = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  const queryObj = { ...query }
  const excludeFields = [
    'page',
    'searchTerm',
    'limit',
    'sort',
    'sortBy',
    'sortOrder',
    'fields',
  ]
  excludeFields.forEach((keyword) => delete queryObj[keyword])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  modelQuery = modelQuery.find(queryObj)

  return modelQuery
  // console.log('Query Obj After', queryObj)
}
