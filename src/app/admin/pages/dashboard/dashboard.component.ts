import { Component, OnInit } from '@angular/core';
import { AdminStatWidgetComponent } from '../../components/admin-stat-widget/admin-stat-widget.component';
import { AdminProductCardComponent } from '../../components/admin-product-card/admin-product-card.component';
import { AdminOrderCardComponent } from '../../components/admin-order-card/admin-order-card.component';
import { AdminUserCardComponent } from '../../components/admin-user-card/admin-user-card.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminStatWidgetComponent,
    AdminProductCardComponent,
    AdminOrderCardComponent,
    AdminUserCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
