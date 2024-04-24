// import { z } from 'zod'

// const createZodSchema = z
//   .object({
//     name: z.string().refine(
//       (data) => {
//         if (data.length < 5) {
//           return false
//         }
//       },
//       {
//         message: 'Name must be less tha n 5 characters',
//       },
//     ),

//     durationHours: z.number().int().positive().min(1),
//     //   ratingsAverage: z.number().int().positive().min(1).max(5),

//     price: z.number().positive(),
//     discountPrice: z.number().int().positive().optional(),
//   })
//   .refine(
//     (data) => {
//       if (data.discountPrice === undefined) {
//         return true
//       }
//       if (data.discountPrice > data.price) {
//         return false
//       }
//     },
//     {
//       message: 'Discount Price Must be less than actual price',
//     },
//   )
import { z } from 'zod'

const createZodSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  durationHours: z.string().optional(),
  ratingAverage: z.string().optional(),
  ratingQuantity: z.string().optional(),
  price: z.string().optional(),
  imageCover: z.string(),
  images: z.array(z.string()).optional(),
  createdAt: z
    .date()
    .default(() => new Date())
    .optional(),
  startDates: z.array(z.date()).optional(),
  startLocation: z.string().optional(),
  availableSeats: z.string().optional(),
  locations: z.array(z.string()).optional(),
  slug: z.string().optional(),
})

// Example usage:
// const validData = {
//   name: 'Tour Name',
//   durationHours: 5,
//   // ... other fields
// }

// const result = createZodSchema.parse(validData)
// console.log(result)

export const TourValidation = { createZodSchema }
