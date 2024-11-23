import mongoose, { Schema } from 'mongoose';
import Order from './Order.interface';

const OrderSchema = new Schema<Order>({
  email: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const OrderModel =
  mongoose.models.Orders || mongoose.model('Order', OrderSchema);

export default OrderModel;
