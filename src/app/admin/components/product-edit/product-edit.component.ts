import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  @Input() product?: Product;
  constructor() {}
  ngOnInit(): void {}
}
