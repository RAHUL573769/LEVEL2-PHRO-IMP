/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTour = async (tourData: any): Promise<ITour> => {
  const result = await Tour.create(tourData)

  return result
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllTours = async (query: any): Promise<ITour[]> => {
  // console.log(query)
  const queryObj = { ...query }
  console.log('Before Query Obj', queryObj)
  const excludedFields = ['page', 'searchTerm', 'limit', 'sortBy', 'sortOrder']
  excludedFields.forEach((keyword) => delete queryObj[keyword])
  console.log('After Query Obj', queryObj)

  const result = await Tour.find(queryObj)
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
