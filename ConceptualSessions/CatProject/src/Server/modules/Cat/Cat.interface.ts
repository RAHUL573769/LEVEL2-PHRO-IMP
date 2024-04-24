import { Model } from "mongoose";

export type ICat = {
  id: number;
  name: string;
  age: number;
  color?: string;
  secret?: string;
};

// export type ICatMethods = {
//   generateId(): Promise<void>;
// };

// export type CatModel = Model<ICat, {}, ICatMethods>;
export interface ICatModel extends Model<ICat> {
  generateId(): Promise<void>;
}
