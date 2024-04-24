import { Model } from "mongoose";

export interface ICat {
  id: number;
  name: string;
  age: number;
  color?: string;
  secret?: string;
}
//interface

export interface ICatStaticMethods extends Model<ICat> {
  isCatExists(id: string): Promise<ICat | null | boolean>;
}

export interface ICatStaticMethodNew extends Model<ICat> {
  isCatId(id: string): Promise<ICat | null | boolean>;
}

// export type CatModel = Model<ICat, ICatStaticMethods>;
