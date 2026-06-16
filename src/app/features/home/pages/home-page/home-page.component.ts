import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { CategoriesSectionComponent } from '../../components/categories-section/categories-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroBannerComponent, CategoriesSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
