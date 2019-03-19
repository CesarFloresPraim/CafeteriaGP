import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {Providers} from './providers.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  readonly baseURL = 'http://localhost:3000/maincafe/providers';
  constructor(private http: HttpClient) { }

  postProvider(provider: Providers) {
    return this.http.post(this.baseURL, provider);
  }
  getProviderList() {
    return this.http.get(this.baseURL);
  }
  getProvider(_id: string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
  putProvider(provider: Providers) {
    return this.http.put(this.baseURL + `/${provider._id}`, provider);
  }

  deleteProvider(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
