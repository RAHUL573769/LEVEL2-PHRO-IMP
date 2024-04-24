"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourValidation = exports.createTourZodSchema = void 0;
const zod_1 = require("zod");
exports.createTourZodSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    durationHours: zod_1.z.number().int().positive().min(1),
    ratingAverage: zod_1.z.number().int().positive().min(1).max(5),
    price: zod_1.z.number().int().positive().min(1),
    discountPrice: zod_1.z.number().int().positive().min(1).optional(),
})
    .refine((data) => {
    if (data.discountPrice === undefined) {
        return true;
    }
    if (data.discountPrice > data.price) {
        return false;
    }
}, {
    message: 'Discount price must be less than price',
});
exports.TourValidation = { createTourZodSchema: exports.createTourZodSchema };
