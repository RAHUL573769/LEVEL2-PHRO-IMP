import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academic.department.interface";
import { AppError } from "../../classes/AppError";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty"
    }
  },
  {
    timestamps: true
  }
);

// class AppError extends Error {
//   public statusCode: number;
//   constructor(statusCode: number, message: string, stack = "") {
//     super(message);
//     this.statusCode = statusCode;
//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

academicDepartmentSchema.pre("save", async function (next) {
  const isAcademicDepartmentExists = await AcademicDepartment.findOne({
    name: this.name
  });

  if (isAcademicDepartmentExists) {
    throw new Error("Academic Department Exists");
  }
  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  //query middleware
  //query middleware
  const query = this.getQuery();
  const isDepartmentExists = await AcademicDepartment.findOne(query);

  if (!isDepartmentExists) {
    throw new AppError("This Department Does Not Exists", 404);
  }
  next();

  //   console.log(query);
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
