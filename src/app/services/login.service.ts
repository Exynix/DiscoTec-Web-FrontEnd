import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Owner} from "../model/owner.model";
import {Client} from "../model/client.model";

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

  saveClientInLocalStorage(client: Client){

      // 1. Parse user to string
      // 2. Save it in local storage in a key-value pair.
    const clientString = JSON.stringify(client)
    localStorage.setItem("currentClient", clientString)

  }

  getClientFromLocalStorage(): Client | null {
    // 1. Get the user string from local storage
    // 2. Parse it to its data structure
    const savedClientString  = localStorage.getItem("currentClient")

    if (savedClientString != null){
      const userInfo = JSON.parse(savedClientString)
      return userInfo
    }

    console.log("Failed to get client data because its null.")
    return null
  }
}
