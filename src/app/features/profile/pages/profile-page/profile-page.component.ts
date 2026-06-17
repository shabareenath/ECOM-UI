import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  users: User[] = [];
  constructor() {
    this.loadUsers();
  }
  userService = inject(UserService);
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      },
      err: (error: Error) => {
        console.log(error.message);
      },
    });
  }
}
