import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Category} from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class UnitService {


  readonly baseURL = 'http://localhost:3000/maincafe/units';
  constructor(private http: HttpClient, private router: Router) { }

  getUnitList() {
    return this.http.get(this.baseURL);
  }
}
