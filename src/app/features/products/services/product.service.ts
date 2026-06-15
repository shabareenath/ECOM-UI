import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class FeatureProductService {
  constructor(private api: ApiService) {}

  list(): Observable<Product[]> {
    return this.api.get<Product[]>('/products');
  }

  get(id: number): Observable<Product> {
    return this.api.get<Product>(`/products/${id}`);
  }
}
