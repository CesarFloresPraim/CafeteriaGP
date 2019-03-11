import { Component, OnInit } from '@angular/core';
import { Category} from '../../modelService/category.model';

import { CategoryService} from '../../modelService/category.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  _id: string;
  name: string;
  constructor(private categoryService: CategoryService) { }
  categories: Category[];
  ngOnInit() {
    // this.fetchCategories();
  }
  fetchCategories() {
    this.categoryService.getCategoryList().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }
  createCategory(create: boolean) {
    if (create) {
      this.name = prompt('New category name?');
      this.category = {
        _id: '',
        name: this.name
      };
      this.categoryService.postCategory(this.category).subscribe(res => {
        console.log(res);
      });
    } else {
      this.name = prompt('Updated category name?');
      this.category = {
        _id: this._id,
        name: this.name
      };
      this.categoryService.putCategory(this.category).subscribe(res => {
      });
    }
  }
  updateCategory(id) {
    console.log(id);
    this._id = id;
  }
  delCategory() {
    this.categoryService.deleteCategory(this._id);
  }
}
