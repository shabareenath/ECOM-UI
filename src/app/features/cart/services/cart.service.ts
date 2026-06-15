import { Injectable } from '@angular/core';
import { CartService as CoreCartService } from '../../../core/services/cart.service';

@Injectable({ providedIn: 'root' })
export class FeatureCartService {
  constructor(private coreCart: CoreCartService) {}

  // Thin wrapper — extend later with feature-specific helpers
}
