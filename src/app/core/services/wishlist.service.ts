import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WishlistItem } from '../models/wishlist.model';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private http = inject(HttpClient);

  getWishlist(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>('assets/mock-data/wishlistDB.json');
  }
}
