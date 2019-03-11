import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient} from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseURL = 'http://localhost:3000/maincafe/products';
  constructor(private http: HttpClient) { }

  postProduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(product: Product) {
    return this.http.put(this.baseURL + `/${product._id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
