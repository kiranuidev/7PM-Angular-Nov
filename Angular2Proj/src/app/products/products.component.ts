import { Component, OnInit } from '@angular/core';
import { ProductService }  from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private productSvc:ProductService) { }

  ngOnInit() {
  }
  product={
  }
  products:any
  searchProducts(){
    this.productSvc.searchProducts(this.product)
    .subscribe((response)=>{
      console.log(response);
      this.products = response.items;
    })

  }

}
