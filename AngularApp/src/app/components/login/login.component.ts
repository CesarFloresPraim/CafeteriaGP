import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../modelService/login.service';
import { User } from '../../modelService/user.model';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    // this.loginService.getUserDetails(user);
  }
}
