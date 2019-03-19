import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Order} from './order.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  readonly baseURL = 'http://localhost:3000/maincafe/diningrooms';
  constructor(private http: HttpClient) { }

/*  postRoom(order: Order) {
    return this.http.post(this.baseURL, order);
  }
  getRoomList() {
    return this.http.get(this.baseURL);
  }

  putRoom(order: Order) {
    return this.http.put(this.baseURL + `/${order._id}`,order);
  }

  deleteRoom(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }*/
}
