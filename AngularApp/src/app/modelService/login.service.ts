import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { User} from './user.model';
import { appendFile } from 'fs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly baseURL = 'http://localhost:3000/login';
  constructor(private http: HttpClient, private router: Router) { }

//   router.post(this.baseURL + '/login', (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/maincafe',
//         failureRedirect: '/login',
//         failureFlash: true
//     })(req,res,next);
// }) 
  //this must implement passport, solution failed
  getUserDetails(body:any) {
    return this.http.post(this.baseURL,body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')

    });
  }

}
