import { Request, Response } from 'express';
import ZodBookSchema from './Books.zodvalidation';
import ZodOrderSchema from './Order.zodvalidation';
import { BookServices } from './Store.services';
const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    // Book data validation using Zod
    const testedBookData = ZodBookSchema.parse(bookData);

    // call to services (Save book data to database)
    const savedBookData =
      await BookServices.saveBookDataToDataBase(testedBookData);
    // send response to client
    res.status(200).json({
      messag: 'Book created successfullyy',
      success: true,
      data: savedBookData,
    });
  } catch (error: any) {
    if (error.name == 'ZodError') {
      const formatedError = error.errors.reduce(
        (accumulator: any, issue: any) => {
          const path = issue.path[0];
          accumulator[path] = {
            message: issue.message,
            name: issue.name,
            properties: {
              message: issue.message,
              type: issue.code,
            },
            kind: issue.code,
            path,
            value: issue.received,
          };
          return accumulator;
        },
        {},
      );

      res.status(500).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: 'ValidationError',
          errors: formatedError,
        },
        stack: error.stack,
      });
    }
  }
};

// Get All Book
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBook = await BookServices.getAllBooksFromDatabase();
    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: allBook,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to retrieve books',
      status: false,
      error: error.message,
    });
  }
};

// Get a specific book
const getSpecificBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const specificBook =
      await BookServices.getSpecificBookFromDatabase(productId);

    res.status(200).json({
      message: 'Book retrieved successfully',
      status: true,
      data: specificBook,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to retrieve book',
      status: false,
      error: error.message,
    });
  }
};

// Update book data
const updateBookData = async (req: Request, res: Response) => {
  const { productId } = req.params;
<<<<<<< HEAD
  const bookData  = req.body;
=======
  const { bookData } = req.body;
>>>>>>> 6c04bf6a727160ce409ae76ce4fdbc0de209911a
  try {
    const updatedBookData = await BookServices.updateExistingBookData(
      productId,
      bookData,
    );
    res.status(200).json({
      message: 'Book updated successfully',
      status: true,
      data: updatedBookData,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to update book',
      status: false,
      error: error.message,
    });
  }
};

// Delete a book
const deleteBook = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const deletedBook = await BookServices.deleteABookFromDatabase(productId);
    res.status(200).json({
      message: 'Book deleted successfully',
      status: true,
      data: deletedBook,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to delete book',
      status: false,
      error: error.message,
    });
  }
};

// Order book
const orderBook = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validateOrderData = ZodOrderSchema.parse(orderData);
    const orderedBook =
      await BookServices.saveBuyerDataToDatabase(validateOrderData);
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: orderedBook,
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      const formatedError = error.errors.reduce(
        (accumulator: any, issue: any) => {
          const path = issue.path[0];
          accumulator[path] = {
            message: issue.message,
            name: 'ValidationError',
            properties: {
              message: issue.message,
              type: issue.code,
            },
            kind: issue.code,
            path,
            value: issue.received,
          };

          return accumulator;
        },
        {},
      );
      res.status(500).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: 'ValidationError',
          errors: formatedError,
        },
        stack: error.stack,
      });
    }
  }
};

// Get revenue
const getAllBooksRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await BookServices.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: revenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error.message,
    });
  }
};
<<<<<<< HEAD


=======
>>>>>>> 6c04bf6a727160ce409ae76ce4fdbc0de209911a
export const StoreController = {
  createBook,
  getAllBooks,
  getSpecificBook,
  updateBookData,
  deleteBook,
  orderBook,
  getAllBooksRevenue,
};
