import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient} from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {Unit} from './unit.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseURL = 'http://localhost:3000/maincafe/products';
  constructor(private http: HttpClient) { }

  postProduct(product: Product, possibleUnits: Array<Unit>) {
    let fullProduct = {
      prod: product,
      possible: possibleUnits
    };
    return this.http.post(this.baseURL, fullProduct);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }
  getProductSeacrh(cat: string, search: string) {
    return this.http.get(this.baseURL + `/category2/${cat}/${search}` );
  }
  getProductPerCategory(name: string) {
    return this.http.get(this.baseURL + `/category/${name}`);

  }
  putProduct(product: Product) {
    return this.http.put(this.baseURL + `/${product._id}`, product);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
