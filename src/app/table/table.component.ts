import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ]
})
export class TableComponent  {
  
  @Input() address: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.address = fb.group({

    })
  }
}
