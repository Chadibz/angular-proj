import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent {
  @Input() id:string='0';
  @Input() name:string='';
  @Input() status:string='';

  constructor(private productService: ProductService,private router: Router){}

  onClickChangeStatus(){
    this.productService.changeStatusProduct(+this.id)
  }
  onClickShowDetails(){
    this.router.navigate(['product',this.id]);
  }
}
