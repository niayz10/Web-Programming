import { Injectable } from '@angular/core';
import { Category } from './Category';
import { CATEGORIES } from './Categories';
import { Product } from './product'
import { products } from './products'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  products:Product[] ;
  constructor() { }

  getCategoryProducts(id: string): Observable<Product[]>{
    let temp: Product[] = [];
    for(let i = 0; i < products.length; i++){
      if(products[i].categoryID.includes(id, 0))
      temp.push(products[i]);
    }
    this.products=temp;
    return of(temp);
  }

  getCategories():Observable<Category[]> {
    return of(CATEGORIES);
  }
  getProductbyId(id:string):Observable<Product>{
    for(let i=0;i<products.length;i++){
      if(products[i].id==id)
      return of(products[i]);
    }
    
  }
}
