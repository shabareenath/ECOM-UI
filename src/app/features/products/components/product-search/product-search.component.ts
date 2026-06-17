import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  standalone: true,
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent {
  @Output() searchChanged = new EventEmitter<string>();

  searchKeyWord = '';
  onSearchClick() {}
  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchKeyWord = target.value;
    this.searchChanged.emit(this.searchKeyWord);
  }
}
