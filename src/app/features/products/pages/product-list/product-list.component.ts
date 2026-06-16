import { Component } from '@angular/core';
import { ProductSearchComponent } from '../../components/product-search/product-search.component';
import { ProductGalleryComponent } from '../../components/product-gallery/product-gallery.component';
import { ProductFilterComponent } from '../../components/product-filter/product-filter.component';
import { ProductSortComponent } from '../../components/product-sort/product-sort.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    ProductSearchComponent,
    ProductGalleryComponent,
    ProductFilterComponent,
    ProductSortComponent,
  ],
})
export class ProductListComponent {}
