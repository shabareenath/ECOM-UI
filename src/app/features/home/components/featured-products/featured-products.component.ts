import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  products = [
    {
      id: 1,
      name: 'Oversized Black Tee',
      price: 999,
      image: 'assets/featured1.jpeg',
    },
    {
      id: 2,
      name: 'Graphic Street Tee',
      price: 1199,
      image: 'assets/featured2.jpeg',
    },
    {
      id: 3,
      name: 'Essential White Tee',
      price: 899,
      image: 'assets/featured3.jpeg',
    },
    {
      id: 4,
      name: 'Premium Oversized Tee',
      price: 1299,
      image: 'assets/featured4.jpeg',
    },
  ];
}
