import { z } from 'zod';

const ZodBookSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  author: z.string().min(1, { message: 'Author name is required' }),
  price: z.number().min(1, { message: 'Price must be a positive number' }),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    { message: 'Category is required' },
  ),
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z.number().int().min(0, { message: 'Quantity must be a positive integer' }),
  inStock: z.boolean(),
});

export default ZodBookSchema;
