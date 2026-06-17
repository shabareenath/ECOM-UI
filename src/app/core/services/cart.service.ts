import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);

  getCart(): any {
    return this.http.get<CartItem[]>('assets/mock-data/cartDB.json');
  }
}
