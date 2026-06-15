import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { User } from '../../core/models/user.model';
import { Order } from '../../core/models/order.model';
import { ProductService } from '../../core/services/product.service';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(
    private productApi: ProductService,
    private orderApi: OrderService,
    private authApi: AuthService
  ) {}

  listProducts(): Observable<Product[]> {
    return this.productApi.list();
  }

  listOrders(): Observable<Order[]> {
    return this.orderApi.list();
  }

  listUsers(): Observable<User[]> {
    return this.authApi.listUsers?.() as Observable<User[]>;
  }
}
