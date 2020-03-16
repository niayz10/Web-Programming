import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../category-service.service'
import { Category } from '../CatInter';
@Component({
  selector: 'app-wardrop',
  templateUrl: './wardrop.component.html',
  styleUrls: ['./wardrop.component.css']
})
export class WardropComponent implements OnInit {
  categories:Category[];
  constructor(private categoryService:CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategories();
  }
getCategories(){
  this.categoryService.getCat().subscribe(categories =>this.categories=categories);
}
}
