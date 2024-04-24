// import { Schema, model } from 'mongoose';

// import {
//   AcademicSemester,
//   SemesterCode,
//   SemesterName,
//   TMonth,
// } from './academic.interface';

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // type Month =
// //   | 'January'
// //   | 'February'
// //   | 'March'
// //   | 'April'
// //   | 'May'
// //   | 'June'
// //   | 'July'
// //   | 'August'
// //   | 'September'
// //   | 'October'
// //   | 'November'
// //   | 'December';

// const months: TMonth[] = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const AcademicSemesterName: SemesterName[] = ['Autumn', 'Summer', 'Fall'];
// const AcademicSemesterCode: SemesterCode[] = ['01', '02', '03'];

// const academicSchema = new Schema<AcademicSemester>(
//   {
//     name: {
//       type: String,
//       required: true,
//       enum: AcademicSemesterName,
//     },
//     year: {
//       type: Date,
//       required: true,
//     },
//     code: {
//       type: String,
//       required: true,
//       enum: AcademicSemesterCode,
//     },
//     startMonth: {
//       type: String,
//       enum: months,
//     },
//     endMonth: {
//       type: String,
//       enum: months,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// export const academicSemesterModel = model<AcademicSemester>(
//   'AcademicSemester',
//   academicSchema,
// );
