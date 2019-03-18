import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../app/modelService/login.service';
import { User } from '../app/modelService/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularApp';
}
