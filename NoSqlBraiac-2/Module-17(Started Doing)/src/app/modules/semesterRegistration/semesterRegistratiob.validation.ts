import { z } from 'zod';
// import { academicStatus } from './semesterRegistration.interface';
import { SEMESTER_REGISTRATION_STATUS } from './semesterRegistration.constants';

const createSemesterRegistrationValidation = z.object({
  academicSemester: z.string(),
  status: z.enum([...(SEMESTER_REGISTRATION_STATUS as [string, ...string[]])]),
  startDate: z.string().datetime(),
  endDate: z.string().refine(
    (time) => {
      const regex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
      return regex.test(time);
    },
    { message: 'Invalid Time' },
  ),
  maxCredit: z.number(),
  minCredit: z.number(),
});

export const SemesterRegistrationValidation = {
  createSemesterRegistrationValidation,
};
