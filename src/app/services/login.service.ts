import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Owner} from "../model/owner.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "http://localhost:8090/login"

  constructor(private http: HttpClient) { }

  /*
  loginClient(): Observable<Owner | undefined >{
    return this.http.post()
  }


   */
}
