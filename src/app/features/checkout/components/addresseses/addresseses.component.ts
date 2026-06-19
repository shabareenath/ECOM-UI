import { Component, inject } from '@angular/core';
import { Address } from '../../../../core/models/address.model';
import { AddressService } from '../../../../core/services/address.service';

@Component({
  selector: 'app-address-page',
  templateUrl: './addresseses.component.html',
  styleUrl: './addresseses.component.scss',
})
export class AddressesesComponent {
  addresses: Address[] = [];

  private addressService = inject(AddressService);

  constructor() {
    this.loadAddresses();
  }

  private loadAddresses(): void {
    this.addressService.getAddresses().subscribe({
      next: (addresses) => {
        this.addresses = addresses;
        console.log(this.addresses);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
