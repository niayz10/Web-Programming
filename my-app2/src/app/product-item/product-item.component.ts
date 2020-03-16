import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import  { CategoryService } from '../category.service'
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product:Product ;
  constructor(private categoryService: CategoryService, private r: ActivatedRoute) { }

  ngOnInit() {
  this.getPrBId();
  }
  clickOnItem(image){
    (document.querySelector("#"+this.product.id) as HTMLImageElement).src = image;
  }
  draw(cnt:number){
    let star="";
    for(let i=0;i<cnt;i++){
       star+="*";
    }
   window.alert(star);
  }
 getPrBId(){
  let id = this.r.snapshot.paramMap.get('productId');
  this.categoryService.getProductbyId(id).subscribe(product =>this.product=product);
 }
}