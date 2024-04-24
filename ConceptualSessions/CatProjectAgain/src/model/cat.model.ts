import { Schema, model } from "mongoose";
import { ICat, ICatStaticMethods } from "../interface/cat.interface";

const catSchema = new Schema<ICat, ICatStaticMethods>({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  color: {
    type: String
  },
  secret: {
    type: String
  }
});

//instance method

catSchema.statics.isCatExists = async function (id: string) {
  const existingCat = await Cat.findOne({ id });
  console.log(existingCat);
  return existingCat;
};
export const Cat = model<ICat, ICatStaticMethods>("Cat", catSchema);
