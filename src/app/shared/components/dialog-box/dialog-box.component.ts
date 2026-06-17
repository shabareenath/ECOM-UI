import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  imports: [],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
})
export class DialogBoxComponent {
  @Input() isOpen = false;

  @Input() title = '';

  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
