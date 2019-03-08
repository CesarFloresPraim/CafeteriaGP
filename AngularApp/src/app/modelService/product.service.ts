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
  newProduct: Product;
  products: Product[];
  readonly baseURL = 'http://localhost:3000/maincafe/products';
  constructor(private http: HttpClient) { }


}
