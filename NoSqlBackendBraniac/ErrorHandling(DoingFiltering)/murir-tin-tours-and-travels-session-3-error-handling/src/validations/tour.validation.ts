import { z } from 'zod'

export const createTourZodSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  durationHours: z.number().int().min(1).optional(),
  ratingAverage: z.number().min(0).max(5).optional(),
  ratingQuantity: z.number().int().min(0).optional(),
  price: z.number().int().min(1).optional(),
  imageCover: z.string().min(1).optional(),
  images: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
  startDates: z.array(z.string()).optional(),
  startLocation: z.string().min(1).optional(),
  availableSeats: z.number().int().min(0).optional(),
  locations: z.array(z.string()).optional(),
  slug: z.string().min(1).optional(),
})
