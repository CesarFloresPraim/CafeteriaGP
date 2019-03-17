import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MaincafeComponent } from './components/maincafe/maincafe.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { CategoryComponent } from './components/category/category.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DiningroomComponent } from './components/diningroom/diningroom.component';
import { OrderComponent } from './components/order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaincafeComponent,
    RegisterComponent,
    ProductComponent,
    ProvidersComponent,
    CategoryComponent,
    DiningroomComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
