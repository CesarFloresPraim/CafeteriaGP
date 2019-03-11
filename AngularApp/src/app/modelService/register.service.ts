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
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  type: string;
  readonly baseURL = 'http://localhost:3000/login';
  constructor(private http: HttpClient) { }

  postUser(user: User) {
    return this.http.post(this.baseURL , user);
  }
}
