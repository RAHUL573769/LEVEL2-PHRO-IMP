import { ObjectId } from "mongoose";
import { ICat } from "../interface/cat.interface";
import { Cat } from "../model/cat.model";

const createCat = async (catData: ICat) => {
  const result = await Cat.create(catData);

  return result;
};
const findCat = async () => {
  const result = await Cat.find();
  return result;
};

const findSingleCat = async (id: string) => {
  // console.log(Cat.isCatExists("2"));
  const result = await Cat.findById(id);
  return result;
};
export const CatServices = { createCat, findCat, findSingleCat };
