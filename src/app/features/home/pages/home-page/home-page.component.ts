import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { CategoriesSectionComponent } from '../../components/categories-section/categories-section.component';
import { OffersBannerComponent } from '../../components/offers-banner/offers-banner.component';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { TrendingProductsComponent } from '../../components/trending-products/trending-products.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroBannerComponent,
    CategoriesSectionComponent,
    OffersBannerComponent,
    FeaturedProductsComponent,
    TestimonialsComponent,
    TrendingProductsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
