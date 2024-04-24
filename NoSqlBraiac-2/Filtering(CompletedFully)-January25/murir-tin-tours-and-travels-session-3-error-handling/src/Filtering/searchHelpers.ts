/* eslint-disable no-unused-vars */
import { FilterQuery, Query } from 'mongoose'
import { TQueryObj } from '../types/queryType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const search = <T>(modelQuery: Query<T[], T>, query: TQueryObj) => {
  if (query.searchTerm) {
    // console.log(modelQuery.model.schema.path('name'))
    // console.log(typeof modelQuery.model.schema.path)

    const fieldValues = Object.values(modelQuery.model.schema.paths)

    const searchableFields = fieldValues
      .filter((fieldObj) => {
        // console.log(modelQuery.model.schema.path('name'))
        if (fieldObj.instance === 'String') {
          // return {
          //   ({ name: { $regex: query.searchTerm, $options: 'i' } })
          //   [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
          // }

          return true
        }
      })
      .map(
        (fieldObj) =>
          ({
            [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
          }) as FilterQuery<T>,
      )

    // console.log('Searchable Fiels', searchableFields)
    // modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
    modelQuery.find({
      $or: searchableFields,
    })
  }

  return modelQuery
}
