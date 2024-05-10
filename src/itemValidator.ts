import { z } from 'zod';

export const ItemSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    vendor: z.string().min(1, 'Vendor is required'),
    price: z.number().positive('Price is required'),
    description: z.string().min(1, 'Description is required').max(50, 'too long'),
    id: z.string().uuid(),
});

export type Item = z.infer<typeof ItemSchema>;
