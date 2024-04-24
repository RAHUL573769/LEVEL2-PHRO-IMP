import { z } from 'zod';
import { StudentRegistrationStatus } from './studentRegistrstionConstants';
// import { StudentRegistrationStatus } from './studentRegistration.model';
export const createSemesterRegistrationValidation = z.object({
  body: z.object({
    academicSemester: z.string(),
    status: z.enum([...(StudentRegistrationStatus as [string, ...string[]])]),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    minCredit: z.number(),
    maxCredit: z.number(),
  }),
});
