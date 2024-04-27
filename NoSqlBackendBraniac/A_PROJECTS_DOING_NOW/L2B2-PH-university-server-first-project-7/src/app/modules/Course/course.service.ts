/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { CourseSearchableFields } from './course.constant';
import { TCourse, TCoursefaculty } from './course.interface';
import { Course, CourseFaculty } from './course.model';

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
// const createCourseIntoDB=async(payload:TCourse)=>{
//   const result=await Course.create(   )
//   return result
// }
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    'preRequisiteCourses.course',
  );
  return result;
};

// const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
//   const { preRequisiteCourses, ...courseRemainingData } = payload;

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //step1: basic course info update
//     const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
//       id,
//       courseRemainingData,
//       {
//         new: true,
//         runValidators: true,
//         session,
//       },
//     );

//     if (!updatedBasicCourseInfo) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!');
//     }

//     // check if there is any pre requisite courses to update
//     if (preRequisiteCourses && preRequisiteCourses.length > 0) {
//       // filter out the deleted fields
//       const deletedPreRequisites = preRequisiteCourses
//         .filter((el) => el.course && el.isDeleted)
//         .map((el) => el.course);

//       const deletedPreRequisiteCourses = await Course.findByIdAndUpdate(
//         id,
//         {
//           $pull: {
//             preRequisiteCourses: { course: { $in: deletedPreRequisites } },
//           },
//         },
//         {
//           new: true,
//           runValidators: true,
//           session,
//         },
//       );

//       if (!deletedPreRequisiteCourses) {
//         throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!');
//       }

//       // filter out the new course fields
//       const newPreRequisites = preRequisiteCourses?.filter(
//         (el) => el.course && !el.isDeleted,
//       );

//       const newPreRequisiteCourses = await Course.findByIdAndUpdate(
//         id,
//         {
//           $addToSet: { preRequisiteCourses: { $each: newPreRequisites } },
//         },
//         {
//           new: true,
//           runValidators: true,
//           session,
//         },
//       );

//       if (!newPreRequisiteCourses) {
//         throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!');
//       }
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     const result = await Course.findById(id).populate(
//       'preRequisiteCourses.course',
//     );

//     return result;
//   } catch (err) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course');
//   }
// };
// eslint-disable-next-line no-unused-vars
const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
  // console.log(payload)

  const { preRequisiteCourses, ...courseRemainingData } = payload;
  const updatedBasiCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemainingData,
    { new: true, runValidators: true },
  );

  //check if there any pre requisite curses
  console.log(preRequisiteCourses);
  if (preRequisiteCourses && preRequisiteCourses.length > 0) {
    const deletedPreRequisite = preRequisiteCourses
      .filter((el) => el.course && el.isDeleted)
      .map((el) => el.course);
    // console.log(deletedPreRequisite);
    const deletedPreRequisiteCourses = await Course.findByIdAndUpdate(id, {
      $pull: { preRequisiteCourses: { course: { $in: deletedPreRequisite } } },
    });

    const newPreRequisites = preRequisiteCourses.filter(
      (el) => el.course && !el.isDeleted,
    );

    const newPreRequisiteCourses = await Course.findByIdAndUpdate({
      id,
    });

    // console.log(newPreRequisiteCourses)

    // console.log(deletedPreRequisiteCourses)
  }

  return updatedBasiCourseInfo;
};
const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

const assignFacultiesWithCourseIntoDB = async (
  id: string,
  payload: Partial<TCoursefaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: payload } },
    },
    {
      upsert: true,
      new: true,
    },
  );
  return result;
};

const removeFacultiesFromCourseFromDB = async (
  id: string,
  payload: Partial<TCoursefaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payload } },
    },
    {
      new: true,
    },
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
  assignFacultiesWithCourseIntoDB,
  removeFacultiesFromCourseFromDB,
};
