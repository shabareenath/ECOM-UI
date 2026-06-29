import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Address } from '../../../../core/models/address.model';
import { AddressService } from '../../../../core/services/address.service';

@Component({
  selector: 'app-address-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addresseses.component.html',
  styleUrl: './addresseses.component.scss',
})
export class AddressesesComponent implements OnInit {
  addresses: Address[] = [];

  showForm = false;

  newAddress: Address = {
    id: 0,
    name: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    isDefault: false,
  };

  private addressService = inject(AddressService);

  ngOnInit(): void {
    this.loadAddresses();
  }

  private loadAddresses(): void {
    this.addressService.getAddresses().subscribe({
      next: (addresses) => {
        this.addresses = addresses;
      },
      error: (error) => {
        console.error('Failed to load addresses:', error);
      },
    });
  }

  saveAddress(): void {
    console.log('Saving Address', this.newAddress);

    // Uncomment this once addAddress() is implemented in your service.
    /*
    this.addressService.addAddress(this.newAddress).subscribe({
      next: (address) => {
        this.addresses.push(address);

        this.showForm = false;

        this.resetForm();
      },
      error: (error) => {
        console.error('Failed to save address:', error);
      },
    });
    */
  }

  resetForm(): void {
    this.newAddress = {
      id: 0,
      name: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      isDefault: false,
    };
  }
}
