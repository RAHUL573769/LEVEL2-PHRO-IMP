/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { Query } from 'mongoose'
import { filter } from '../Filtering/filter'
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'
// import { TQueryObj } from '../types/queryType'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// type TQueryObj = {
//   [key: string]: unknown
//   page?: string
//   limit?: string
//   searchTerm?: string
//   fields?: string
//   sortBy?: string
//   sortOrder?: string
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const filter = <T>(model: Query<T[], T>, queryObj: TQueryObj) => {
//   console.log('Before Excluding', queryObj)
//   const excludeField = [
//     'page',
//     'searchTerm',
//     'limit',
//     'sortBy',
//     'sortOrder',
//     'fields',
//   ]

//   excludeField.forEach((keyword) => delete queryObj[keyword])

//   console.log('After Excluding', queryObj)
//   const query = model.find(queryObj)
//   return query
// }
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

const getAllTour = async (query: any): Promise<ITour[]> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const queryObj = { ...query }
  //reserved keywords for filtering
  // const excludeField = [
  //   'page',
  //   'searchTerm',
  //   'limit',
  //   'sortBy',
  //   'sortOrder',
  //   'fields',
  // ]

  // excludeField.forEach((keyword) => delete queryObj[keyword])
  const result = await filter(Tour.find({ price: { $gt: 20 } }), query)
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
