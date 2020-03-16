import { Injectable } from '@angular/core';
import { Category } from './CatInter';
import { CATEGORIES}   from './categories'
import {Product } from './Product'
import {products} from './products'
import { Observable,of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }

  getCat():Observable<Category[]>{
    return of(CATEGORIES);
  }
  getProducts():Observable<Product[]>{
    return of(products);
  }
  getProductById(catId:string):Observable<Product[]>{
    return of(products.filter(product=>product.catId===catId))
  }
}



