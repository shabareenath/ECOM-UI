import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  user = {
    fullName: 'Shabareenath',
    email: 'user@example.com',
    phone: '+91 9999999999',
  };

  password = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  saveChanges(): void {
    console.log('User Data:', this.user);
    console.log('Password Data:', this.password);
  }
}
