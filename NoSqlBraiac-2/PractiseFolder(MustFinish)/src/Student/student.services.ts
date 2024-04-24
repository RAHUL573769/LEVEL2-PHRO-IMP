import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudent = async (studentData: IStudent): Promise<IStudent> => {
  const result = await Student.create(studentData);

  return result;
};

const getAllStudents = async (): Promise<IStudent[]> => {
  const result = await Student.find();

  return result;
};

const getSpecificStudent = async (id: string) => {
  // const numberId = Number(id);
  // const result = await Student.aggregate([{ $match: { _id: id } }]);

  const result = await Student.findById(id);
  console.log("19", result);
  return result;
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getSpecificStudent
};
