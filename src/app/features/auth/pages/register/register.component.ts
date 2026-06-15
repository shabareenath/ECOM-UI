import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [AuthFormComponent],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
