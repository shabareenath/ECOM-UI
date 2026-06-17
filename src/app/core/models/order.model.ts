import { CartItem } from './cart.model';

export interface Order {
  id: number;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;

  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

  createdAt: string;

  userId?: number;
}
