import { Component, inject, OnInit } from '@angular/core';
import { Order } from '../../../../core/models/order.model';
import { OrderService } from '../../../../core/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orderItems: Order[] = [];

  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (orders: Order[]) => {
        this.orderItems = orders;
      },
      error: (error: any) => {
        console.error('Failed to load orders:', error);
      },
    });
  }

  viewDetails(orderId: number): void {
    console.log('View details for order:', orderId);

    // Later:
    // this.router.navigate(['/orders', orderId]);
  }
}
