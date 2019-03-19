import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './order.model';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly baseURL = 'http://localhost:3000/maincafe/orders';
  constructor(private http: HttpClient) { }

  postOrder(order: any) {
    return this.http.post(this.baseURL, order);
  }
  getOrderList() {
    return this.http.get(this.baseURL);
  }
  putOrder(_id: string, approvedCart: Array<any>) {
    return this.http.put(this.baseURL + `/${_id}`, approvedCart);
  }
  getOrder(name: string) {
    return this.http.get(this.baseURL + `/${name}`);

  }
  deleteOrder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
