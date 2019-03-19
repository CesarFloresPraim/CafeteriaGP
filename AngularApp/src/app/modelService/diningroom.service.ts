import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diningroom} from './diningroom.model';
import 'rxjs';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DiningroomService {
  readonly baseURL = 'http://localhost:3000/maincafe/diningrooms';
  constructor(private http: HttpClient) { }

  postRoom(diningRoom: Diningroom) {
    return this.http.post(this.baseURL, diningRoom);
  }
  getRoomList() {
    return this.http.get(this.baseURL);
  }
  getRoom(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }

  putRoom(diningRoom: Diningroom) {
    return this.http.put(this.baseURL + `/${diningRoom._id}`,diningRoom);
  }

  deleteRoom(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
