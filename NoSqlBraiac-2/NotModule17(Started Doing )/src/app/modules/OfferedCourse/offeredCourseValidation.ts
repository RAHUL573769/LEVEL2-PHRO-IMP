import { z } from 'zod';

// Define a Zod schema for OfferedCouseDays
const OfferedCouseDays = z.enum([
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]);

// Define a Zod schema for your Mongoose model
export const OfferedCourseSchema = z.object({
  semesterRegistration: z.string(), // Assuming ObjectId is represented as a string
  academicSemester: z.string(),
  academicFaculy: z.string(),
  academicDepartMent: z.string(),
  course: z.string(),
  faculty: z.string(),
  maxCapacity: z.number().default(10),
  section: z.number(),
  days: OfferedCouseDays,
  startTime: z.string(),
  endTime: z.string(),
});
