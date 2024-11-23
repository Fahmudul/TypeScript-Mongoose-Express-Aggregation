import { z } from 'zod';
const ZodOrderSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  product: z.string().min(1, { message: 'Product id is required' }),
  quantity: z.number().int().min(1, { message: 'Quantity must be at least 1' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be a positive number' }),
});

export default ZodOrderSchema;
