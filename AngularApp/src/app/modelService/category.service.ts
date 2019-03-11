import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Category} from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly baseURL = 'http://localhost:3000/maincafe/categories';
  constructor(private http: HttpClient, private router: Router) { }

  postCategory(category: Category) {
    return this.http.post(this.baseURL, category);
  }

  getCategoryList() {
    return this.http.get(this.baseURL);
  }

  putCategory(category: Category) {
    return this.http.put(this.baseURL + `/${category._id}`, category);
  }

  deleteCategory(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`).subscribe(data => {
    });
  }
}
