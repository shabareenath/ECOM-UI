import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order.model';
import { OrderService } from '../../../core/services/order.service';

@Injectable({ providedIn: 'root' })
export class FeatureCheckoutService {
  constructor(private orderApi: OrderService) {}

  placeOrder(payload: Partial<Order>): Observable<Order> {
    return this.orderApi.create(payload as Order);
  }
}
