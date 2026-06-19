import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private http = inject(HttpClient);

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>('assets/mock-data/addressesDB.json');
  }
}
