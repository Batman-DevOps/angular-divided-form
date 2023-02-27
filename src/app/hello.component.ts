import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
    <div [formGroup]="address">
    <label>Street: </label>
      <input formControlName="street"><br>
    <label>Zip: </label>
      <input formControlName="zip">
    </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {

  @Input() address: FormGroup;
}
