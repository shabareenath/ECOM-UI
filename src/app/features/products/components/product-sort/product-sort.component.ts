import { Component } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.scss'],
})
export class ProductSortComponent {
  isOpen = false;

  selectedSort = 'Latest';

  selectSort(value: string): void {
    this.selectedSort = value;

    this.isOpen = false;

    console.log(value);
  }
}
