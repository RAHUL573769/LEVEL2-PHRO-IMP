import { ICat } from "./Cat.interface";
import { Cat } from "./Cat.model";

const addCat = async (catData: ICat) => {
  try {
    console.log("Try Block Hit");
    const result = await Cat.create(catData);

    console.log(result);
    return result;

    // const cat = new Cat(catData);
    // const id = await cat.generateId();

    // console.log(id);
  } catch (error) {
    console.log(error);
    // console.log("Catch Block Hit");
  }
};

const getCat = async () => {
  try {
    // console.log("Try Block Hit");
    const result = await Cat.find();

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    // console.log("Catch Block Hit");
  }
};
export const catServices = {
  addCat,
  getCat
};
