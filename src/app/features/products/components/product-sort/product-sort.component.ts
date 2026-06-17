import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-sort',
  standalone: true,
  templateUrl: './product-sort.component.html',
  styleUrl: './product-sort.component.scss',
})
export class ProductSortComponent {
  isOpen = false;

  selectedSort = 'Latest';
  @Output() sortChanged = new EventEmitter<string>();
  constructor(private elementRef: ElementRef) {}

  toggleSort(): void {
    this.isOpen = !this.isOpen;
  }

  selectSort(value: string): void {
    this.selectedSort = value;
    this.sortChanged.emit(value);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
