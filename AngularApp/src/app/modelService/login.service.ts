import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly baseURL = 'http://localhost:3000/cafeteria';
  constructor(private http: HttpClient) { }
  getUserDetails(username, password) {
    return this.http.get(this.baseURL + '/' + username).subscribe(data => {
      console.log(data + 'got from server');
    });
  }
}
