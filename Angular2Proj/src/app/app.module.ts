import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Typeahead } from 'ng2-typeahead';
import { DatePickerModule } from 'ng2-datepicker';
//adding rxjs Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Services
import {LookupService} from './services/lookup.service';
import {UrlService} from './services/url.service';
import { UsersComponent } from './users/users.component';
import { PhoneformatterPipe } from './phoneformatter.pipe';
import { UserdetailComponent } from './userdetail/userdetail.component';
import {LoginService} from './services/login.service';
import { ProductsComponent } from './products/products.component';
import { HighlightDirective } from './highlight.directive';
import { DatepickerDirective } from './datepicker.directive';


@NgModule(
  
  {
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    Typeahead,
    UsersComponent,
    PhoneformatterPipe,
    UserdetailComponent,
    ProductsComponent,
    HighlightDirective,
    DatepickerDirective,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot([
      {path:"Home",component:HomeComponent},
      {path:"Login",component:LoginComponent},
      {path:"Register",component:RegisterComponent},
       {path:"Products",component:ProductsComponent}
    ])
    // FormsModule,
    // HttpModule
  ],
  providers: [LookupService,UrlService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
