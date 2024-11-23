import BookModel from './BookModel';
import Book from './Books.interface';
import Order from './Order.interface';
import OrderModel from './OrderModel';
// Save book data to database
const saveBookDataToDataBase = async (testedBookData: Book) => {
  try {
    // Check if a book with the same title already exists
    const savedBookData = new BookModel(testedBookData);
    await savedBookData.save();
    const date = new Date();
    const updatedBookData = {
      _id: savedBookData._id,
      title: savedBookData.title,
      author: savedBookData.author,
      price: savedBookData.price,
      category: savedBookData.category,
      description: savedBookData.description,
      quantity: savedBookData.quantity,
      inStock: savedBookData.inStock,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };
    return updatedBookData;
  } catch (error) {
    console.log(error);
  }
};

// Get all book from database
const getAllBooksFromDatabase = async () => {
  const allBooks = await BookModel.find();
  return allBooks;
};

// Get specific book from database
const getSpecificBookFromDatabase = async (id: string) => {
  const foundedBook = await BookModel.findOne({_id:id});
  if (!foundedBook) {
    return false;
  }
  return foundedBook;
};

// Update book data and save to database
const updateExistingBookData = async (id: string, bookData: Book) => {
  const isExistingBook = await BookModel.findById(id);
  if (!isExistingBook) return false;
  else {
    await BookModel.findByIdAndUpdate(id, bookData);
    const newUpdatedBook = await BookModel.findById(id);
    return newUpdatedBook;
  }
};

// Delete book from database
const deleteABookFromDatabase = async (id: string) => {
  await BookModel.findByIdAndDelete(id);
  return {};
};

// Save Buyer data to database
const saveBuyerDataToDatabase = async (buyerData: Order) => {
  const newBuyerData = new OrderModel(buyerData);
  await newBuyerData.save();
  const date = new Date();
  return {
    _id: newBuyerData._id,
    email: newBuyerData.email,
    product: newBuyerData.product,
    quantity: newBuyerData.quantity,
    totalPrice: newBuyerData.totalPrice,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  };
};

// Calculate Revenue
const calculateRevenue = async () => {
  // Using mongodb aggregation
  const revenue = await OrderModel.aggregate([
    {
      $addFields: { grandTotal: { $multiply: ['$quantity', '$totalPrice'] } },
    },
    {
      $group: {
        _id: null,
        Revenue: { $sum: '$grandTotal' },
      },
    },
  ]);
  return revenue[0].Revenue;
};

export const BookServices = {
  saveBookDataToDataBase,
  getAllBooksFromDatabase,
  getSpecificBookFromDatabase,
  updateExistingBookData,
  deleteABookFromDatabase,
  saveBuyerDataToDatabase,
  calculateRevenue,
};
