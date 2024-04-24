import { IReview } from "../interface/review";
import { Review } from "../models/review.model";

const createReview = async (reviewData: IReview): Promise<IReview> => {
  const result = await Review.create(reviewData);
  console.log(result);
  return result;
};
const getAllReview = async (): Promise<IReview[]> => {
  const result = await Review.find().populate({
    path: "user",
    select: "name photo"
  });
  return result;
};
const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id);
  return result;
};
const updateReview = async (
  id: string,
  reviewData: IReview
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, reviewData, {
    new: true,
    runValidators: true
  });
  return result;
};

// const deleteUser = async (id: string): Promise<IUser | null> => {
//     const result = await User.findByIdAndDelete(id)
//     return result
//   }

export const ReviewServices = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview
  //   deleteUser
};
