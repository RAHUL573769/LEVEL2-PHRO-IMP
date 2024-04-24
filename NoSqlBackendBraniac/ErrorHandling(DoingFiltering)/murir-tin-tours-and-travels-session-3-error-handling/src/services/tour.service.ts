/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
import { filter } from '../helpers/Filtering/filter'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}

export type TQueryObj = {
  [key: string]: unknown
  page?: string
  limit?: string
  searchTerm?: string
  fields?: string
  sortBy?: string
  sortOrder?: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludeFields = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sort',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludeFields.forEach((keyword) => delete queryObj[keyword])

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   modelQuery = modelQuery.find(queryObj)

//   return modelQuery
//   // console.log('Query Obj After', queryObj)
// }

const getAllTours = async (query: TQueryObj): Promise<ITour[]> => {
  // const queryObj = { ...query }

  // console.log('Query Obj Before', queryObj)
  // const excludeFields = [
  //   'page',
  //   'searchTerm',
  //   'limit',
  //   'sort',
  //   'sortBy',
  //   'sortOrder',
  //   'fields',
  // ]
  // excludeFields.forEach((keyword) => delete queryObj[keyword])
  // console.log('Query Obj After', queryObj)

  // const result = await Tour.find(query)
  // const result = await Tour.find(queryObj)
  // const result = await filter(Tour.find(), query)
  const modelQuery = filter(Tour.find(), query)
  // console.log(modelQuery)
  // console.log('Query', query)
  if (query.searchTerm) {
    // console.log(modelQuery.model.schema.paths)

    const fieldValues = Object.values(modelQuery.model.schema.paths)
    // console.log(fieldValues)
    // console.log(query.searchTerm)

    const searchableFields = fieldValues
      .filter((fieldObject) => {
        if (
          modelQuery.model.schema.path(fieldObject.path).instance === 'String'
        ) {
          return true
          // [fieldObject.path]: { $regex: query.searchTerm, $options: 'i' },
        }
      })
      .map((fieldObj) => ({
        // [fieldObject.path]: { $regex: query.searchTerm, $options: 'i' },
        [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
      }))
    // modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
    modelQuery.find({
      $or: searchableFields,
    })
  }
  const result = await modelQuery

  return result
}

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate('reviews')
  return result
}

const updateTour = async (
  id: string,
  tourData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, tourData, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate()

  return {
    tour,
    nextSchedule,
  }
}

export const tourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
