import { Routes } from '@angular/router';

import { AdminDashboardComponent } from '../admin/pages/dashboard/dashboard.component';
import { ProductsManagementComponent } from '../admin/pages/products-management/products-management.component';
import { ProductCreateComponent } from '../admin/pages/product-create/product-create.component';
import { ProductEditComponent } from '../admin/components/product-edit/product-edit.component';
import { ProductListComponent } from '../features/products/pages/product-list/product-list.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
  },

  {
    path: 'products',
    component: ProductsManagementComponent,
  },

  {
    path: 'products/add',
    component: ProductCreateComponent,
  },

  {
    path: 'products/list',
    component: ProductListComponent,
  },

  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
  },
];
