import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../../core/models/order.model';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss'],
})
export class OrderTrackingComponent implements OnInit {
  @Input() order?: Order;
  constructor() {}
  ngOnInit(): void {}
}
