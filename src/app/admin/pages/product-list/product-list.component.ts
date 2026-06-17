import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);
  products1: Product[] = [];
  constructor() {
    effect(() => {
      this.products1 = this.productService.getProducts();
      console.log(this.products1);
    });
  }
  ngOnInit(): void {}
}
