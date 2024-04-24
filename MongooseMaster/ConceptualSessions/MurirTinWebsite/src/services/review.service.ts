import { IReview } from "../interface/review.interface";
import { Review } from "../models/review.model";

const createReview = async (data: IReview): Promise<IReview> => {
  const result = await Review.create(data);
  return result;
};
const getAllReview = async (): Promise<IReview[]> => {
  const result = await Review.find();
  return result;
};

const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id);
  return result;
};

const updateReview = async (
  id: string,
  data: IReview
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
  return result;
};
const deleteReview = () => {};
export const ReviewServices = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview
};
