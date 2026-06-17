import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CartItem } from '../../../../core/models/cart.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [FormsModule],
})
export class CartItemComponent {
  @Input() item!: CartItem;

  @Output() quantityChanged = new EventEmitter<{
    id: number;
    quantity: number;
  }>();

  @Output() removed = new EventEmitter<number>();

  increaseQuantity(): void {
    this.quantityChanged.emit({
      id: this.item.id,
      quantity: this.item.quantity + 1,
    });
  }
  updateCart(): void {
    console.log({
      id: this.item.id,
      quantity: this.item.quantity,
      size: this.item.size,
    });
  }
  decreaseQuantity(): void {
    if (this.item.quantity > 1) {
      this.quantityChanged.emit({
        id: this.item.id,
        quantity: this.item.quantity - 1,
      });
    }
  }

  removeItem(): void {
    this.removed.emit(this.item.id);
  }

  get totalPrice(): number {
    return this.item.price * this.item.quantity;
  }
}
