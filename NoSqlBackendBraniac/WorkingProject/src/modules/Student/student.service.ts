import catchAsync from "../../utils/catchAsync";
import { studentInterface } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudent = async (payLoad: studentInterface) => {
  const result = await StudentModel.create(payLoad);
  return result;
};
const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find()
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty"
      }
    });

  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteDataFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  deleteDataFromDb,
  createStudent
};
