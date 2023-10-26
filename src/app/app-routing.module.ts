import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {UserLoginComponent} from "./login/user-login/user-login.component";
import {SearchPageComponent} from "./search-page/search-page.component";
import { BookingComponent } from './booking/booking.component';
import { InfoDiscoComponent } from './info-disco/info-disco.component';

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },

  {
    path: 'login',
    component: UserLoginComponent
  },

  {
    path: "search",
    component: SearchPageComponent
  },

  {
    path: "booking",
    component: BookingComponent
  },

  {
    path: "infoDisco",
    component:InfoDiscoComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
