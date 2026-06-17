import { Component, effect } from '@angular/core';
import { ProductSearchComponent } from '../../components/product-search/product-search.component';
import { ProductSortComponent } from '../../components/product-sort/product-sort.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductFilterComponent } from '../../components/product-filter/product-filter.component';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    ProductSearchComponent,
    ProductSortComponent,
    ProductCardComponent,
    ProductFilterComponent,
    DialogBoxComponent,
  ],
})
export class ProductListComponent {
  activeSort = 'latest';

  selectedMaxPrice = '';
  isDeleteDialogOpen = false;
  products = [
    {
      id: 1,
      name: 'Oversized Black Tee',
      price: 999,
      image: 'assets/featured1.jpeg',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Essential White Tee',
      price: 899,
      image: 'assets/featured2.jpeg',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Premium Brown Oversized Tee',
      price: 1199,
      image: 'assets/featured3.jpeg',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Graphic Streetwear Tee',
      price: 1299,
      image: 'assets/featured4.jpeg',
      rating: 4.8,
    },
    {
      id: 5,
      name: 'Urban Grey Oversized Tee',
      price: 1099,
      image: 'assets/featured1.jpeg',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Classic Navy Tee',
      price: 999,
      image: 'assets/featured2.jpeg',
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Premium Olive Tee',
      price: 1399,
      image: 'assets/featured3.jpeg',
      rating: 4.9,
    },
    {
      id: 8,
      name: 'Minimal Beige Oversized Tee',
      price: 1199,
      image: 'assets/featured4.jpeg',
      rating: 4.8,
    },
  ];
  constructor() {
    effect(() => {
      console.log('Current filtered products:', this.filteredProducts);
    });
  }
  filteredProducts = [...this.products];
  private checkEmptyState(): void {
    this.isDeleteDialogOpen = this.filteredProducts.length === 0;
  }
  applyFilter(value: string): void {
    console.log('Applying filter with max price:', value);
    this.selectedMaxPrice = value;
    console.log('Selected max price:', this.selectedMaxPrice);
    switch (value) {
      case 'under999':
        this.filteredProducts = this.products.filter((p) => p.price < 999);

        break;
      case '999-1499':
        this.filteredProducts = this.products.filter(
          (p) => p.price >= 999 && p.price <= 1499,
        );
        break;

      case '1500-1999':
        this.filteredProducts = this.products.filter(
          (p) => p.price >= 1500 && p.price <= 1999,
        );
        break;
      case 'above2000':
        this.filteredProducts = this.products.filter((p) => p.price > 2000);
        break;
      case 'removeFilter':
        this.filteredProducts = [...this.products];

        break;
      default:
        this.filteredProducts = [...this.products];
    }
    this.checkEmptyState();
    this.applySort(this.activeSort);
  }

  applySort(sort: string): void {
    this.activeSort = sort;
    const products = [...this.filteredProducts];

    switch (sort) {
      case 'Price Low-High':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'Price High-Low':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'Popularity':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'Ratings':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'Latest':
      default:
        products.sort((a, b) => b.id - a.id);
        break;
    }

    this.filteredProducts = products;
  }
  onDialogClose() {
    this.isDeleteDialogOpen = false;
    if (this.filteredProducts.length == 0) {
      this.filteredProducts = [...this.products];
    }
  }
}
