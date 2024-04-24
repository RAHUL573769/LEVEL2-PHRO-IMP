import { Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

export const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
  console.log('Before Excluding From Filter', queryObj)
  const excludeField = [
    'page',
    'searchTerm',
    'limit',
    'sortBy',
    'sortOrder',
    'fields',
  ]

  excludeField.forEach((keyword) => delete queryObj[keyword])

  console.log('After Excluding From Filter', queryObj)
  const query = model.find(queryObj)
  return query
}
