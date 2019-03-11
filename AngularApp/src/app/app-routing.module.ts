import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincafeComponent} from './components/maincafe/maincafe.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { ProductComponent} from './components/product/product.component';
import { ProvidersComponent} from './components/providers/providers.component';

const routes: Routes = [
  {path: 'maincafe', component: MaincafeComponent,
    children : [{
      path: 'products', component: ProductComponent
    },
      {path: 'register', component: RegisterComponent},
      {path: 'providers', component: ProvidersComponent}
      ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
