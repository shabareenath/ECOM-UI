import { Component } from '@angular/core';
import { RelatedProductsComponent } from '../related-products/related-products.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  imports: [RelatedProductsComponent, FormsModule],
})
export class ProductGalleryComponent {
  selectedSize = '';

  product: Product = {
    id: 1,
    name: 'Oversized Black Tee',
    price: 999,
    image: 'assets/featured1.jpeg',
    rating: 4.8,
    category: 'tshirt',
  };
  quantity = 1;

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    const productData = {
      productId: 1,
      size: this.selectedSize,
      quantity: this.quantity,
    };

    console.log(productData);
  }

  buyNow(): void {
    console.log('Buy Now');
  }
}
