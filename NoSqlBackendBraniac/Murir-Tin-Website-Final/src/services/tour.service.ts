import { ITour } from "../interface/tour.interface";
import { Tour } from "../models/tour.model";

const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData);
  console.log(result);
  return result;
};
const getAllTour = async (): Promise<ITour[]> => {
  const result = await Tour.find();
  return result;
};
const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id).populate("reviews");
  return result;
};
const updateTour = async (
  id: string,
  userData: ITour
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true
  });
  return result;
};

const getNextSchedule = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id);
  const nextSchedule = tour?.getNextStartAndEndDate;
};

// const deleteUser = async (id: string): Promise<IUser | null> => {
//     const result = await User.findByIdAndDelete(id)
//     return result
//   }

export const TourServices = {
  createTour,
  updateTour,
  getAllTour,
  getSingleTour
  //   deleteUser
};
