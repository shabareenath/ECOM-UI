import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-admin-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user-card.component.html',
  styleUrls: ['./admin-user-card.component.scss'],
})
export class AdminUserCardComponent implements OnInit {
  @Input() user?: User;
  constructor() {}
  ngOnInit(): void {}
}
