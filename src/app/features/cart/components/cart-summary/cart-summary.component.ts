import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent {
  @Input() subtotal = 0;

  shipping = 99;

  get tax(): number {
    return Math.round(this.subtotal * 0.05);
  }

  get total(): number {
    return this.subtotal + this.shipping + this.tax;
  }
}
