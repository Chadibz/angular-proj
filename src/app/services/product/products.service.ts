import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<any>;

  constructor() { 
    this.products=[];
    const productName=["Tomates",'Radis','Melon','Courgette','Banane','Pomme','Poire','Champpignon','Poireau']
    for(let i=0;i<productName.length;i++) {
      this.products.push({
        id: i,
        name: productName[i],
        status: ' stock'
      });
    }
  }
  changeAllStatusProducts(newStatus: string) {
    this.products.forEach(product=>{product.status=newStatus});

  }
  changeStatusProduct(productId:number){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id===productId){
        this.products[i].status=this.products[i].status===' stock'?'rupture':'stock';
        break;
      }

    }
  }
  getProductInfos(productId: number){
    for(let product of this.products){
      if(product.id===productId){
        return product;
      }
    }
  }
}
