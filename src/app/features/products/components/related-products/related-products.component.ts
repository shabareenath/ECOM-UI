import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent {
  relatedProducts = [
    {
      id: 2,
      name: 'Essential White Tee',
      price: 899,
      category: 'tshirt',
      image: 'assets/featured2.jpeg',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Premium Brown Oversized Tee',
      price: 1199,
      category: 'tshirt',
      image: 'assets/featured3.jpeg',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Graphic Streetwear Tee',
      price: 1299,
      category: 'tshirt',
      image: 'assets/featured4.jpeg',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Urban Grey Oversized Tee',
      price: 1099,
      category: 'tshirt',
      image: 'assets/featured1.jpeg',
      rating: 4.6,
    },
  ];
}
