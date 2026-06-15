import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-stat-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-stat-widget.component.html',
  styleUrls: ['./admin-stat-widget.component.scss'],
})
export class AdminStatWidgetComponent implements OnInit {
  @Input() title = '';
  @Input() value: number | string = '';
  constructor() {}
  ngOnInit(): void {}
}
