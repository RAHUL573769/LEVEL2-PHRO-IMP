import { Query } from 'mongoose'
import { TQueryObj } from '../../types/queryType'

export const filter = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  const queryObj = { ...query }
  //exact match
  const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
  // console.log('Before Excluding', queryObj)
  excludedFields.forEach((keyword) => {
    delete queryObj[keyword]
  })

  modelQuery = modelQuery.find(queryObj)

  return modelQuery

  // console.log('After Excluding', queryObj)
}
