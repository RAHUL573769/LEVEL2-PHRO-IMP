import { Student } from "./student.model";

const getStudentsFromDb = async () => {
  const result = await Student.find();

  return result;
};

const getSingleStudentInfo = async (id: String) => {
  const result = await Student.findById(id);

  return result;
};
const updateStudentsInfoInDb = async (id: String, payload: String) => {
  const result = await Student.findByIdAndUpdate(
    { _id: id, payload },
    { new: true }
  );
  return result;
};
export const StudentServices = {
  getSingleStudentInfo,
  getStudentsFromDb,
  updateStudentsInfoInDb
};
