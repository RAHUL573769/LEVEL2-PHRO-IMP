import { Schema } from "mongoose";
import { Student } from "./student.interface";

const studentSchema = new Schema<Student>({
  name: {
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    }
  }
});
