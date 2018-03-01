import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService } from './toys.service'
@Component({
  selector: 'app-toys',
  template: '<ng2-smart-table [settings]="settings"></ng2-smart-table>',
  providers: [ToysService]
})
// <ng2-smart-table [settings]="settings"></ng2-smart-table>
export class ToysComponent implements OnInit {
  settings = {
  columns: {
    name: {
      title: 'Product Name'
    },
    price: {
      title: 'Price'
    },
    createdAt: {
      title: 'Created At'
    }
  }
};
  constructor(private toysService:ToysService){

  }

  ngOnInit() {
     console.log(this.toysService.getProducts().subscribe());
   }

}
