import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [AuthFormComponent],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
