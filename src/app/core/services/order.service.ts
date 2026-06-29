import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private http = inject(HttpClient);

  private readonly ordersUrl = 'assets/mock-data/ordersDB.json';

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  getOrderById(id: number): Observable<Order | undefined> {
    return this.getOrders().pipe(
      map((orders) => orders.find((order) => order.id === id)),
    );
  }
}
