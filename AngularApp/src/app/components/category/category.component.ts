import { Component, OnInit } from '@angular/core';
import { Category} from '../../modelService/category.model';

import { CategoryService} from '../../modelService/category.service';
import {NgForm} from "@angular/forms";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  _id: string;
  name: string;
  constructor(private categoryService: CategoryService, private flashMessage: FlashMessagesService) { }
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
      this.flashMessage.show('Category saved succesfully!', { cssClass: 'alert-success', timeout: 2000 });

    } else {
      this.name = prompt('Updated category name?');
      this.category = {
        _id: this._id,
        name: this.name
      };
      this.categoryService.putCategory(this.category).subscribe(res => {
        this.flashMessage.show('Category updated succesfully!', { cssClass: 'alert-success', timeout: 2000 });
      });
    }
  }
  updateCategory(id) {
    console.log(id);
    this._id = id;
  }
  delCategory() {
    this.categoryService.deleteCategory(this._id);
    this.flashMessage.show('Category deleted succesfully!', { cssClass: 'alert-success', timeout: 2000 });
  }
}
