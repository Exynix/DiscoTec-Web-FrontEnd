import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarLandingPageComponent } from './top-bar/top-bar-landing-page/top-bar-landing-page.component';
import { SearchPageComponent } from './search-page/search-page/search-page.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    HeroSectionComponent,
    TopBarComponent,
    TopBarLandingPageComponent
    HeroSectionComponent,
    SearchPageComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
