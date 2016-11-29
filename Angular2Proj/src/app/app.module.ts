import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
 import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"Home",component:HomeComponent},
      {path:"Login",component:LoginComponent},
      {path:"Register",component:RegisterComponent}
    ])
    // FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
