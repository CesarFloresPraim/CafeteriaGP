import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../modelService/login.service';
import { User } from '../../modelService/user.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null, Validators.required)
      
  });
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.loginForm.valid){
      console.log("invalid");
    } else {
    this.loginService.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data); this.router.navigate(['/maincafe'])},
      error => console.log(error)
    );
    }
  }
}