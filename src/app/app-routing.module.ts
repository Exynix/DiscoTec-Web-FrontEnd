import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {UserLoginComponent} from "./login/user-login/user-login.component";
import {SearchPageComponent} from "./search-page/search-page.component";

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
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
