import { Routes } from '@angular/router';
import { WishlistComponent } from './features/wishlist/wishlist/wishlist.component';
import { AddressesesComponent } from './features/checkout/components/addresseses/addresseses.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/home.routes').then((m) => m.HOME_ROUTES),
  },

  {
    path: 'products',
    loadChildren: () =>
      import('./routes/products.routes').then((m) => m.PRODUCT_ROUTES),
  },

  {
    path: 'cart',
    loadChildren: () =>
      import('./routes/cart.routes').then((m) => m.CART_ROUTES),
  },

  {
    path: 'checkout',
    loadChildren: () =>
      import('./routes/checkout.routes').then((m) => m.CHECKOUT_ROUTES),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./routes/orders.routes').then((m) => m.ORDER_ROUTES),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./routes/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('././routes/profile.routes').then((m) => m.PROFILE_ROUTES),
  },
];
