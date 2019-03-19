import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User} from './user.model';


@Injectable({
  providedIn: 'root'
})

// export class LoginService {
//   readonly baseURL = 'http://localhost:3000/login';
//   constructor(private http: HttpClient, private router: Router) { }
//   getUserDetails(user) {
//     return this.http.post(this.baseURL + '/' + user.username, user).subscribe(data => {
//       this.router.navigate(['/maincafe']).then(e => {
//         if (e) {
//           console.log('Navigation is successful!');
//         } else {
//           console.log('Navigation has failed!');
//         }
//       });
//     });
//   }
// }
export class LoginService {
  readonly baseURL = 'http://localhost:3000/login';
  constructor(private http: HttpClient) { }

//   router.post(this.baseURL + '/login', (req, res, next) => {
//     passport.authenticate('local', {
//         successRedirect: '/maincafe',
//         failureRedirect: '/login',
//         failureFlash: true
//     })(req,res,next);
// }) 
  //this must implement passport, solution failed
  login(body: any) {
    return this.http.post(this.baseURL + '/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')

    });
  }

}
