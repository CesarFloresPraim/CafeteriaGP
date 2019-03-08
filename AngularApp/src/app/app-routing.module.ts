import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincafeComponent} from './components/maincafe/maincafe.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path: 'maincafe', component: MaincafeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
