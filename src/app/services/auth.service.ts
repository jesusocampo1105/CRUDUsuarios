import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3001";
  urlget = "http://localhost:3001/get/users/";
  urldelete = "http://localhost:3001/new/user/";
  urlpost = "http://localhost:3001/new/user/";
  urlput = "http://localhost:3001/new/user/";


  constructor(private http: HttpClient) { }

  signUp(user: any){
   return this.http.post<any>(this.url + "/login", user)
  }
}
