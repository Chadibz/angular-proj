import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.css']
})
export class SingleProductViewComponent implements OnInit {
product:any;
  constructor(private route:ActivatedRoute, private productService:ProductService){}
  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];

    this.product=this.productService.getProductInfos(+id);
  }

}
