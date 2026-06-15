import { CartItem } from './cart.model';

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
  userId?: number;
}
