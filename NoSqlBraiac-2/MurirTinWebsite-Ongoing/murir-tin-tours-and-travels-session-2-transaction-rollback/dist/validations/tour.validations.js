"use strict";
// import { z } from 'zod'
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourValidation = void 0;
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
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255).optional(),
    durationHours: zod_1.z.string().optional(),
    ratingAverage: zod_1.z.string().optional(),
    ratingQuantity: zod_1.z.string().optional(),
    price: zod_1.z.string().optional(),
    imageCover: zod_1.z.string(),
    images: zod_1.z.array(zod_1.z.string()).optional(),
    createdAt: zod_1.z
        .date()
        .default(() => new Date())
        .optional(),
    startDates: zod_1.z.array(zod_1.z.date()).optional(),
    startLocation: zod_1.z.string().optional(),
    availableSeats: zod_1.z.string().optional(),
    locations: zod_1.z.array(zod_1.z.string()).optional(),
    slug: zod_1.z.string().optional(),
});
// Example usage:
// const validData = {
//   name: 'Tour Name',
//   durationHours: 5,
//   // ... other fields
// }
// const result = createZodSchema.parse(validData)
// console.log(result)
exports.TourValidation = { createZodSchema };
