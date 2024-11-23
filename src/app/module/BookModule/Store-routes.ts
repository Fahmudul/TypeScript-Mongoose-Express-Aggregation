import express from 'express';
import { StoreController } from './Store-controller';
const router = express.Router();

// Book related routes
router.post('/products', StoreController.createBook);
router.get('/products', StoreController.getAllBooks);
router.get('/products/:productId', StoreController.getSpecificBook);
router.put('/products/:productId', StoreController.updateBookData);
router.delete('/products/:productId', StoreController.deleteBook);

// Order and revenue related routes
router.post('/orders', StoreController.orderBook);
router.get('/orders/revenue',StoreController.getAllBooksRevenue);

export const StoreRoutes = router;
