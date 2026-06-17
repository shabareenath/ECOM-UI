import { Component, inject } from '@angular/core';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary.component';
import { CartService } from '../../../../core/services/cart.service';
import { Product } from '../../../products/models/product.model';
import { CartItem } from '../../../../core/models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  imports: [CartItemComponent, CartSummaryComponent],
})
export class CartPageComponent {
  cartService = inject(CartService);
  cartItems: CartItem[] = [];
  constructor() {
    this.loadCart();
  }
  loadCart() {
    this.cartService.getCart().subscribe({
      next: (products: CartItem[]) => {
        this.cartItems = products;
        console.log(this.cartItems);
      },
      error: (err: any) => console.error(err),
    });
  }
  get subtotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }
  updateQuantity(event: { id: number; quantity: number }): void {
    console.log('Quantity Updated', event);
  }

  removeItem(id: number): void {
    console.log('Remove Item', id);
  }
}
