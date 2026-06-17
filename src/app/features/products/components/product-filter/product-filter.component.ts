import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss',
})
export class ProductFilterComponent {
  isOpen = false;
  selectedPrice = '';
  @Output() filterChanged = new EventEmitter<string>();
  constructor(private elementRef: ElementRef) {}

  applyFilter(value: string): void {
    this.selectedPrice = value;
    console.log('Applying filter with max price:', value);
    this.filterChanged.emit(value);
    this.isOpen = false;
  }
  toggleFilter(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
