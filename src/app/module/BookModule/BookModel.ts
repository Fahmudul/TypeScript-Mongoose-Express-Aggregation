import mongoose, { Schema } from 'mongoose';
import Book from './Books.interface';

const BookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const BookModel =
  mongoose.models.Books || mongoose.model<Book>('Book', BookSchema);

export default BookModel;
