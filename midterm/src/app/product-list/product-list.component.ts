import { Component, OnInit } from '@angular/core';
import {CategoryServiceService}  from '../category-service.service'
import {ActivatedRoute} from '@angular/router'
import {Product } from '../Product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products:Product[]
  constructor(private catSer : CategoryServiceService,private r:ActivatedRoute) { }
//ng generate module app-routing --flat --module=app
  ngOnInit(): void {
    this.getProd();
  }
getProd():void {
  let id=this.r.snapshot.paramMap.get('id');
  this.catSer.getProductById(id).subscribe(products => this.products=products)
}
}
