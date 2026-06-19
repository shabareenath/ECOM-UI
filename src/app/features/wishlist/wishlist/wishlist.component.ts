import { Component, inject } from '@angular/core';
import { WishlistItem } from '../../../core/models/wishlist.model';
import { WishlistService } from '../../../core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlistItems: WishlistItem[] = [];

  private wishlistService = inject(WishlistService);

  constructor() {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.wishlistService.getWishlist().subscribe({
      next: (items) => {
        this.wishlistItems = items;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  removeFromWishlist(id: number): void {
    this.wishlistItems = this.wishlistItems.filter((item) => item.id !== id);
  }

  addToCart(item: WishlistItem): void {
    console.log('Add to cart', item);
  }
}
