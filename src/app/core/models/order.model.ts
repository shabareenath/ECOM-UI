import { Address } from './address.model';
import { CartItem } from './cart.model';

export interface Order {
  id: number;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: string;
  createdAt: string;
  orderDate: string;
  discount: number;
  userId?: number;
}
