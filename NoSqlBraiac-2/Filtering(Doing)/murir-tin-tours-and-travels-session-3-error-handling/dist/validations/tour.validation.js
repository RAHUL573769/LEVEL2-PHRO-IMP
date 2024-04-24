"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTourZodSchema = void 0;
const zod_1 = require("zod");
exports.createTourZodSchema = zod_1.z
    .object({
    name: zod_1.z.string().refine((data) => {
        if (data.length < 5) {
            return false;
        }
    }, {
        message: 'Name must be less than 5 characters',
    }),
    durationHours: zod_1.z
        .number()
        .int()
        .positive()
        .min(1)
        .refine((data) => {
        if (data < 5) {
            return false;
        }
    }, {
        message: 'Duration must be greater than 5 hours',
    }),
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
