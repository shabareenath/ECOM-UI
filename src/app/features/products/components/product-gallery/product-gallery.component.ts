import { Component } from '@angular/core';
import { RelatedProductsComponent } from '../related-products/related-products.component';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  imports: [RelatedProductsComponent],
})
export class ProductGalleryComponent {}
