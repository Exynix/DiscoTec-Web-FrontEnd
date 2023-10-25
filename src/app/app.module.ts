import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarLandingPageComponent } from './top-bar/top-bar-landing-page/top-bar-landing-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { AdminSignupComponent } from './signup/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    HeroSectionComponent,
    TopBarComponent,
    TopBarLandingPageComponent,
    HeroSectionComponent,
    SearchPageComponent,
    LoginComponent,
    SignupComponent,
    UserSignupComponent,
    AdminSignupComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
