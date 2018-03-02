import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService } from '../dashboard/toys/toys.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ToysService]
})
export class ItemsComponent implements OnInit {
  settings = {
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    delete:{
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Product Name',
        filter:{
          type: 'text',
          selectText: 'Search yasta'
        }
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      },
      component: {
        title: 'Component Number'
      },
      seller: {
        title: 'Seller Name'
      }
    }
  };

  data = [];

  constructor(private toysService:ToysService){
  }

  onCreateCall(event){
       event.confirm.resolve(event.newData);
       this.toysService.createProduct(event.newData.name, event.newData.price, event.newData.seller).subscribe();
  }

  onEditCall(event){
       event.confirm.resolve(event.newData);
       this.toysService.updateProduct(event.newData._id, event.newData.name, event.newData.price, event.newData.seller).subscribe();
  }

  onDeleteCall(event){
    event.confirm.resolve(event.data._id);
    this.toysService.deleteProduct(event.data._id).subscribe();
  }
  ngOnInit() {
    this.toysService.getProducts().subscribe((res:any) => {console.log(res.data);this.data = res.data;});
   }

}
