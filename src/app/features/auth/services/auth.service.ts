import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class FeatureAuthService {
  constructor(private coreAuth: AuthService) {}

  login(email: string, password: string): Observable<User> {
    return this.coreAuth.login({ email, password } as any);
  }

  register(payload: Partial<User>): Observable<User> {
    return this.coreAuth.register(payload as User);
  }

  logout(): void {
    this.coreAuth.logout();
  }
}
