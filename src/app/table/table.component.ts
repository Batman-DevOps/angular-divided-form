import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() address: FormArray;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addressForm = this.fb.group({
      addresses: this.address
    });
    // this.address = this.fb.array([]);

    const addressArray = [
      {
        street: 'MG Road',
        city: 'Goa',
        state: 'Maharashtra',
      },
      {
        street: 'MG Road',
        city: 'Goa',
        state: 'Maharashtra',
      },
      {
        street: 'MG Road',
        city: 'Goa',
        state: 'Maharashtra',
      },
    ];

    addressArray.forEach((ele) => {
      this.addAddress(ele);
    });
  }

  addAddress(address: any) {
    let addressFormGroup = this.fb.group({
      street: address.street,
      city: address.city,
      state: address.state,
    });

    this.addressForm.value.addresses.push(addressFormGroup);
    console.log('this.addressForm.value', this.addressForm.value);
  }
}
