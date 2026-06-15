import { Routes } from '@angular/router';

import { ProductListComponent } from '../features/products/pages/product-list/product-list.component';
import { ProductDetailsComponent } from '../features/products/pages/product-details/product-details.component';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },

  {
    path: ':id',
    component: ProductDetailsComponent,
  },
];
