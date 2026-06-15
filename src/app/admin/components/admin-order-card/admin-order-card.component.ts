import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../core/models/order.model';

@Component({
  selector: 'app-admin-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-order-card.component.html',
  styleUrls: ['./admin-order-card.component.scss'],
})
export class AdminOrderCardComponent implements OnInit {
  @Input() order?: Order;
  constructor() {}
  ngOnInit(): void {}
}
