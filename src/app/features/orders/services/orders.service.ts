import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order.model';
import { OrderService } from '../../../core/services/order.service';

@Injectable({ providedIn: 'root' })
export class FeatureOrdersService {
  constructor(private orderApi: OrderService) {}

  list(): Observable<Order[]> {
    return this.orderApi.list();
  }

  get(id: string): Observable<Order> {
    return this.orderApi.get(id);
  }
}
