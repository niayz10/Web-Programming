import { Component, OnInit } from '@angular/core';
import  { CategoryService } from '../category.service'
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private catSer:CategoryService, private r: ActivatedRoute){ }
  products: Product[];
  ngOnInit(){
    this.getPr();
  }

  

  getPr(){
    let id = this.r.snapshot.paramMap.get('categoryId');
    this.catSer.getCategoryProducts(id).subscribe(products =>this.products=products);
  }
}
