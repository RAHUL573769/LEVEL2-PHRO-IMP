"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTourZodSchema = void 0;
const zod_1 = require("zod");
exports.createTourZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255).optional(),
    durationHours: zod_1.z.number().int().min(1).optional(),
    ratingAverage: zod_1.z.number().min(0).max(5).optional(),
    ratingQuantity: zod_1.z.number().int().min(0).optional(),
    price: zod_1.z.number().int().min(1).optional(),
    imageCover: zod_1.z.string().min(1).optional(),
    images: zod_1.z.array(zod_1.z.string()).optional(),
    createdAt: zod_1.z.string().optional(),
    startDates: zod_1.z.array(zod_1.z.string()).optional(),
    startLocation: zod_1.z.string().min(1).optional(),
    availableSeats: zod_1.z.number().int().min(0).optional(),
    locations: zod_1.z.array(zod_1.z.string()).optional(),
    slug: zod_1.z.string().min(1).optional(),
});
