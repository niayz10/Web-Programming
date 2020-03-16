import { Component, OnInit } from '@angular/core';
import  { CategoryService } from '../category.service'
import { Category } from '../category'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = 'Categories';
  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories=categories);
  }

}
