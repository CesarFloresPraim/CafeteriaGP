import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { User} from './user.model';
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  newUser: User;
  readonly baseURL = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(this.baseURL, user);
  }
}
