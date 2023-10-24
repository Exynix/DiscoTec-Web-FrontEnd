import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBarLandingPageComponent } from './top-bar/top-bar-landing-page/top-bar-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserLoginComponent,
    HeroSectionComponent,
    TopBarComponent,
    TopBarLandingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
