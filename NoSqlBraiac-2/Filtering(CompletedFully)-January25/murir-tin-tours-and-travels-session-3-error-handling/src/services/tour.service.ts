/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Query } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
import { TQueryObj } from '../types/queryType'
import { filter } from '../Filtering/filter'
import { search } from '../Filtering/searchHelpers'
import { sort } from '../Filtering/sortHelper'
import { pagination } from '../Filtering/pagination'
import { select } from '../Filtering/fieldSelectHelper'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const getAllTour = async (query: TQueryObj): Promise<ITour[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryObj = { ...query }
  // const excludedObj = [
  //   'page',
  //   'fields',
  //   'searchTerm',
  //   'limit',
  //   'sortBy',
  //   'sortOrder',
  // ]

  // const result = await Tour.find()
  //exact match down here

  const filteredQuery = filter(Tour.find(), query)
  const searchedQuery = search(filteredQuery, query)

  // if (query.sortBy && query.sortOrder) {
  //   const sortBy = query.sortBy //price
  //   const sortOrder = query.sortOrder
  //   const sortStr = `${sortOrder === 'desc' ? '-' : '+'}${sortBy}`
  //   searchedQuery.sort(sortStr)
  // }

  const sortedQuery = sort(searchedQuery, query)
  const paginatedQuery = pagination(sortedQuery, query)

  const selectedFieldQuey = select(paginatedQuery, query)
  //2.partial match mane searching
  // if (query.page || query.limit) {
  //   const page = Number(query.page)
  //   const limit = Number(query.limit)
  //   const skip = (page - 1) * limit
  //   sortedQuery.skip(skip).limit(100)
  // } else {
  //   sortedQuery.skip(0).limit(10)
  // }
  // if (query.searchTerm) {
  //   console.log(modelQuery.model.schema.path('name'))
  //   console.log(typeof modelQuery.model.schema.path)

  //   const fieldValues = Object.values(modelQuery.model.schema.paths)

  //   const searchableFields = fieldValues
  //     .filter((fieldObj) => {
  //       // console.log(modelQuery.model.schema.path('name'))
  //       if (fieldObj.instance === 'String') {
  //         // return {
  //         //   ({ name: { $regex: query.searchTerm, $options: 'i' } })
  //         //   [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //         // }

  //         return true
  //       }
  //     })
  //     .map((fieldObj) => ({
  //       [fieldObj.path]: { $regex: query.searchTerm, $options: 'i' },
  //     }))

  //   console.log('Searchable Fiels', searchableFields)
  //   modelQuery.find({ name: { $regex: query.searchTerm, $options: 'i' } })
  //   modelQuery.find({
  //     $or: [
  //       { name: { $regex: query.searchTerm, $options: 'i' } },
  //       { startLocation: { $regex: query.searchTerm, $options: 'i' } },
  //     ],

  //     $or: searchableFields,
  //   })
  // }

  // const result = await modelQuery.exec()
  // const result = await searchedQuery
  // if (query.fields) {
  //   const fields = query.fields.split(',').join(' ')
  //   paginatedQuery.select(fields)
  // }

  const result = await paginatedQuery
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
