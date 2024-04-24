import z from "zod";

const createStudentValidation = z.object({
  name: z.string().refine(
    (data) => {
      if (data.length < 5) {
        return "Name Must be 5Characters Long";
      }
    },
    { message: "Name Must be Greater than 5 Letters" }
  ),
  durationHours: z.number().int().positive(),
  ratingAverage: z.number().positive().min(1).max(5)
  //     discountPrice: z.number().int().refine((data)=>{
  //    if(data.discountPrice)
  //     })
});
export const StudentValidations = { createStudentValidation };
