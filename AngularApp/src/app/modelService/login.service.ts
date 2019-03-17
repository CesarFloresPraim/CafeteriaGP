import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { User} from './user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly baseURL = 'http://localhost:3000/login';
  constructor(private http: HttpClient, private router: Router) { }
  getUserDetails(user) {
    return this.http.post(this.baseURL + '/' + user.username, user).subscribe(data => {
      this.router.navigate(['/maincafe']).then(e => {
        if (e) {
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
      });
    });
  }
}
