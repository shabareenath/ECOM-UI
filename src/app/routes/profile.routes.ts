import { Routes } from '@angular/router';
import { ProfilePageComponent } from '../features/profile/pages/profile-page/profile-page.component';
import { WishlistComponent } from '../features/wishlist/wishlist/wishlist.component';
import { AddressesesComponent } from '../features/checkout/components/addresseses/addresseses.component';
import { SettingsComponent } from '../features/settings/settings.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'addresses',
    component: AddressesesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
