import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-admin-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-product-card.component.html',
  styleUrls: ['./admin-product-card.component.scss'],
})
export class AdminProductCardComponent implements OnInit {
  @Input() product?: Product;
  constructor() {}
  ngOnInit(): void {}
}
