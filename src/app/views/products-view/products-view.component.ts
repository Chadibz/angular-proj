import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/products.service';



@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  constructor(private productService: ProductService){}

  onClickChangeAllStatus(newStatus: string){
    this.productService.changeAllStatusProducts(newStatus);
  }

}
