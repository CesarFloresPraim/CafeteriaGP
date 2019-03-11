import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MaincafeService {

  readonly baseURL = 'http://localhost:4200/maincafe';
  constructor(private http: HttpClient, private router: Router) { }
  navigateTo(url) {
    this.router.navigate(['maincafe/' + url]);
  }
}
