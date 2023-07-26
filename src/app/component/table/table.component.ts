import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products: Array<any>;
product: any;
  constructor(private productService: ProductService){
    this.products=[];
  }

  ngOnInit(): void {
    this.products=this.productService.products;
    
  }

}
