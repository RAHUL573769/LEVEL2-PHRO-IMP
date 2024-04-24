/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
import { TQueryObj } from '../types/queryType'
import { filter } from '../helpers/errorHelpers/filterHelpers'
import { Query } from 'mongoose'
import { search } from '../helpers/errorHelpers/searchHelpers'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}
// type TQueryObj = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   searchTerm?: string
//   fields?: string
//   sortBy?: string
// }

//Query T[]=ITour[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = [
//     'page',
//     'searchTearm',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]
//   excludedFields.forEach((keyword) => delete queryObj[keyword])

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   let query = model.find(queryObj)
//   return query
// }

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate('reviews')

  // console.log(Tour.findById(id))
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

// type TQuery = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   fields?: string
//   sortBy?: string
//   sortOrder?: string
// }
// const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
//   const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
//   // console.log('Before Excluding', queryObj)
//   excludedFields.forEach((keyword) => {
//     delete queryObj[keyword]
//   })

//   const modelquery = modelQuery.find(queryObj)
//   return modelquery

//   // console.log('After Excluding', queryObj)
// }
const getAllTour = async (query: TQueryObj): Promise<ITour[]> => {
  // console.log(payload)

  const queryObj = { ...query }
  // const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
  // console.log('Before Excluding', queryObj)
  // excludedFields.forEach((keyword) => {
  //   delete queryObj[keyword]
  // })

  // console.log('After Excluding', queryObj)
  // console.log(queryObj)
  //reserved words

  // const result = await Tour.find(queryObj)
  // const result = await filter(Tour.find(), query)
  // from video 5---
  // for partial searching

  // let modelQuery:Query<>;
  const filteredQuery = filter(Tour.find(), query) //await korbo na ..karon search term rakte
  // console.log(query.searchTerm)
  // console.log(query.searchTerm)
  // if (query.searchTerm) {
  //   console.log('Model Query Single', modelQuery.model.schema.path('name'))
  //   console.log(
  //     '----------Model Query Mingle-----',
  //     modelQuery.model.schema.paths,//array
  //   )
  //   const fieldValues = Object.values(modelQuery.model.schema.paths)

  //   const searchableFields = fieldValues
  //     .filter((fieldObj) => {
  //       console.log(fieldObj);
  //       Here fieldobj=modelQuery.model.schema.path(fieldObj.path)
  //       if (fieldObj.instance === 'String') {
  //         return true //
  //         modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
  //         name:"Historic"
  //          return [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //         Output of above name":"Historic"
  //       }
  //     })
  //     .map((fieldObj) => ({
  //       [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //     }))

  //   start from 35 minute
  //   console.log('Searchable Fields', searchableFields)
  //     modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' }
  //   })

  //   modelQuery.find({
  //     $or: [
  //       {
  //         name: { $regex: query.searchTerm, $options: 'i' },
  //       },

  //       {
  //         startLocation: { $regex: query.searchTerm, $options: 'i' },
  //       },
  //     ],

  //     $or: searchableFields,
  //   })
  // }

  const searchQuery = search(filteredQuery, query)

  if (query.sortBy && query.sortOrder) {
    const sortBy = query.sortBy
    const sortOrder = query.sortOrder
    const sortStr = `${sortOrder === 'desc' ? '-' : ''} ${sortBy}`
    searchQuery.sort(sortStr)
    // const sortObj = {}
    // Tour.find().sort('-name')

    // Tour.find().sort('-name')
  }
  const result = await searchQuery
  return result
}

export const tourServices = {
  createTour,

  getSingleTour,
  updateTour,
  deleteTour,
  getAllTour,
  getNextSchedule,
}
