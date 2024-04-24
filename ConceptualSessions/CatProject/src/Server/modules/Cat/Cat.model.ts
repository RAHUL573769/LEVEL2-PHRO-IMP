import { Schema, model } from "mongoose";
import { CatModel, ICat, ICatMethods } from "./Cat.interface";

const catSchema = new Schema<ICat, CatModel, ICatMethods  >({
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
    type: String,
    required: false
  }
});

export const Cat = model<ICat, CatModel>("Cat", catSchema);

// catSchema.methods.generateId = async function () {
//   console.log("genertated");
// };
