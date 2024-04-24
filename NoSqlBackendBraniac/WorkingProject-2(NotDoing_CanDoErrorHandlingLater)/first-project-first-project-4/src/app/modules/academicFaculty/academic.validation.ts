import { z } from 'zod';
const academcFacultyValidation = z.object({
  name: z.string({
    invalid_type_error: 'Acadmic Faculty Must be String',
  }),
});

const updateacademcFacultyValidation = z.object({
  name: z.string({
    invalid_type_error: 'Acadmic Faculty Must be String',
  }),
});

export const academicFacultyValidation = {
  academcFacultyValidation,
  updateacademcFacultyValidation,
};
