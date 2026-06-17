import { Component } from '@angular/core';
import { ProductGalleryComponent } from '../../components/product-gallery/product-gallery.component';
import { RelatedProductsComponent } from '../../components/related-products/related-products.component';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [ProductGalleryComponent],
})
export class ProductDetailsComponent {}
