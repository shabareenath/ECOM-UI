import { Routes } from '@angular/router';

import { OrdersListComponent } from '../features/orders/pages/orders-list/orders-list.component';
import { OrderDetailsComponent } from '../features/orders/pages/order-details/order-details.component';

export const ORDER_ROUTES: Routes = [
  {
    path: '',
    component: OrdersListComponent,
  },

  {
    path: ':id',
    component: OrderDetailsComponent,
  },
];
